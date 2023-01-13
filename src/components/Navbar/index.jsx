import React, { useState } from "react";
import { Link } from "react-scroll";
import "./navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "GROW", link: "grow" },
    { label: "EARN", link: "earn" },
    { label: "NEWSLETTER", link: "newsletter" },
    { label: "PODCAST", link: "podcast" },
  ];

  return (
    <nav className="navbar fixed-top">
      <div className="navbar-container">
        <div className="navbar-menu" onClick={() => setIsOpen(!isOpen)}>
          <i className={`fa fa-bars ${isOpen ? "open" : ""}`} />
        </div>
        <ul className={`navbar-items ${isOpen ? "open" : ""}`}>
          <li>
            <Link
              className="navbar-logo"
              to='home'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              hexabit
            </Link>
          </li>
          {navLinks.map(link => (
            <li className="navbar-item" key={link.link}>
              <Link
                activeClass="active"
                to={link.link}
                spy={true}
                smooth={true}
                offset={-60}
                duration={500}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
