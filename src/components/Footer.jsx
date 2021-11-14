import imageLogo from "../assets/image-logo.png"

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="wrapper">
        <div className="categories">
          <h2>Categorias</h2>
          <ul>
            <li></li>
          </ul>
        </div>
        <div className="help">
          <h2>Ajuda</h2>
          <ul>
            <li></li>
          </ul>
        </div>
        <div className="about">
          <ul>
            <li></li>
          </ul>
        </div>
        <div className="contact">
          <img src={imageLogo} alt="Logo do VOA" />
          <h2>(11)9 4002-8922</h2>
        </div>
      </div>
    </div>
  )
}