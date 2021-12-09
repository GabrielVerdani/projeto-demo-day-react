import { useEffect } from "react";
import { useLocation } from "react-router";

import { integrantes } from "../data/integrantes";

import ProductList from "../components/ProductList";

import { produto } from "../data/produto";


export default function Index() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [useLocation()]);

  return (
    <div className="index-page">

      <div className="products-container">
        <div className="wrapper">
          <h2>Nossa Equipe</h2>
          <ProductList products={integrantes} />
        </div>
        </div>
    </div >
  )
}