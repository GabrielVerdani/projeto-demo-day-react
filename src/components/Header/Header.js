import { FaSearch, FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './header.scss'

//Import das Imagens
import imageLogo from '../../assets/image-logo.png'
import textLogo from '../../assets/text-logo.png'
import defaultProfile from '../../assets/default-profile.png'
import SideNav from '../SideNav/SideNav'

export default function Header() {
  return (
    <div className="header">
      <div>
        <SideNav />
        <Link to="/">
          <img src={imageLogo} alt="Logo VOA" />
          <img src={textLogo} alt="Logo VOA" className="desktop-only" />
        </Link>
      </div>

      <form action="">
        <input type="text" name="busca" id="searchBar" placeholder="Buscar..." />
        <button type="submit"><FaSearch /></button>
      </form>

      <div>
        <a href="#"><FaShoppingCart /></a>
        <a href="#"><img className="profile-picture" src={defaultProfile} alt="Foto de Perfil" /></a>
      </div>
    </div>
  )
}