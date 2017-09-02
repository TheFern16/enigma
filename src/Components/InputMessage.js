import React from 'react';
import Input from 'react-toolbox/lib/input';

class InputMessage extends React.Component {
  render() {
    return (
      <section>
        <Input type='text' label='Message' message='message' value={this.props.message} maxLength={120} />
      </section>
    )
  }
}

export default InputMessage;