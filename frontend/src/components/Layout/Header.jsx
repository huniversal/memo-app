import React from 'react'
import { Link } from 'react-router-dom';
import '../Style/header.css';

const Header = () => {
  return (
    <header className="header">
      <div className='menu-circle'></div>
      <div className="header-nav">
        <Link to="/"       className='nav-item'>Memo</Link>
        <Link to="/todo"   className='nav-item'>Todo</Link>
        <Link to="/mypage" className='nav-item'>MyPage</Link>
      </div>
    </header>
  )
}

export default Header;
