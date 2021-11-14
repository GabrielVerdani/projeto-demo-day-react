import ProductList from "../../components/ProductList";
import productsList from "../../data/productsList";

export default function Index() {

  return (
    <div className="index-page">

      <div className="intro-container">
        <div className="wrapper">
          <div className="intro-text">
            <h1>Seja bem vindo ao VOA!</h1>
            <p>A <span>Vitrine Online para Anunciantes</span></p>
            <p>Aqui no <span>VOA</span> você pode <br />encontrar produtos pertinho de você!</p>
          </div>

          <form action="">
            <input type="text" name="buscarCEP" id="searchCep" placeholder="Digite seu CEP" />
            <button type="submit">Procurar</button>
          </form>
        </div>
      </div>

      <div className="products-container">
        <div className="wrapper">
          <h2>Produtos que estão decolando</h2>
          <ProductList products={productsList} />
        </div>

        <div className="wrapper product-list-bottom">
          <h2>Novidades</h2>
          <ProductList products={productsList} />
        </div>
      </div>
    </div >
  )
}