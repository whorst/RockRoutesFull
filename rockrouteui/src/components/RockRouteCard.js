import React, {Component} from 'react'
import '../styling/rockRouteCard.css'
import Card from 'react-bootstrap/Card'


export default class RockRouteCard extends Component {

    constructor(props){
        super(props);
        this.state = {rockRouteData : props.rockRouteData}

    }


render(){
    return(
        <div id="parentDiv">
            <Card border="light" bg="light" style={{ width: '100%', height: '100%' }}>
              <Card.Body  style={{ width: '100%', height: '100%', paddingTop:"0" }}>
                <Card.Title data-testid={"card-title"}>{this.state.rockRouteData.name}</Card.Title>
                <Card.Subtitle data-testid={"card-data"} className="mb-2 text-muted">{this.state.rockRouteData.type} {this.state.rockRouteData.rating}</Card.Subtitle>
              </Card.Body>
            </Card>;
        </div>
        );
    }
}


