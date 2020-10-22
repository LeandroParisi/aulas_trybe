import React, { Component } from 'react';
import EstadoFavorito from './EstadoFavorito.js';
import Idade from './Idade.js';

class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      estadoFavorito: '',
      idade: '',
      vaiComparecer: false
    };
  }


  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value
  
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div>
        <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
        <form className="form">
          <fieldset>
            <legend>Dados Básicos:</legend>

            <EstadoFavorito handleEvent={this.handleChange} value={this.state.estadoFavorito}/>

            <Idade handleEvent={this.handleChange} age={this.state.Idade}/>
            

          

            <input
              type="checkbox"
              name="vaiComparecer"
              onChange={this.handleChange}
            />
          </fieldset>

          <input
            type="file"
          />
        </form>
      </div>
    );
  }
}

export default Form;