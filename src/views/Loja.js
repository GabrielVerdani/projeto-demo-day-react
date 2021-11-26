import axios from 'axios';

import { useEffect, useState } from 'react';
import { useLocation } from 'react-router'
import { FaRegEnvelope } from 'react-icons/fa'

import { loja } from '../data/loja';

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

  return (
    <div className="loja-page">
      <div className="loja-profile-box">
        <img src={infoLoja.foto_loja} alt={infoLoja.nome} />
        <div className="loja-profile-info">
          <h1>{infoLoja.nome}</h1>
          <b>Sla kkkk</b><br />
          <span><b>{infoLoja.seguidores}</b> {infoLoja.seguidores == 1 ? "Seguidor" : "Seguidores"}</span>
        </div>
        <div className="loja-profile-endereco">
          <p>{endereco ? endereco.logradouro : "..."}</p>
          <p>Nº{infoLoja.numero || "..."}</p>
          <p>{endereco ? endereco.bairro : "..."}</p>
          <p>{endereco ? endereco.localidade : "..."} - {endereco ? endereco.uf : "..."}</p>
          <a href={`https://wa.me/55${infoLoja.contato}`} target="_blank"><FaRegEnvelope /> Contato</a>
        </div>
      </div>


      <div className="loja-profile"></div>
    </div >
  )
}