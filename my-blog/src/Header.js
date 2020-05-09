import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="ui three item menu">
      <Link to="/" className="item">
        Home
      </Link>
      <Link to="/about" className="item">
        About
      </Link>
      <Link to="/articles-list" className="item">
        Articles List
      </Link>
    </div>
  );
}

export default Header;