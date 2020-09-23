import React from 'react';

class Job extends React.Component {
  render() {
    return (
      <div>
        <label for="job">Your last job was as:</label>
        <input name="job" id="job"></input> 
      </div>
    )
  }
}

export default Job;