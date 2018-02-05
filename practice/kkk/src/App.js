import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    console.log('constructor');
  }
  componentWillMount(){
    console.log('componentWillMount');
  }
  componentDidMount(){
    console.log('componentDidMount');
  }
  componentWillReceiveProps(){
    console.log('componentWillReceiveProps');
  }
  render() {
    const setStateHandler = (e) =>{
      console.log('* call setState()');
      this.setState({r:Math.random()});
    }
    return (
      <div className="App">
        <button onClick={setStateHandler}>setState</button>
      </div>
    );
  }
}

export default App;
