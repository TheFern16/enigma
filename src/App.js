import React, { Component } from 'react';

// import components
import InputName from './Components/InputName';
import InputMessage from './Components/InputMessage';
import PickDate from './Components/PickDate';




class App extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      message: '',
      date: ''
    }
  }

  render() {
    return (
      <div style={{width: '350px'}}>
        <InputName
          name={this.state.name}
        />
        <InputMessage
          message={this.state.message}
        />
        <PickDate />
      </div>
    );
  }
}

export default App;

