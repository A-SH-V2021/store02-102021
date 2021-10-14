import React from "react";
import { Link } from "react-router-dom";
import reactimg from "../images/react-logo.png";
const Header = () => {
  return (
    <header className="header">
      <Link to="/" className=''>
        <img src={reactimg} alt="react project img" className="logo" />
      </Link>
      <nav>
        <ul>
          <div className="">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/products">products</Link>
            </li>
          </div>
          <div className="">
            <li>
              <Link to="/Login">login</Link>
            </li>
            <li>
              <Link to="/Cart">cart</Link>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
