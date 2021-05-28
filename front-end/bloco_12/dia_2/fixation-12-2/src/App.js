import './App.css';
import React, { Component } from 'react'
import EstadoFavorito from './EstatoFavorito';
import Idade from './Idade';


class App extends Component {
  constructor() {
    super();
    
    this.handleChange = this.handleChange.bind(this);
    
    this.fileInput = React.createRef();
    
    this.state = {
      estadoFavorito: '',
      idade: '',
      vaiComparecer: false,
    };
  }
  
  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    
    this.setState({
      [name]: value,
    });
  }
  
  handleSubmit(event) {
    event.preventDefault();
    alert(
      `Selected file - ${this.fileInput.current.files[0].name}`
      );
    }
    
    render() {
      return (
        <div>
        <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
        <form className="form">
        <fieldset>
        <EstadoFavorito handleChange={this.handleChange} />
        <Idade handleChange={this.handleChange}/>
        <label>
        Vou Comparecer: 
        <input
        type="checkbox"
        name="vaiComparecer"
        value={this.state.vaiComparecer} 
        onChange={this.handleChange} 
        />
        </label>
        <label>
        Enviar Arquivo: 
        <input type="file" ref={this.fileInput} />
        </label>
        </fieldset>
        </form>
        </div>
        );
      }
    }
    
    export default App;
