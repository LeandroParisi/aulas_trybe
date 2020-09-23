import React from 'react';

class Type extends React.Component {
  render() {
    return (
      <div>
        <input type="radio" id="apartment" name="gender" value="apartment" />
        <label for="apartment">Apartment</label>

        <br />

        <input type="radio" id="house" name="gender" value="house" />
        <label for="house">House</label>
      </div>
    )
  }
}

export default Type;