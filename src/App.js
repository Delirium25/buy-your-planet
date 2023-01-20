import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Planets from "./components/Planets";
import Basket from "./components/Basket";
import Contact from "./components/Contact";


function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Planets/>} />
        <Route path="/basket" element={<Basket/>} />
        <Route path="/contact" element={<Contact/>} />
       
       </Routes>
    </BrowserRouter>
  );
}

export default App;
