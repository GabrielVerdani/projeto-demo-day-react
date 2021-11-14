import Header from "./components/Header";
import Footer from "./components/Footer";

import Index from "./views/Index";
import CadastroLoja from './views/CadastroLoja'
import Loja from './views/Loja'
import Pesquisa from './views/Pesquisa'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './styles/App.scss'

export default function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" exact element={<Index />} />
        <Route path="/cadastroloja" exact element={<CadastroLoja />} />
        <Route path="/pesquisa" exact element={<Pesquisa />} />
        <Route path="/loja" exact element={<Loja />} />
      </Routes>

      <Footer />
    </Router>
  );
};