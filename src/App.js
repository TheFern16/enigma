import React, { Component } from 'react';
import { Card } from 'react-toolbox/lib/card/';
import { Button } from 'react-toolbox/lib/button/Button';

// import components
import InputName from './Components/InputName';
import InputMessage from './Components/InputMessage';
import DatePicker from './Components/DatePicker';




class App extends Component {
  render() {
    return (
      <Card style={{width: '350px'}}>
        <InputName />
        <InputMessage />
        <DatePicker />

        <Button />
        <Button />

      </Card>
    );
  }
}

export default App;

