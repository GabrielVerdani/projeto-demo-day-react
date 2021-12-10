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
          <p>
              Preparem-se para comprar!
              Comprar em dobro!
              Para proteger os comerciantes da exclusão!
              Para unir os comerciantes da nossa região!
              Pra relacionar comerciante com comprador!
              Pra estender o seu lucro as estrelas!
              Apresentamos...
              Equipe rocket negociando na velocidade da luz!
              Venha agora 
              E prepare-se para comprar, comprar!
              Uau é isso aí!
            </p>
          <IntegrantesList integrantes={integrantes} />
        </div>
        </div>
    </div >
  )
}