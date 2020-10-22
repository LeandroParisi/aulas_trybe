import React from 'react';

class Cv extends React.Component {
  render() {
    return (
      <div>
        <label for="cv">Your CV:</label>
        <textarea name="cv" id="cv" /> 
      </div>
    )
  }
}

export default Cv;