import React, {Component} from 'react'
//import { Dropdown } from 'semantic-ui-react'


const selectStyle = {
    width: '100%',
    height: '35px',
    fontSize: '25px'
};

export default class StateDropdown extends Component {

    constructor(props){
        super(props);
    }

createStateOptions = () => {
    const formattedStateOptions = []
    const stateList= ["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut", "Delaware",
                        "Florida", "Georgia", "Hawaii", "Idaho", "Illinois",
                      "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts",
                       "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada",
                       "New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio",
                       "Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee",
                       "Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"]

    for(var state in stateList) {
        formattedStateOptions.push(<option style={{"fontFamily":"Arial !important"}} data-testid={stateList[state]+"-test-id"} value={stateList[state]} key={stateList[state]}>{stateList[state]}</option>);
    }
    return formattedStateOptions
}

getStateChange =(e) =>{
    console.log(e.target.value);
    this.props.updateFocusState(e.target.value);
}
render(){
    return(
    <div>
         <select data-testid="select-tag" style={selectStyle} onChange={this.getStateChange}>
            {this.createStateOptions()}
         </select>
    </div>

        );
    }
}
