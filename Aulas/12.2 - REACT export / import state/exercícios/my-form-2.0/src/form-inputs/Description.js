import React from 'react';

class Description extends React.Component {
  render() {
    return (
      <div>
        <label for="description">About your last Job:</label>
        <input name="description" id="description"></input> 
      </div>
    )
  }
}

export default Description;