import React from 'react';

class Idade extends React.Component {
  render () {
    const { handleChange, idade } = this.props;
    
    return (
      <label>
      Idade: 
      <input
      type="number"
      name="idade"
      value={idade} 
      onChange={handleChange} 
      />
      </label>
      )
    }
    
  }
  export default Idade;