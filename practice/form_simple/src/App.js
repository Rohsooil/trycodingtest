import React, { Component } from 'react';
import logo from './logo.svg';
import {SimpleForm} from './SimpleForm';
import {NumberForm} from './NumberForm';
import {MultiForm} from './MultiForm';
import './App.css';

class App extends Component {
  render() {
    const style = {
      textAlign : 'left',
      padding : '10px'
    }
    return (
      <div style={style} className="App">
        심플폼 : <SimpleForm />
        <hr />
        숫자폼 : <NumberForm />
        <hr />
        다양한 폼 : <MultiForm />
      </div>
    );
  }
}

export default App;
