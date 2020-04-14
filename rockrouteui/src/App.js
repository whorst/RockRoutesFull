import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
import './styling/App.css';
import RockMap from './components/RockMap.js'
import StateDropdown from './components/StateDropdown.js'
import RockRouteService from './services/RockRouteService.js'
import Slide from './components/Slide.js'
import RockRouteCard from './components/RockRouteCard.js'

class App extends React.Component {

fetch = require('whatwg-fetch');

    constructor(){
        super();
        this.timeout =  0;
        this.state ={focusState : "", zoomLevel : 4, focusCoordinate: [39.8283, -98.5795], rockRoutesReplacementLength:0};
    }

    updateFocusState = async (newState) => {
        this.updateStateParent(newState)
        const newStateInfo = await RockRouteService.getStateCenterAndZoomLevel(newState)
        await this.drillDown(newStateInfo);
    }
    updateFocusRoute = async (newLongLat) => {
        await this.drillDownRoute(newLongLat);
    }

    createCards = async(newRockRouteData) => {
        if(newRockRouteData){
            let rockRouteCardArray = []
            for(let rockRoute of newRockRouteData){
               await rockRouteCardArray.push(
                    <div onClick>
                        <RockRouteCard rockRouteData={rockRoute}/>
                    </div>
                )
            }
            this.setState({rockRouteCardArray:rockRouteCardArray});
        }
    }

    async drillDown(stateInfo){
        await this.setState({zoomLevel: 7, focusCoordinate:[stateInfo.latitude, stateInfo.longitude]})
    }

    async drillDownRoute(route){
        await this.setState({zoomLevel: 18, focusCoordinate:[route.latitude, route.longitude]})
    }

    async handleStateChange (data){
        await this.setState({rockRoutes:data});
        await this.setState({rockRoutesReplacement:data});
        await this.setState({rockRoutesReplacementLength:data.length});
    }

    async handleRouteSearch (routeName){
        const routeNameSize = routeName.length;
        const foundRoutes = this.state.rockRoutes.filter(rockRoute => rockRoute.name.toLowerCase().trim().includes(routeName.trim().toLowerCase()));
        var firstArray = []
        var otherArray = []
        while(foundRoutes.length !== 0){
            var focusRoute = foundRoutes.pop();
            if(focusRoute.name.substring(0, routeNameSize).toLowerCase() === routeName){
                firstArray.unshift(focusRoute);
            }else{
                otherArray.unshift(focusRoute);
            }
        }
        const combinedArrays = firstArray.concat(otherArray);
        this.setState({rockRoutesReplacement:combinedArrays})
        this.setState({rockRoutesReplacementLength:combinedArrays.length})
    }

     updateStateParent (newState){
            newState = newState.toLowerCase().replace(" ","_");
            var myUrl = `http://localhost:8000/StateRockRoutes?state=`+newState;
            fetch(myUrl)
            .then(response => response.json())
            .then(data => this.handleStateChange(data));
    }

    routeSearch (evt){
    var searchText = evt.target.value; // this is the search text
    if(this.timeout) clearTimeout(this.timeout);
        if(searchText===''){
            this.setState({rockRoutesReplacement:this.state.rockRoutes});
        }else{
            this.timeout = setTimeout(() => {
                this.handleRouteSearch(searchText)
            }, 300);
      }
    }
  render() {
    return (
    <div className='full'>
        <div className='mapDiv'>
            <div className='full'>
                <StateDropdown updateFocusState={this.updateFocusState} />
                <RockMap rockRoutes={this.state.rockRoutesReplacement} zoomLevel={this.state.zoomLevel} focusCoordinate={this.state.focusCoordinate} />
            </div>
        </div>
        <div id="rightBar">
            <input className='searchBox' style={{"boxSizing": "border-box"}} onChange={ evt => this.routeSearch(evt)} />
        <div className='searchDiv'>
            <Slide rockRoutes={this.state.rockRoutesReplacement} rockRoutesSize={this.state.rockRoutesReplacementLength} updateFocusRoute={this.updateFocusRoute}>
            </Slide>
        </div>
        </div>
    </div>
    );
  }
}

export default App;
