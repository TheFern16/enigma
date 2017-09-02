import React, { Component } from 'react';

// import components
import InputName from './Components/InputName';
import InputMessage from './Components/InputMessage';
import DatePicker from './Components/DatePicker';




class App extends Component {
  render() {
    return (
      <div style={{width: '350px'}}>
        <InputName />
        <InputMessage />
        <DatePicker />
      </div>
    );
  }
}

export default App;

