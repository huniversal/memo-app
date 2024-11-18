import React from 'react'
import { Link } from 'react-router-dom';
import './Style/header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="header-nav">
        <Link to="/"       className='nav-item'>Memo</Link>
        <Link to="/todo"   className='nav-item'>Todo</Link>
        <Link to="/mypage" className='nav-item'>MyPage</Link>
      </nav>
    </header>
  )
}

export default Header;
