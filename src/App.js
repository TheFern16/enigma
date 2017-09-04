import React, { Component } from 'react';
import axios from 'axios';

import Input  from 'react-toolbox/lib/input';
import DatePicker from 'react-toolbox/lib/date_picker/DatePicker';
import Button from 'react-toolbox/lib/button/Button';
import Dialog from 'react-toolbox/lib/dialog/Dialog';

class App extends Component {
  constructor() {
    super();

    this.encryptRequest = this.encryptRequest.bind(this);

    this.state = {
      name: '',
      message: '',
      date: '',
      active: false,
      encryptedMessage: ''
    }
  }

  encryptRequest() {
    axios.post('/api/encrypt/12345', {
      name: this.state.name,
      message: this.state.message,
      date: this.state.date
    })
    .then((res) => {
      this.setState({
        encryptedMessage: res.data
      });
    });
  }

  handleToggle = () => {
    if (this.state.active) {
      this.setState({ active: !this.state.active });
    } else {
      this.setState({ active: !this.state.active });
      this.encryptRequest();
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
              <Button label='Encrypt' flat onClick={this.handleToggle} />
                <Dialog
                  actions={this.actions}
                  active={this.state.active}
                  onEscKeyDown={this.handleToggle}
                  onOverlayClick={this.handleToggle}
                >
                  <Input
                    type='text'
                    label='Message'
                    name='name'
                    value={this.state.encryptedMessage}
                    onChange={this.handleChange.bind(this, 'encryptedMessage')}
                  />
                </Dialog>

              <Button label='Decrypt' flat />
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default App;

