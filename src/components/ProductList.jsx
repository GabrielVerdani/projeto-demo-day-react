import ProductItem from "./ProductItem"
import "react-multi-carousel/lib/styles.css";

export default function ProductList(props) {

  return (
    <div>
      <div className="product-list">
        {props.products.map(product => {
          return (
            <div key={product.id}>
              <ProductItem
                id={product.id}
                image={product.image_url}
                title={product.title}
                description={product.description}
                price={product.price} />
            </div>
          )
        })}
      </div>
    </div>
  )
}