import React from 'react';

class Address extends React.Component {
  render() {
    return (
      <div>
        <label for="address">Address:</label>
        <input name="address" id="address"></input> 
      </div>
    )
  }
}

export default Address;