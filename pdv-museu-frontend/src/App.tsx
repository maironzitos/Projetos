import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { PDVPage } from './pages/PDVPage';
import { AdminPage } from './pages/AdminPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      {/* Menu de Navegação Simples para Teste */}
      <nav style={{ marginBottom: '20px' }}>
        <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
        <Link to="/pdv" style={{ marginRight: '10px' }}>PDV</Link>
        <Link to="/admin">Admin</Link>
      </nav>

      {/* Definição das Rotas */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pdv" element={<PDVPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;