import React from 'react';
import pokemons from './data';
import Pokemon from './Pokemon';


class Pokedex extends React.Component {
    render () {
        return (
            <main>
            {pokemons.map((pokemons) => <Pokemon pokemons={pokemons}/>)}
            </main>
            )
        }
    }
    
    
    export default Pokedex;