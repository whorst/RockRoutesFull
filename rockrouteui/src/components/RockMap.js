import React, {Component} from 'react'
import { render } from 'react-dom'
import { Map, Circle, Popup, TileLayer } from 'react-leaflet'
import MapboxLayer from './MapboxLayer.js'
import {CRS} from 'leaflet';

export default class RockMap extends Component {

    constructor(props){
        super(props);
        this.state = {rockRoutes : props.rockRoutes, zoomLevel: props.zoomLevel, focusCoordinate: props.focusCoordinate}
    }

    createCircleMarkers = () => {
        if(this.props.rockRoutes){
            let circleMarkerArray = []
            for(let rockRoute of this.props.rockRoutes){
                circleMarkerArray.push(
                    this.createCircleMarker(rockRoute)
                )
            }
            return circleMarkerArray;
        }
    }

    createCircleMarker(rockRoute){
        if(rockRoute.type === "Trad" || rockRoute.type === "TR"){
            return(
                <Circle color={"red"} key={rockRoute.name+rockRoute.state+rockRoute.rating+Math.random()*100} center={[rockRoute.latitude, rockRoute.longitude]} radius={10}>
                    <Popup>
                        <p>Name: {rockRoute.name}</p>
                        <p>Type: {rockRoute.type}</p>
                        <p>Rating: {rockRoute.rating}</p>
                        <p>Stars: {rockRoute.stars}</p>
                    </Popup>
               </Circle>
            )
        }if(rockRoute.type === "Boulder"){
            return(
                <Circle color={"orange"} key={rockRoute.name+rockRoute.state+rockRoute.rating+Math.random()*100} center={[rockRoute.latitude, rockRoute.longitude]} radius={10}>
                    <Popup>
                        <p>Name: {rockRoute.name}</p>
                        <p>Type: {rockRoute.type}</p>
                        <p>Rating: {rockRoute.rating}</p>
                        <p>Stars: {rockRoute.stars}</p>
                    </Popup>
               </Circle>
            )
        }if(rockRoute.type === "Alpine"){
            return(
                <Circle color={"yellow"} key={rockRoute.name+rockRoute.state+rockRoute.rating+Math.random()*100} center={[rockRoute.latitude, rockRoute.longitude]} radius={10}>
                    <Popup>
                        <p>Name: {rockRoute.name}</p>
                        <p>Type: {rockRoute.type}</p>
                        <p>Rating: {rockRoute.rating}</p>
                        <p>Stars: {rockRoute.stars}</p>
                    </Popup>
               </Circle>
            )
        }
        if(rockRoute.type === "Sport"){
            return(
                <Circle color={"green"} key={rockRoute.name+rockRoute.state+rockRoute.rating+Math.random()*100} center={[rockRoute.latitude, rockRoute.longitude]} radius={10}>
                    <Popup>
                        <p>Name: {rockRoute.name}</p>
                        <p>Type: {rockRoute.type}</p>
                        <p>Rating: {rockRoute.rating}</p>
                        <p>Stars: {rockRoute.stars}</p>
                    </Popup>
               </Circle>
            )
        }else{
            return(
                <Circle color={"blue"} key={rockRoute.name+rockRoute.state+rockRoute.rating+Math.random()*100} center={[rockRoute.latitude, rockRoute.longitude]} radius={10}>
                    <Popup>
                        <p>Name: {rockRoute.name}</p>
                        <p>Type: {rockRoute.type}</p>
                        <p>Rating: {rockRoute.rating}</p>
                        <p>Stars: {rockRoute.stars}</p>
                    </Popup>
               </Circle>
            )
        }
    }

    render() {
        return (
            <div style={{"height":"96%"}}>
                <div style={{"height":"100%"}}>
                <Map style={{"width":"100%", "height":"100%"}} center={this.props.focusCoordinate} zoom={this.props.zoomLevel}>
                    <MapboxLayer accessToken="pk.eyJ1Ijoid2hvcnN0MDQyIiwiYSI6ImNqcmUyNTdqeTF1bTA0YXM3cXR6cXhvZGcifQ.gXAcNsqcsrzvnw7x3c489A" crs={CRS.Simple} style="mapbox://styles/whorst042/cjubsw8jx03sz1fmhbwhyntwn"/>
                        <p>{this.createCircleMarkers()}</p>
                </Map>
                </div>
            </div>
        );
    }
}

render(<RockMap />, document.getElementById('root'));
