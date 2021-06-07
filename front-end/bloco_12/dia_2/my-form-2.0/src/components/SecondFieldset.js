import React from 'react';

class SecondFieldset extends React.Component {
    render() {
        return(
            <fieldset>
            <legend>Dados trabalhistas</legend>
            <label>Resumo do currículo: 
            <textarea name="resume" size="1000" cols="100" rows="20" required></textarea>
            </label>
            
            <label>Cargo:
            <textarea type="text" name="position" id="position" size="40" required></textarea>
            </label>
            
            <label>Descrição do cargo: 
            <input type="text" name="description" size="500" required/>
            </label>
            
            </fieldset>
            )
        }
    }
    
    export default SecondFieldset;