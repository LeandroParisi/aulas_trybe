import React from 'react';

class Name extends React.Component {
  render() {
    const { event, value } = this.props;
    return (
      <div>
        <label for="name">Nome:</label>
        <input name="name" id="name" onChange={event} value={value.toUpperCase()} maxLength="40" required></input> 
      </div>
    )
  }
}

export default Name;