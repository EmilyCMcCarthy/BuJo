/* import React from 'react';

const HabitTracker1 = (props) => {
console.log("hellooutthere!")
var arr = [0,10,20,30,40,50,60,70,80,90,100]
    return (
        <div>
        <h1>Please Help!</h1>
      
        
<svg width="10000" height="30">
            {arr.map((elem) => {
                console.log("am I looping?")
                return (<rect key={elem} x={ elem * 6 } y="0" width="30" height="30" stroke="black" fill="aqua" />)
            })}
        


</svg>
      </div>
    )
}

export default HabitTracker1;

*/

import React, { Component } from 'react';
const moment = require('moment')
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { fetchTasks, fetchEvents, fetchNotes, gotNextDay, gotPreviousDay, fetchCategories, fetchColors } from '../store';
import {Tasks, Events, Notes} from './';
import SVGformat from './SVGformat';
//import HabitTracker1 from './HabitTracker1';

class HabitTracker1 extends Component {

  constructor(props) {
    super(props);
    this.state = {
        color: [0,0,0,0,0,0,0,0,0,0]
    }
    this.helper = this.helper.bind(this);
    this.helper2 = this.helper2.bind(this)
  }

  componentDidMount(){
    this.props.loadCategories(this.props.user.id);
  }

  helper(){
      this.setState({color: "blue"});
  }
  helper2(){
      return "blue";
  }

  render() {
    var fun = this.state.color
    var arr = [0,1,2,3,4,5,6,7,8,9,1]
    return (
        <div>
 
      
        
<svg width="10000" height="30">
            {arr.map((elem, indd, arrr) => {
                console.log("am I looping?")
                return (<rect key={elem} x={ elem * 30 } y="0" width="30" height="30" stroke="black" fill={this.helper2} onClick={()=> {console.log("silly")}} />)
            })}
        


</svg>
      </div>
    )
  }

}
const mapState = (state) => ({
  user: state.user,
  tasks: state.tasks,
  day: state.day,
  categories: state.categories,
  colors: state.colors
});

const mapDispatch = (dispatch) => {
  return {
   loadCategories(userId) {
            dispatch(fetchCategories(userId));
            dispatch(fetchColors());

        },
  
  };
}

export default connect(mapState, mapDispatch)(HabitTracker1);

   