import { FaSearch, FaStore } from 'react-icons/fa';
import { Link } from 'react-router-dom';

//Import das Imagens
import imageLogo from '../assets/image-logo-blue.png';
import textLogo from '../assets/text-logo-blue.png';
import defaultProfile from '../assets/lucas.png';

export default function Header() {
  const nome = "Lucas";

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
          <input type="text" name="busca" id="searchBar" placeholder="Buscar..." required />
          <button type="submit"><FaSearch /></button>
        </form>

        <div className="right-side">
          <Link to="/cadastroloja"><FaStore className="store-icon"/></Link>
          <Link to="/cadastro" class="profile">
            <img className="profile-picture" src={defaultProfile} alt="Foto de Perfil" />Olá, {nome}
          </Link>
        </div>
      </div>
    </div>
  )
}