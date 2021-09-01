import React, {useEffect, useState} from 'react';
import LeftMenu from './Sections/LeftMenu';
import RightMenu from './Sections/RightMenu';
import './Sections/Navbar.css';
import { withRouter } from 'react-router-dom';

function NavBar() {

  const [background, setBackground] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if(window.scrollY > 100){
        setBackground(true)
      }else setBackground(false);
    })
    return () => {
      window.removeEventListener("scroll");
    }
  }, [])

  return (
    <nav className={background? 'menu menu-black' : 'menu'}>
      <div className="menu-logo">
        <a href="/"><img src="img/NETFLIX.png" alt="Logo"/></a>
      </div>
      <div className="menu-container">
        <div className="menu-left">
          <LeftMenu mode="horizontal" />
        </div>
        {/* <div className="menu-right">
          <RightMenu mode="horizontal" />
        </div> */}
      </div>
    </nav>
  )
}

export default withRouter(NavBar)