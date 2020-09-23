import React from 'react';
import logo from './logo.svg';
import './App.css';


class App extends React.Component {
  constructor() {
    super()
    console.log('página carregando');
    this.buttonEvent = this.buttonEvent.bind(this);
    this.buttonEvent2 = this.buttonEvent2.bind(this);
    this.buttonEvent3 = this.buttonEvent3.bind(this);

    this.state = {
      buttonOneCounter: 0,
      buttonOneColor: '',
      // buttonTwoCounter: 0,
      // buttoTwoColor: '',
      // buttonThreeCounter: 0,
      // buttonThreeColor: 
    }
  }

  buttonEvent () {
    console.log('Botão clicado!')
    this.setState ((componentState) => ({
      buttonOneCounter: componentState.buttonOneCounter + 1
    }));
    if (this.state.buttonOneColor % 2 === 0) {
      this.setState ((componentState) => ({
        buttonOneColor: 'Green'
      }))
    } else {
      this.setState ((componentState) => ({
        buttonOneColor: ''
      }))
    }
    console.log(this.state.buttonOneCounter);
    console.log(this.state.buttonOneColor);
  }
  
  buttonEvent2 () {
    console.log('Botão 2 clicado!')
    this.setState ((componentState) => ({
      buttonTwoCounter: componentState.buttonTwoCounter + 1
    }));
    console.log(this.state.buttonTwoCounter);

  }
  
  buttonEvent3 () {
    console.log('Botão 3 clicado!')
    this.setState ((componentState) => ({
      buttonThreeCounter: componentState.buttonThreeCounter + 1
    }));
    console.log(this.state.buttonThreeCounter);
  }
  
  render () {
    return (
      <div>
        <button onClick={() => this.buttonEvent()}>{'Button ONE:'} {this.state.buttonOneCounter}</button>

        <button onClick={this.buttonEvent2}>{'Button TWO:'} {this.state.buttonTwoCounter}</button>

        <button onClick={this.buttonEvent3}>{'Button THREE:'} {this.state.buttonThreeCounter}</button>
      </div>
    )
  };
}

export default App;
