import { FaBars, FaChevronLeft } from 'react-icons/fa'
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import SideNavData from './SideNavData'

import './sidenav.scss'

export default function SideNav() {
  const [sideBar, setSideBar] = useState(false);

  const showSideBar = () => setSideBar(!sideBar);
  return (
    <div>
      <Link to="#" onClick={showSideBar}><FaBars /></Link>

      <div className={sideBar ? 'navigation show' : 'navigation hidden'}>
        <Link className="closeButton" to="#" onClick={showSideBar}>
          <FaChevronLeft />
          <span>Fechar menu</span>
        </Link>
        <ul>
          {SideNavData.map((item, index) => {
            return (
              <li key={index}>
                <NavLink activeClassName="active" to={item.path} onClick={showSideBar} className={item.cName}>
                  {item.icon}
                  <span>{item.title}</span>
                </NavLink>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}