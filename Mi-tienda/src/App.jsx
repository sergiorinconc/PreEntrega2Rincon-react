//import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './componentes/NavBar/Navbar';
import ItemsListContainer from './componentes/ItemsListContainer/ItemsListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import './styles/App.css';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemsListContainer greeting="¡Bienvenidos a Mi Tienda!" />} />
        <Route path="/category/:categoryId" element={<ItemsListContainer />} />
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
      </Routes>
    </Router>
  );
};

export default App;


