import React from 'react';

class City extends React.Component {
  render() {
    return (
      <div>
        <label for="city">City:</label>
        <input name="city" id="city"></input> 
      </div>
    )
  }
}

export default City;