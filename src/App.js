// eslint-disable

import React, {Component} from 'react';
import './App.css';

class AddNumber extends Component{
  render(){
    return (
      <div>
        <h1>Add Number</h1>
        <div class="inpBox">
          <input type="button" value="+" />
          <input type="text" defaultValue="0" />
        </div>
      </div>
    )
  }
}

class AddNumberRoot extends Component{
  render(){
    return (
      <div>
        <h1>Add Number Root</h1>
        <AddNumber />
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <h1>Root</h1>
      <AddNumberRoot />
      <DisplayNumberRoot />
    </div>
  );
}

class DisplayNumber extends Component {
  render() {
    return (
      <div>
        <h1>Display Number</h1>
        <input type="text" value="0" readOnly></input>
      </div>
    );
  }
} 

class DisplayNumberRoot extends Component {
  render(){
    return (
      <div>
        <h1>Display Number Root</h1>
        <DisplayNumber />
      </div>
    );
  }
} 

export default App;