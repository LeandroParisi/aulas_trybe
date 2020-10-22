import React from 'react';
import Name from './form-inputs/Name'
import Email from './form-inputs/Email'
import Address from './form-inputs/Address'
import City from './form-inputs/City'
import Cpf from './form-inputs/Cpf'
import State from './form-inputs/State'
import Type from './form-inputs/Type'
import Description from './form-inputs/Description';
import Cv from './form-inputs/Cv';
import Job from './form-inputs/Job'
import data from './data';
import TextInput from './form-inputs/TextInput'

class Form extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      address: '',
      city: '',
      cpf: '',
      cv: '',
      description: '',
      email: '',
      job: '',
      name: '',
      state: '',
      type: ''
    }
  }

  handleChange ({ target }) {
    const value = target.value;
    const key = target.name

    this.setState({
      [key]: value
    })

  }

  render() {
    return (
      <form>
        <fieldset>
          <legend>Personal Data:</legend>

            {/* {data.map((textInput, index) => <TextInput data={textInput} key={index}/>)} */}

            <Name event={this.handleChange} value={this.state.name}/>
            <Email event={this.handleChange} value={this.state.email}/>
            <Cpf event={this.handleChange} value={this.state.cpf}/>
            <Address event={this.handleChange} value={this.state.address}/>

            <State event={this.handleChange} value={this.state.state}/>
            <City event={this.handleChange} value={this.state.city}/>
            <Type event={this.handleChange} value={this.state.type}/>
        </fieldset>

        <fieldset>
          <legend>Trajetória:</legend>
            <Cv />
            <Job />
            <Description />
        </fieldset>
      </form>      
    )
  }
}

export default Form;