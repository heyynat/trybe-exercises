import './App.css';
import pokemons from './data';
import Pokemon from './Pokemon';

function App() {
  return (
    <main className="App">
      {pokemons.map((pokemons) => <Pokemon pokemons={pokemons}/>)}
    </main>
  );
}

export default App;
