import React from 'react';
import pokemons from './data';
import Pokemon from './Pokemon';


const initState = {
    clickNumber: 0
}

class Pokedex extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            clickNumber: 0,
            pokes,
        }
        this.next = this.next.bind(this)
    }

    next() {
    if(this.state.clickNumber < 8){ 
        this.setState((state, _props) => ({
            clickNumber: state.clickNumber + 1
        }))
    }
    else
    this.setState(initState)
    }
    
    updateState() {
        this.setState({
            pokes: this.filterFire(),
        });
    }

    render () {
        
        return (
            <main>
            {<Pokemon pokemons={pokemons[this.state.clickNumber]} key={this.state.clickNumber}/>}
            <button onClick={this.next}>
                Proximo bixin
            </button>
            </main>
            )
        }
    }
    
    
    export default Pokedex;