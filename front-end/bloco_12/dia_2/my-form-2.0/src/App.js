import React from 'react';
import './App.css';
import Date from './components/Date';
import FirstFieldset from './components/FirstFieldset';
import SecondFieldset from './components/SecondFieldset';


class App extends React.Component {
    constructor() {
        super();
        
        this.handleChange = this.handleChange.bind(this);
        this.letterUppercase = this.letterUppercase.bind(this);
        this.removeSpecialCaracteres = this.removeSpecialCaracteres.bind(this);   
        this.resetForm = this.resetForm.bind(this);
        this.sendForm = this.sendForm.bind(this);

        this.state = {
            name: '',
            email: '',
            cpf: '',
            endereco: '',
            cidade: '',
            estado: '',
            tipo: '',
            resume: '',
            position: '',
            description: '',
            submitted: false,
        };
    }

    letterUppercase({ target }) {
        const { name } = target;
        const value = target.type === 'text' ? target.value.toUpperCase() : '';

        this.setState({
            [name]: value,
        });
    }

    removeSpecialCaracteres({ target }) {
        const { name } = target;

        this.setState({
            [name]: target.value.replace(/[^\w\s]/gi, ''),
        });
    }

    onBlurHandler = event => {
        let { name, value } = event.target;

        this.setState({
            [name]: value = value.match(/^\d/) ? '' : value,
        });
    }

    handleChange({ target }) {
        const { name, value } = target;
        
        this.setState({
            [name]: value,
        });
    }

    resetForm({ target }) { 
        const { name, value } = target;
        this.setState({
            [name]: value,
        });
    };

    sendForm() { 
        this.setState({ submitted: true }) 
    };  

    render() {
        const { submitted } = this.state;
        return (
            <form>
                <FirstFieldset 
                handleChange={this.handleChange} 
                letterUppercase={this.letterUppercase}
                removeSpecialCaracteres={this.removeSpecialCaracteres}
                onBlurHandler={ this.onBlurHandler }
                />
                <SecondFieldset handleChange={this.handleChange} />
                <input
                type="button"
                sendForm={ this.sendForm }
                value="Enviar"
                />
                <input
                type="reset"
                resetForm={ this.resetForm }
                value="Limpar"
                />
                { submitted && <Date currentState={ this.state } /> }
            </form>
        );
    }
}

    export default App;
