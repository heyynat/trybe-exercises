import './App.css';
import React, { Component } from 'react'


class App extends Component {
  constructor() {
    super();
    
    this.handleChange = this.handleChange.bind(this);
    
    this.state = {
      estadoFavorito: '',
    };
  }
  
  handleChange(event) {
    this.setState({
      estadoFavorito: event.target.value,
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
      />
      </label>
      
      <label>
      Vou Comparecer: 
      <input
      type="checkbox"
      name="vaiComparecer"
      />
      </label>
      </form>
      </div>
      );
    }
  }
  
  export default App;
