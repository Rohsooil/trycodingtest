import React, { Component, isValidElement } from 'react';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';
class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Content/>
        <Footer/>
      </div>
    );
  }
}

export default App;
