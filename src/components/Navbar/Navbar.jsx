import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Portfolio
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen ? styles.menuOpen : ""}`}
          onClick={() => setMenuOpen(false)}
        >
          <li className={location.pathname === "/" ? styles.active : ""}>
            <Link to="/">Home</Link>
          </li>
          <li className={location.pathname === "/about" ? styles.active : ""}>
            <Link to="/about">About</Link>
          </li>
          <li className={location.pathname === "/experience" ? styles.active : ""}>
            <Link to="/experience">Experience</Link>
          </li>
          <li className={location.pathname === "/projects" ? styles.active : ""}>
            <Link to="/projects">Projects</Link>
          </li>
          <li className={location.pathname === "/contact" ? styles.active : ""}>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
