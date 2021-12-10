import { useEffect } from "react";
import { useLocation } from "react-router";

import { integrantes } from "../data/integrantes";

import IntegrantesList from "../components/IntegrantesList";



export default function Index() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [useLocation()]);

  return (
    <div className="index-page">

      <div className="products-container">
        <div className="wrapper">
          <h2>Nossa Equipe</h2>
          <IntegrantesList integrantes={integrantes} />
        </div>
        </div>
    </div >
  )
}