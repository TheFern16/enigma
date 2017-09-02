import React, { Component } from 'react';
import Input from 'react-toolbox/lib/input';

// import components

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
              label='Name'
              message='message'
              value={this.state.message}
              onChange={this.handleChange.bind(this, 'message')}
              maxLength={16 } />
          </div>


        </div>
      </div>
    );
  }
}

export default App;

