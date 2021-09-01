import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


function LeftMenu() {
  const [Active, setActive] = useState(false)

  return (
    <div className= "left-container">
      <ul className = "left">
        <li><Link to ="/" className={Active? 'active' : null} onClick={(e) => setActive(true)}>홈</Link></li>
        {/* <li><Link to ="/wishlist" className={Active? 'active' : null} onClick={() => setActive(true)}>내가 찜한 콘텐츠</Link></li> */}
      </ul>
    </div>
  )
}

export default LeftMenu