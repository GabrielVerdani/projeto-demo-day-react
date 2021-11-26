import { FaSearch, FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'

//Import das Imagens
import imageLogo from '../assets/image-logo-blue.png'
import textLogo from '../assets/text-logo-blue.png'
import defaultProfile from '../assets/default-profile.png'

export default function Header() {

  return (
    <div className="header">
      <div className="wrapper">
        <div className="left-side">
          <Link to="/" className="logo">
            <img src={imageLogo} alt="Logo VOA" className="image-logo" />
            <img src={textLogo} alt="Logo VOA" className="text-logo" />
          </Link>
        </div>

        <form action="/pesquisa">
          <input type="text" name="busca" id="searchBar" placeholder="Buscar..." />
          <button type="submit"><FaSearch /></button>
        </form>

        <div className="right-side">
          <Link to="/cadastro"><img className="profile-picture" src={defaultProfile} alt="Foto de Perfil" /></Link>
        </div>
      </div>
    </div>
  )
}