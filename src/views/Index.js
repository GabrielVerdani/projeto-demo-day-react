import ProductList from "../components/ProductList";
import banner from '../assets/banner.png'
import bannerMobile from '../assets/bannerMobile.png'
import { produto } from "../data/produto";

export default function Index() {
  return (
    <div className="index-page">

      <div className="intro-container">
        <div className="bannerDesktop">
          <img src={banner} alt="Banner com ofertas" />
        </div>
        <div className="bannerMobile">
          <img src={bannerMobile} alt="Banner com ofertas" />
        </div>
      </div>

      <div className="products-container">
        <div className="wrapper">
          <h2>Produtos que estão decolando</h2>
          <ProductList products={produto} />
        </div>

        <div className="wrapper product-list-bottom">
          <h2>Novidades</h2>
          <ProductList products={produto} />
        </div>
      </div>

    </div >
  )
}