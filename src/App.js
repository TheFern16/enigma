import React, { Component } from 'react';

import Input  from 'react-toolbox/lib/input';
import DatePicker from 'react-toolbox/lib/date_picker/DatePicker';
import Button from 'react-toolbox/lib/button/Button';

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      message: '',
      date: '',
      active: false
    }
  }

  handleChange(name, value) {
    this.setState({...this.state, [name]: value })
    console.log(this.state);
  }

  render() {
    return (
      <div className="card-deck">
        <div className="card row align-items-center" style={{ width: '40em'}}>
          <div className="cardBody">
            <h4 className="card-title">Tovia's Enigma</h4>

            <div className="input-group">
              <Input
                type='text'
                label='Name'
                name='name'
                value={this.state.name}
                onChange={this.handleChange.bind(this, 'name')}
              />
            </div>

            <div className="input-group">
              <Input
                type='text'
                label='Message'
                name='message'
                value={this.state.message}
                onChange={this.handleChange.bind(this, 'message')}
                maxLength={120} />
            </div>

            <div className="input-group">
              <DatePicker
                label='Formatted Date'
                sundayFirstDayOfWeek
                onChange={this.handleChange.bind(this, 'date')}
                inputFormat={(value) => `${value.getDate()}/${value.getMonth() + 1}/${value.getFullYear()}`}
                value={this.state.date}
              />
            </div>

            <div className="row">
              <Button label='Encrypt' flat />
              <Button label='Decrypt' flat />
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default App;

