import React from 'react';

class Pokemon extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            image: '',
            type: '',
            AverageWeight: '',
        }
    }
    
    render() {
        return (
            <div className={'box-pokemon'}>
            <img src={this.props.pokemons.image} alt={this.props.pokemons.image}></img>
            <div>
            <p>{this.props.pokemons.name}</p>
            <p>{this.props.pokemons.type}</p>
            <p>Average Weight: {this.props.pokemons.averageWeight.value} {this.props.pokemons.averageWeight.measurementUnit}</p>
            </div>
            </div>
            )
        }
    }
    
    export default Pokemon;