import React, {Component} from 'react';

export default class AddNumber extends Component{
  render(){
    return (
      <div>
        <h1>Add Number</h1>
        <div className="inpBox">
          <input type="button" value="+" />
          <input type="text" defaultValue="0" />
        </div>
      </div>
    )
  }
}