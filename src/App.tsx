import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PokemonList from './components/PokemonList/index';
import PokemonDetail from './components/PokemonDetail';
import CombatList from './components/CombatList';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App: React.FC = () => {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<PokemonList />} />
            <Route path="/pokemon/:id" element={<PokemonDetail />} />
          </Routes>
        </div>
        <div style={{ flex: "0.4", marginLeft: '20px' }}>
          <CombatList />
        </div>
      </div>
      <ToastContainer position='bottom-right' />
    </Router>
  );
};

export default App;
