import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Index from "./views/Index/Index";
import CadastroLoja from './views/CadastroLoja/CadastroLoja'
import Loja from './views/Loja/Loja'
import Pesquisa from './views/Pesquisa/Pesquisa'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.scss'

export default function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" exact element={<Index />} />
        <Route path="/cadastroloja" element={<CadastroLoja />} />
        <Route path="/pesquisa" element={<Pesquisa />} />
        <Route path="/loja" element={<Loja />} />
      </Routes>

      <Footer />
    </Router>
  );
};