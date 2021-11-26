import axios from 'axios';

import { useEffect, useState } from 'react';
import { useLocation } from 'react-router'
import { FaWhatsapp } from 'react-icons/fa'
import ScrollContainer from 'react-indiana-drag-scroll'

import { loja } from '../data/loja';
import ProductItem from '../components/ProductItem'

export default function Loja() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [useLocation()]);

  // Pegar informações da loja
  const id = Number(useLocation().search.split('=')[1]) || 1
  const infoLoja = loja.find(l => l.id === id) || loja.find(l => l.id === 1);

  // Pegar endereço através do CEP
  const [endereco, setEndereco] = useState();

  useEffect(() => {
    axios
      .get(`https://viacep.com.br/ws/${infoLoja.cep}/json/`)
      .then((response) => setEndereco(response.data))
      .catch((err) => {
        console.error("Ocorreu um erro" + err);
      });
  }, []);

  // Pegar categorias da loja
  const produtos = infoLoja.produtos;
  const categorias = [...new Set(produtos.map(produto => produto.categoria))];



  return (
    <div className="loja-container">
      <div className="profile">
        <div className="wrapper">
          <div>
            <img src={infoLoja.foto_loja} alt={infoLoja.nome} />
            <div>
              <h1>{infoLoja.nome}</h1>
              <p>{endereco?.logradouro} Nº{infoLoja.numero}</p>
              <p>{endereco?.bairro}</p>
              <p>{endereco?.localidade} - {endereco?.uf}</p>
              <a className="contato" href={`https://wa.me/55${infoLoja.contato}`} target="_blank"><FaWhatsapp />{infoLoja.contato}</a>
            </div>
          </div>
        </div>
      </div>

      <div className="loja-products-container">
        <header>
          <div className="wrapper">
            <input type="text" placeholder="Buscar nessa loja..." />
            <ScrollContainer className="categories">
              {categorias.map(c => {
                return (
                  <div key={c.id}><button>{c.nome}</button></div>
                )
              })}
            </ScrollContainer>
          </div>
        </header>
        <div className="products">
          <div className="wrapper">
            {infoLoja.produtos.map(produto => {
              return (
                <div key={produto.id}>
                  <ProductItem
                    id={produto.id}
                    image={produto.foto_produto}
                    title={produto.nome}
                    description={produto.descricao}
                    price={produto.preco} />
                </div>
              )
            })}
            <div className="products-end">
              <span>{`Sem ${infoLoja.produtos.length !== 0 ? 'mais' : ''} produtos :(`}</span>
            </div>
          </div>
        </div>
      </div >
    </div >
  )
}