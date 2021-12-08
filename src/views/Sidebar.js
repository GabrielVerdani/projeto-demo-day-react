import defaultProfile from '../assets/lucas.png';

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
    return (
        <div className={sidebarOpen ? "sidebar-responsive" : ""} id="sidebar"> 
            <div className="sidebar_tutle"> 
                <div className="sidebar_img"> 
                 <img src={defaultProfile} alt="Foto de perfil"/>
                 <h1>Lucas Eduardo</h1>
                </div>
                <i 
                onClick={() => closeSidebar()}
                classname="fa fa-times"
                id="sidebarIcon"
                aria-hidden="true"
                ></i>
            </div>
                <div className="sidebar_menu">
                    <div className="sidebar_link active_menu_link">
                        <i className="fas fa-user"></i>
                        <a href="#">Minha conta</a>
                    </div>
                    <h2>admin</h2>
                    <div className="sidebar_link">
                        <i className="fas fa-store"></i>
                        <a href="#">Loja</a>
                    </div>
                    <div className="sidebar_link">
                        <i className="fas fa-store"></i>
                        <a href="#">Loja</a>
                    </div>
                </div>
        </div>
    )

} 