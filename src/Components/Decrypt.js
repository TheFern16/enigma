import React from 'react';
import Dialog from 'react-toolbox/lib/dialog/Dialog';

class Decrypt extends React.Component {
  render() {
    return (
      <div>
        <button label='Show my dialog'>Decrypt</button>
        <Dialog
          title='My awesome dialog'
        >
          <p>Here you can add arbitrary content. Components like Pickers are using dialogs now.</p>
        </Dialog>
      </div>
    )
  }
}

export default Decrypt;