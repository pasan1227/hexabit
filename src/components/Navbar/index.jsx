// import React, { useState } from "react";
// import { Link } from "react-scroll";
// import "./navbar.css";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);



//   return (
//     <nav className="navbar fixed-top">
//       <div className="navbar-container">
//         <div className="navbar-menu" onClick={() => setIsOpen(!isOpen)}>
//           <i className={`fa fa-bars ${isOpen ? "open" : ""}`} />
//         </div>
//         <ul className={`navbar-items ${isOpen ? "open" : ""}`}>
//           <li>
//             <Link
//               className="navbar-logo"
//               to='home'
//               spy={true}
//               smooth={true}
//               offset={-70}
//               duration={500}
//             >
//               hexabit
//             </Link>
//           </li>
//           {navLinks.map(link => (
//             <li className="navbar-item" key={link.link}>
//               <Link
//                 activeClass="active"
//                 to={link.link}
//                 spy={true}
//                 smooth={true}
//                 offset={-60}
//                 duration={500}
//                 onClick={() => setIsOpen(false)}
//               >
//                 {link.label}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState } from "react";
import { Link } from "react-scroll";
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
        hexabit
      </Link>
      <div className={`nav-items ${isOpen && "open"}`}>
        {navLinks.map((item) => (
          <Link
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