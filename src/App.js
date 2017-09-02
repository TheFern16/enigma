import React, { Component } from 'react';

import Input  from 'react-toolbox/lib/input';
import DatePicker from 'react-toolbox/lib/date_picker/DatePicker';

class App extends Component {
  constructor() {
    super();

    // this.updateName = this.updateName.bind(this);

    this.state = {
      name: '',
      message: '',
      date: '',
      active: false
    }
  }

  handleChange(name, value) {
    console.log(name, value);
    this.setState({...this.state, [name]: value })
  }

  render() {
    return (
      <div className="card" style={{ width: '20em'}}>
        <div className="cardBody">
          <h4 className="card-title">Tovia's Enigma</h4>

          <div className="input-group">
            <span className="input-group-addon" id="sizing-addon1">S</span>
            <Input
              theme={this.props.input}
              type='text'
              label='Name'
              name='name'
              value={this.state.name}
              onChange={this.handleChange.bind(this, 'name')}
              maxLength={16 } />
          </div>

          <div className="input-group">
            <Input
              type='text'
              label='Message'
              name='message'
              value={this.state.message}
              onChange={this.handleChange.bind(this, 'message')}
              maxLength={16 } />
          </div>

          <div className="input-group">
            <DatePicker
              className="table"
              label='Birthdate'
              sundayFirstDayOfWeek
              onChange={this.handleChange.bind(this, 'date')}
              value={this.state.date}
            />
          </div>

        </div>
      </div>
    );
  }
}

export default App;

