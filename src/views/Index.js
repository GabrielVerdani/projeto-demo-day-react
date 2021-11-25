import ProductList from "../components/ProductList";

import banner from '../assets/banner.png'
import bannerMobile from '../assets/bannerMobile.png'

import { produto } from "../data/produto";

import { Carousel } from "react-bootstrap";

export default function Index() {
  return (
    <div className="index-page">

      <div className="intro-container">
        <Carousel indicators={false} className="intro-banner">
          <Carousel.Item>
            <img src={banner} alt="Banner com ofertas" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={banner} alt="Banner com ofertas" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={banner} alt="Banner com ofertas" />
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="products-container">
        <div className="wrapper">
          <h2>Produtos que estão decolando</h2>
          <ProductList products={produto} />
        </div>

        <div className="wrapper">
          <h2>Novidades</h2>
          <ProductList products={produto} />
        </div>

        <div className="wrapper">
          <h2>Produtos que estão decolando</h2>
          <ProductList products={produto} />
        </div>

        <div className="wrapper">
          <h2>Produtos que estão decolando</h2>
          <ProductList products={produto} />
        </div>
      </div>

    </div >
  )
}