import React from 'react';

class SecondFieldset extends React.Component {
    render() {
      const { handleChange } = this.props;
        return(
            <fieldset>
            <legend>Dados trabalhistas</legend>
            <label>Resumo do currículo: 
            <textarea 
            name="resume"
            maxLength="1000"
            onChange={handleChange}
            required>
            </textarea>
            </label>
            
            <label>Cargo:
            <textarea 
            type="text" 
            name="position" 
            maxLength="40" 
            required
            onChange={handleChange}
            onMouseEnter={() => {
                alert('Preencha com cuidado esta informação.');
            }}>
            </textarea>
            </label>
            
            <label>Descrição do cargo: 
            <input 
            type="text" 
            name="description" 
            maxLength="500" 
            required
            onChange={handleChange}
            />
            </label>
            
            </fieldset>
            )
        }
    }
    
    export default SecondFieldset;