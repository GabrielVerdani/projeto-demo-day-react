import { produto } from "../data/produto";
import { usuario } from "../data/usuario";

import { useLocation } from "react-router";
import RatingBox from "../components/RatingBox";

export default function Produto() {
  // Pegar informações do produto
  const id = Number(useLocation().search.split('=')[1]) || 1
  const infoProduto = produto.find(p => p.id === id) || produto.find(p => p.id === 1);
  return (
    <div className="product-page">
      <div className="wrapper">
        <h1>{infoProduto.nome}</h1>
        <img src={infoProduto.foto_produto} alt={infoProduto.nome} />
        <span>R${infoProduto.preco}</span>
        <div className="description">
          <h2>Descrição</h2>
          <p>{infoProduto.descricao}</p>
        </div>

        <div className="ratings">
          {infoProduto.avaliacoes.map(aval => {
            const user = usuario.find(u => u.id === aval.id_usuario);

            return (
              <RatingBox
                img={user.foto_usuario}
                nome={user.nome}
                comentario={aval.comentario_produto}
                nota={aval.avaliacao_produto}
                criado_em={aval.criado_em} />
            )
          })}
        </div>
      </div>
    </div>
  )
}