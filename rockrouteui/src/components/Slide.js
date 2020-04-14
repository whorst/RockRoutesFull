import React, {Component} from 'react'
import '../styling/slide.css'
import RockRouteCard from './RockRouteCard'
//import { Dropdown } from 'semantic-ui-react'



export default class Slide extends Component {

    constructor(props){
        super(props);
        this.myRef = React.createRef()
        this.state = {
            scrollTop: 0,
            error: false,
            hasMore: true,
            isLoading: false,
            chunk: 100,
        }
    }

  onScroll = () => {
        const scrollTop = this.myRef.current.scrollTop
        if((this.props.rockRoutesSize>this.state.chunk) && (scrollTop/this.ScrollableDiv.clientHeight)>=.75){
            console.log(this.props.rockRoutesSize+"   "+this.state.chunk);
            console.log(this.props.rockRoutesSize>this.state.chunk);
//            console.log(scrollTop +"   "+ this.ScrollableDiv.clientHeight);
//            console.log(scrollTop/this.ScrollableDiv.clientHeight);
            const oldChunk = this.state.chunk;
            this.setState({chunk:oldChunk+100})
        }
  }

  createRockInfoCards = (rockRoutes) => {
    if(rockRoutes){
        const newArray = rockRoutes.slice(0, this.state.chunk)
        let rockRouteCardArray = []
        for(let rockRoute of newArray){
            rockRouteCardArray.push(
                <div onClick={() => this.props.updateFocusRoute({"longitude" : rockRoute.longitude, "latitude" : rockRoute.latitude})}>
                    <RockRouteCard key={rockRoute.name+rockRoute.state+rockRoute.rating+Math.random()*100} rockRouteData={rockRoute}/>
                </div>
            )
        }
        return rockRouteCardArray
    }
  }

   List = () =>{
    if(this.props.rockRoutes){
        return(
         <div>
              <div  ref={(elem) => this.ScrollableDiv = elem} id="navbar" className={'slideOut'}>
                {this.createRockInfoCards(this.props.rockRoutes)}
              </div>
         </div>
        )
    }else{
        return(
                <div style={{"width":"100%","maxHeight":"1000px"}}>
                  <div id="navbar" className={'slideOut'}>
                  </div>
                </div>
        )
    }
}


render(){
    const {
      scrollTop
    } = this.state
    return(
        <div ref={this.myRef} onScroll={this.onScroll} id="parent">
            <div >
                {this.List()}
            </div>
        </div>
        );
    }
}


