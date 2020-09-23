import React from 'react';

class Idade extends React.Component {

  render () {
    const { handleEvent, age } = this.props

    return (
      <input
        type="number"
        name="idade"
        onChange={handleEvent}
        value={age}
      />
    )
  }
}

export default Idade;