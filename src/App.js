import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Inicio'
import Cadastro from './pages/Cadastro';
import Jogadores from './pages/Lista';
import './App.css'; // Para estilos globais, se necessário

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />    
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/jogadores" element={<Jogadores />} />
      </Routes>
    </Router>
  );
}



export default App;