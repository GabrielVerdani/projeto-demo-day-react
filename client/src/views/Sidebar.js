import defaultProfile from '../assets/lucas.png';
import { FaSearch, FaStore, FaBars, FaUser, FaBookmark, FaInfoCircle, FaDoorOpen } from 'react-icons/fa';

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
    return (
        <div className={sidebarOpen ? "sidebar-responsive" : ""} className="sidebar"> 
            <div className="sidebar-title"> 
                <div className="sidebar-img"> 
                 <img src={defaultProfile} alt="Foto de perfil"/>
                 <h4>Lucas Eduardo</h4>
                </div>
                <i 
                onClick={() => closeSidebar()}
                className="fa fa-times"
                id="sidebarIcon"
                aria-hidden="true"
                ></i>
            </div>
                <div className="sidebar-menu">
                    <div className="active-menu-link">
                       <FaUser className="user-icon" color='white'/>
                        <a href="#">Minha conta</a>
                    </div>
                    <div className="sidebar-link">
                        <FaStore className="store-icon" color='white' />
                        <a href="#">Loja</a>
                    </div>
                    <div className="sidebar-link">
                        <FaBookmark className="fav-icon" color='white'/>
                        <a href="#">Favoritos</a>
                    </div>
                    <div className="sidebar-link">
                        <FaInfoCircle className="info-icon" color='white'/>
                        <a href="#">Sobre</a>
                    </div>
                    <div className='line-dashboard'>
                     </div>
                     <div>
                    <div className='sidebar-link'>
                    <FaDoorOpen className="info-icon" color='white'/>
                    <a href="#">Sair</a>
                    </div>
                    </div>
                </div>
        </div>
    )

} 
export default Sidebar;