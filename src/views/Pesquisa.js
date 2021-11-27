import { useEffect } from "react";
import { useLocation } from "react-router";
import ScrollContainer from "react-indiana-drag-scroll";

import LojaItem from "../components/LojaItem";
import ProductList from "../components/ProductList";

import { loja } from "../data/loja";
import { produto } from "../data/produto";

export default function Pesquisa() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [useLocation().pathname]);

  const pesquisa = useLocation().search.split('=')[1]

  const resultadoLojas = [];
  const resultadoProdutos = [];

  loja.forEach(l => {
    if (l.nome.toLowerCase().includes(pesquisa.toLowerCase())) {
      resultadoLojas.push(l);
    }
  });

  produto.forEach(p => {
    if (p.nome.toLowerCase().includes(pesquisa.toLowerCase())) {
      resultadoProdutos.push(p);
    }
  });

  return (
    <div className="pesquisa-page">
      <div className="pesquisa-box">
        <h1 className="pesquisa-title">Resultados para "{pesquisa}"</h1>
        {resultadoLojas.length > 0 ?
          <div>
            <h3 className="pesquisa-subtitle">Lojas</h3>
            <ScrollContainer className="pesquisa-lojas">
              {resultadoLojas.map(l => {
                return <LojaItem key={l.id} id={l.id} image={l.foto_loja} nome={l.nome} />
              })}
            </ScrollContainer>
          </div> : ""}

        {resultadoProdutos.length > 0 ?
          <div>
            <h3 className="pesquisa-subtitle">Produtos</h3>
            <ProductList products={resultadoProdutos} />
          </div>
          : ""}

        {resultadoProdutos.length == 0 && resultadoLojas.length == 0 ? "Sem resultados para essa pesquisa" : ""}
      </div>
    </div>
  )
}