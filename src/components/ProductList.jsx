import ProductItem from "./ProductItem"

export default function ProductList(props) {

  return (
    <div>
      <div className="product-list">
        {props.products.map(product => {
          return (
            <div key={product.id}>
              <ProductItem
                id={product.id}
                image={product.foto_produto}
                title={product.nome}
                description={product.descricao}
                price={product.preco} />
            </div>
          )
        })}
      </div>
    </div>
  )
}