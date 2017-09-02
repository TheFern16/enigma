import React, { Component } from 'react';

// import components
import InputName from './Components/InputName';
import InputMessage from './Components/InputMessage';
import PickDate from './Components/PickDate';
import PopUp from './Components/PopUp';
import Decrypt from './Components/Decrypt';


class App extends Component {
  constructor() {
    super();

    this.updateName = this.updateName.bind(this);

    this.state = {
      name: '',
      message: '',
      date: '',
      active: false
    }
  }

  updateName(name) {
    const newName = {...this.state.name};
    console.log(newName);
  }

  render() {
    return (
      <div className="card" style={{ width: '20em'}}>
        <div className="cardBody">
          <h4 className="card-title">Tovia's Enigma</h4>

          <div className="input-group">
            <span className="input-group-addon" id="sizing-addon1">S</span>
            <InputName
              className="form-control"
              name={this.state.name}
              updateName={this.updateName}
            />
          </div>

          <div className="input-group">
            <InputMessage
              className="form-control"
              message={this.state.message}

            />
          </div>

          <PickDate />
          <div className="row">
            <PopUp
              active={this.state.active}
            />
            <Decrypt
              active={this.state.active}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

