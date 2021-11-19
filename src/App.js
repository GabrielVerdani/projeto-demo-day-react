import Header from "./components/Header";
import Footer from "./components/Footer";

import Index from "./views/Index";
import CadastroLoja from './views/CadastroLoja'
import Loja from './views/Loja'
import Pesquisa from './views/Pesquisa'
import Produto from './views/Produto'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './styles/App.scss'

export default function App() {
  return (
    <Router>
      <Header />

      <div style={{ minHeight: '100vh' }}>
        <Routes>

          <Route path="/" exact element={<Index />} />
          <Route path="/cadastroloja" exact element={<CadastroLoja />} />
          <Route path="/pesquisa" exact element={<Pesquisa />} />
          <Route path="/loja" exact element={<Loja />} />
          <Route path="/produto" exact element={<Produto />} />
          <Route path='*' exact element={<Index />} />
        </Routes>
      </div>

      <Footer />
    </Router >
  );
};