import './App.css';
import React, { Component } from 'react'


class App extends Component {
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
    const value = target.type === 'checkbox' ? target.checked : target.value;
    
    this.setState({
      [name]: value,
    });
  }
  
  render() {
    return (
      <div>
      <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
      <form className="form">
      <label>
      Diga qual o seu Estado favorito! De React ou do Brasil, você decide! =)
      <textarea name="estadoFavorito" value={this.state.estadoFavorito} onChange={this.handleChange} />
      </label>
      <label>
      Idade: 
      <input
      type="number"
      name="idade"
      value={this.state.idade} 
      onChange={this.handleChange} 
      />
      </label>
      
      <label>
      Vou Comparecer: 
      <input
      type="checkbox"
      name="vaiComparecer"
      value={this.state.vaiComparecer} 
      onChange={this.handleChange} 
      />
      </label>
      </form>
      </div>
      );
    }
  }
  
  export default App;
