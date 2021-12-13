import { FaSearch, FaStore, FaBars, FaUser, FaBookmark, FaInfoCircle, FaDoorOpen } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MinhaLoja = ({ SidebarOpen, openSidebar }) => {
    return (
        <main>
          <div className='minha-loja'>
            <div className='info-account'>
                <div className='info-title'>
                    <h1>Loja</h1>
                </div>
                <div className='info-options'>

                  <Link to="/" class="options-link">
                  <a>Perfil da Loja</a>
                  </Link>
                  <Link to="/" class="options-link">
                  <a>Meus produtos</a>
                  </Link><Link to="#" class="options-link">
                  <a>Novo produto</a>
                  </Link>
                </div>
            </div>
            <div className='content'>
                    
            </div>
          </div>
        </main>
         
    )
} 
export default MinhaLoja
