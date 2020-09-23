import React from 'react';

class TextInput extends React.Component {
  render() {
    const { label, maxLength, upperCase, required, specialChars } = this.props.data

    return (
      <div>
        <label for={label}>{label}:</label>
        <input name={label} id={label} maxLength={maxLength}></input> 
      </div>
    )
  }
}

export default TextInput;