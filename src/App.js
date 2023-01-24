import React, { useEffect, useState } from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Planets from "./components/shop/Planets";
import Cart from "./components/cart/Cart";
import CartContext from './components/cart/CartContext';
import Contact from "./components/contact/Contact";
import Home from './components/home/Home';
import { capitalize } from '@mui/material';

export const CartContextContainer = React.createContext();


function App() {

  //cart test data
  const [cart, setCart] = useState([{
    "id": "1",
    "name": "Mercury",
    "picture": "http://space-facts.com/wp-content/uploads/mercury-transparent.png",
    "price": "4700000000",
    "distance": "58",
    "description": "Mercury is the closest planet to the Sun and due to its proximity it is not easily seen except during twilight. For every two orbits of the Sun, Mercury completes three rotations about its axis and up until 1965 it was thought that the same side of Mercury constantly faced the Sun. Thirteen times a century Mercury can be observed from the Earth passing across the face of the Sun in an event called a transit, the next will occur on the 9th May 2016."
  },
  {
    "id": "6",
    "name": "Saturn",
    "picture": "http://space-facts.com/wp-content/uploads/saturn-transparent.png",
    "price": "5666000000",
    "distance": "1426",
    "description": "Saturn is the sixth planet from the Sun and the most distant that can be seen with the naked eye. Saturn is the second largest planet and is best known for its fabulous ring system that was first observed in 1610 by the astronomer Galileo Galilei. Like Jupiter, Saturn is a gas giant and is composed of similar gasses including hydrogen, helium and methane."
  }]);

  return (
    <CartContextContainer.Provider value={new CartContext(cart, setCart)}>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Planets />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>

    </CartContextContainer.Provider>
  );
}

export default App;
