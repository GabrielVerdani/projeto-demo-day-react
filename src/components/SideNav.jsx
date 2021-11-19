import { FaBars, FaChevronLeft } from 'react-icons/fa'
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import SideNavData from '../data/SideNavData'

export default function SideNav() {
  const [sideBar, setSideBar] = useState(false);

  const switchSideBar = () => setSideBar(!sideBar);

  return (
    <div>
      <a href="#" onClick={switchSideBar} className="sideBarBtn mobile-only">
        <FaBars />
      </a>

      <div className={sideBar ? 'navigation show' : 'navigation hidden'}>
        <a className="closeButton mobile-only" href="#" onClick={switchSideBar}>
          <FaChevronLeft />
          <span>Fechar menu</span>
        </a>
        <ul>
          {SideNavData.map((item, index) => {
            return (
              <li key={index}>
                <NavLink activeclassname="active" to={item.path} className={item.cName} onClick={switchSideBar}>
                  <span className="nav-icon">{item.icon}</span>
                  <span className="nav-title">{item.title}</span>
                </NavLink>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}