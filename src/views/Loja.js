import { loja } from '../data/loja';
import { useLocation } from 'react-router'
import ProductItem from '../components/ProductItem';

export default function Loja() {
  let usuarioLogado = 10
  let location = useLocation().search;
  let id = Number(location.split('=')[1])
  let infoLoja = loja.find(l => l.id == id);

  return (
    <div className="loja-container">
      {infoLoja.id_usuario.id == usuarioLogado ?
        <div className="loja-dashboard">
          <h1>Dono</h1>
        </div>
        :
        <div className="loja-usuario">

          <div className="loja-header">
            <div className="loja-profile">
              <img src={infoLoja.foto_loja} alt={infoLoja.nome} />
              <h1>{infoLoja.nome}</h1>
            </div>
          </div>

          <div className="loja-products">
            <div className="loja-categories">
              <h2>Categorias</h2>
            </div>

            <div className="loja-products">
              <div className="loja-header">
                <h2>Produtos nesta loja:</h2>
              </div>
              <div className="loja-product-list">
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
            </div>
          </div>
        </div>
      }
    </div>
  )
}