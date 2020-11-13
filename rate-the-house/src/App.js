import React, { Component } from 'react';
import './App.css';
// import MainArea from './MainArea';
import ReviewPage from './ReviewPage';
import AppData from './AppData.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <MainArea /> */}
        <ReviewPage />

        
      </div>
    );
  }
}

export default App;
