import { useEffect } from "react";
import { useLocation } from "react-router";
import { FaShoppingBag, FaRegEnvelope } from "react-icons/fa"

import { produto } from "../data/produto";
import { usuario } from "../data/usuario";
import { loja } from "../data/loja";
import { Link } from "react-router-dom";
import ProductItem from "../components/ProductItem";
import RatingBox from "../components/RatingBox";

export default function Produto() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [useLocation()]);

  // Pegar informações do produto
  const id = Number(useLocation().search.split('=')[1]) || 1
  const infoProduto = produto.find(p => p.id === id) || produto.find(p => p.id === 1);
  const infoLoja = loja.find(l => l.id === infoProduto.id_loja);

  let produtosAd = []
  let counter = 0;

  for (let p of infoLoja.produtos) {
    if (counter < 2) {
      if (p.id != infoProduto.id) {
        counter++
        produtosAd.push(p)
      }
    }
  }


  return (
    <div className="product-page">

      <div className="product-store-box">
        <div className="product-store-info">
          <img src={infoLoja.foto_loja} alt={infoLoja.nome} />
          <div>
            <b>{infoLoja.nome}</b>
            <p>{(infoLoja.seguidores).toLocaleString()} Seguidores</p>
          </div>
        </div>
        <div className="product-store-buttons">
          <Link to={`/loja?id=${infoLoja.id}`}><FaShoppingBag /> Ver loja</Link>
          <a href={`https://wa.me/55${infoLoja.contato}`} target="_blank"><FaRegEnvelope /> Contato</a>
        </div>
      </div>


      <div className="product-info-box">
        <div className="product-info-images">
          <img className="product-info-main-image" src={infoProduto.foto_produto} alt={infoProduto.nome} />
          <div className="product-info-other-images">
            <img src={infoProduto.foto_produto} alt={infoProduto.nome} />
            <img src={infoProduto.foto_produto} alt={infoProduto.nome} />
            <img src={infoProduto.foto_produto} alt={infoProduto.nome} />
            <img src={infoProduto.foto_produto} alt={infoProduto.nome} />
          </div>
        </div>

        <div className="product-info-content">
          <h1>{infoProduto.nome}</h1>
          <div>
            {infoProduto.avaliacoes.length} Avaliações
          </div>
          <p>{infoProduto.descricao}</p>
          <p className="product-info-distance"><b>Distância:</b> <span>3km</span> de você!</p>

          <div className="product-info-color-price">
            <div className="product-info-color">
              <b>Cor</b><br />
              <span className="active" style={{ backgroundColor: "#160F0C" }}></span>
              <span style={{ backgroundColor: "#AFAFDD" }}></span>
              <span style={{ backgroundColor: "#A9CFD3" }}></span>
              <span style={{ backgroundColor: "#CCF0C1" }}></span>
              <span style={{ backgroundColor: "#FDDCE9" }}></span>
            </div>

            <div className="product-info-price">
              <p>R$ {(infoProduto.preco + infoProduto.preco / 5).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
              <h2>R$ {infoProduto.preco.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</h2>
              <span>Com VOAcher</span>
            </div>
          </div>

          <button>Adicionar ao carrinho</button>
        </div>
      </div>


      <div className="product-description-wrapper">
        <div className="product-description-box">
          <h2>Descrição do produto</h2>
          <ul>
            {infoProduto.caracteristicas.map(c => {
              return (
                <li>{c}</li>
              )
            })}
          </ul>
        </div>
        <div className="product-ad-box">
          <h4>Mais de {infoLoja.nome}:</h4>
          {produtosAd.length > 1 ? produtosAd.map(p => {
            return (
              <ProductItem
                key={p.id}
                id={p.id}
                image={p.foto_produto}
                title={p.nome}
                description={p.descricao}
                price={p.preco} />
            )
          }) : "Não há mais produtos"}
          <Link to={`/loja?id=${infoLoja.id}`} className="product-ad-button">Ver mais</Link>
        </div>
      </div>


      <div className="product-rating-box">
        <h2>Principais avaliações</h2>
        {infoProduto.avaliacoes.length > 0 ? infoProduto.avaliacoes.map(a => {
          const user = usuario.find(u => u.id == a.id_usuario);
          return (
            <RatingBox
              nome={user.nome}
              img={user.foto_usuario}
              nota={a.avaliacao_produto}
              comentario={a.comentario_produto}
            />
          )
        }) : "Esse produto não tem avaliações"}
        <form className="product-rating-form">
          <textarea name="avaliacao" id="avaliacao" cols="30" rows="10" required></textarea>
          <button type="text">Enviar</button>
        </form>

      </div>
    </div>
  )
}