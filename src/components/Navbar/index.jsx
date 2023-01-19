import React, { useState } from "react";
import { Link } from "react-scroll";
import logo from '../../assets/logo.svg';
import { navLinks } from "../../constants";
import "./navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="Navbar">
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
      <Link
        className="nav-logo"
        to='home'
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        <img className='logo-img' src={logo} alt="" />
      </Link>
      <div className={`nav-items ${isOpen && "open"}`}>
        {navLinks.map((item, i) => (
          <Link
            key={i}
            activeClass="active"
            to={item.link}
            spy={true}
            smooth={true}
            offset={-60}
            duration={500}
            onClick={() => setIsOpen(false)}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;