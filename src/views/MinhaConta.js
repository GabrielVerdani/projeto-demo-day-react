import { useState } from 'react';


export default function MinhaConta () {

    const [SidebarOpen, setSidebarOpen] = useState(false);
    const openSidebar = () => {
        setSidebarOpen(true);
    };

    const closeSidebar = () => {
      setSidebarOpen(false);  
    }
    return (
        <div className="account">
            <h1> aaa</h1>
        </div>
    )

}
