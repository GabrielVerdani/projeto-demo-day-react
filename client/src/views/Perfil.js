import { useState } from 'react';
import Sidebar from './Sidebar.js'
import MinhaLoja from './MinhaLoja.js'

export default function Perfil () {

    const [SidebarOpen, setSidebarOpen] = useState(false);
    const openSidebar = () => {
        setSidebarOpen(true);
    };

    const closeSidebar = () => {
      setSidebarOpen(false);  
    }
    return (
        <div className="account">
            <Sidebar sidebarOpen={SidebarOpen} closeSidebar={closeSidebar}/>
            <MinhaLoja sidebarOpen={SidebarOpen} openSidebar={openSidebar}/>
        </div>
    )
}
