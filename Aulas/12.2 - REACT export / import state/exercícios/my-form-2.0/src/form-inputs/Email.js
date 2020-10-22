import React from 'react';

class Email extends React.Component {
  render() {
    return (
      <div>
        <label for="email">Email:</label>
        <input name="email" id="email"></input> 
      </div>
    )
  }
}

export default Email;