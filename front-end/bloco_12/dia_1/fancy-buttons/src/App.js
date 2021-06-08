import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()

    this.handleClick = this.handleClick.bind(this)
    this.handleClick2 = this.handleClick2.bind(this)
    this.handleClick3 = this.handleClick3.bind(this)

    this.state = {
      numeroDeCliquesbtn1: 0,
      numeroDeCliquesbtn2: 0,
      numeroDeCliquesbtn3: 0
    }

  }

  handleClick() {
    console.log('Clicou no botão 1!')
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliquesbtn1: estadoAnterior.numeroDeCliquesbtn1 + 1
    }))
  }
  
  handleClick2() {
    console.log('Clicou no botão 2!')
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliquesbtn2: estadoAnterior.numeroDeCliquesbtn2 + 1
    }))
  }
  
  handleClick3() {
    console.log('Clicou no botão 3!')
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliquesbtn3: estadoAnterior.numeroDeCliquesbtn3 + 1
    }))
  }

  render() {
    return (
    <>
    <button onClick={this.handleClick}>{this.state.numeroDeCliquesbtn1}</button>
    <button onClick={this.handleClick2}>{this.state.numeroDeCliquesbtn2}</button>
    <button onClick={this.handleClick3}>{this.state.numeroDeCliquesbtn3}</button>
    </>
    )
  }
}

export default App;