import { loja } from '../data/loja';
import { useLocation } from 'react-router'
import ProductItem from '../components/ProductItem';

export default function Loja() {
  let usuarioLogado = 10
  let location = useLocation().search;
  let id = Number(location.split('=')[1])
  let infoLoja = loja.find(l => l.id == id);

  console.log()

  return (
    <div className="loja-container">
      {infoLoja.id_usuario.id == usuarioLogado ?
        <div className="loja-dashboard">
          <h1>Dono</h1>
        </div>
        :
        <div className="loja-usuario">
          <h1>{infoLoja.nome}</h1>
          {infoLoja.produtos.map(product => {
            return (
              <ProductItem
                id={product.id}
                image={product.foto_produto}
                title={product.nome}
                description={product.descricao}
                price={product.preco} />
            )
          })}
        </div>
      }
    </div>
  )
}