import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="nav-item">
          STOCKREAL
        </Link>
      </div>
      <ul className="navbar-nav">
        <Link to="/stocks" className="nav-item">
          Stocks
        </Link>
        <Link to="/watchlist" className="nav-item">
          Watchlist
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
