import React from 'react';

const estados = ["Acre","Alagoas","Amapá","Amazonas","Bahia","Ceará","Distrito Federal","Espírito Santo","Goiás","Maranhão","Mato Grosso","Mato Grosso do Sul","Minas Gerais","Pará","Paraíba","Paraná","Pernambuco","Piauí","Rio de Janeiro","Rio Grande do Norte","Rio Grande do Sul","Rondônia","Roraima","Santa Catarina","São Paulo","Sergipe","Tocantins"];

class FirstFieldset extends React.Component {
    render() {
      const { handleChange, letterUppercase, removeSpecialCaracteres, onBlurHandler} = this.props;

        return(
            <fieldset>
            <legend>Dados pessoais</legend>
            <label> Nome:
              <input
              name='name'
              type='text'
              maxLength='40'
              onChange={letterUppercase}
              required
              ></input>
            </label>
      
            <label> Email:
              <input
              name='email'
              type='text'
              maxLength='50'
              required
              ></input>
            </label>
      
            <label> CPF:
              <input
              name='cpf'
              type='text'
              maxLength='11'
              onChange={handleChange}
              required
              ></input>
            </label>
      
            <label> Endereço:
              <textarea
              name='endereco'
              maxLength='200'
              onChange={removeSpecialCaracteres}
              required
              ></textarea>
            </label>
      
            <label> Cidade:
              <input
              name='cidade'
              type='text'
              maxLength='28'
              onChange={onBlurHandler}
              required
              ></input>
            </label>
      
            <label> Estado:
              <select
              name='estado'
              onChange={handleChange}
              defaultValue=""
              required
              >
              <option value="">Selecione</option>
                {
                  estados.map((value, key) => (
                    <option key={ key }>{ value } </option>
                  ))
                }
              </select>
            </label>
      
            <label> Tipo:
              <input
              name='tipo'
              type="radio"
              value='Casa'
              required
              onChange={handleChange}
              />Casa
            </label> 
      
            <label>
              <input
              name='tipo'
              type="radio"
              value='Apartamento'
              required
              onChange={handleChange}
              />Apartamento
            </label>
          </fieldset>
        )
    }
}

export default FirstFieldset;