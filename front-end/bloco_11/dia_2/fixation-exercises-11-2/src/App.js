import React from 'react';
import './App.css';
import Image from './Image';
import Order from './Order';

class App extends React.Component {
  render() {
    const headphone = {
      id: 102,
      user: "cena@gmail.com",
      product: "Razer Headphone",
      price: {
        value: 99.99,
        currency: "dollars"
      }
    };
    
    const energyDrink = {
      id: 77,
      user: "cena@gmail.com",
      product: "Monster 500mL",
      price: {
        value: 9.99,
        currency: "dollars"
      }
    };
    
    const shoppingList = ['leite', 'arroz', 'feijão', 'banana', 'carne'];
    const items = shoppingList.map((item, index) => (<li key={ index }>{ item }</li>));
    
    return (
      <div className="App">
      <Image source = 'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg' alt='Cute cat staring' />
      
      <h1> Orders recently created </h1>
      <Order order={energyDrink} />
      <Order order={headphone} />
      <h2>Lista de compras</h2>
      <ul>
      { items }
      </ul>
      </div>
      );
    }
  }
  
  export default App;
