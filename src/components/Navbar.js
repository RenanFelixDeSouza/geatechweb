import React, { useState } from "react";
import logoMarca from '../img/logomarca-site.png';
import { NavLink } from "react-router-dom";
import { RiInstagramLine, RiFacebookBoxFill } from "react-icons/ri";
import styles from './Navbar.module.css';

const NavBar = () => {
    const [selectedNavItem, setSelectedNavItem] = useState(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleNavItemClick = (navItem) => {
        if (selectedNavItem === navItem) {
            setSelectedNavItem(null);
        } else {
            setSelectedNavItem(navItem);
        }
    };

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };



    const renderText = (navItem) => {
        if (selectedNavItem === navItem) {
            return (
                <div className={styles.Text}>
                    °°°
                </div>
            );
        }
        return null;
    };

    return (
        <nav className={styles.NavBar}>
            <NavLink to="/home" className={styles.brand}>
                <img src={logoMarca} alt="geatech" className={styles.logoMarca} />
            </NavLink>

            <ul className={`${styles.links_list} ${isMenuOpen ? styles.showMenu : ""}`}>
                <li>
                    <NavLink
                        to="/home"
                        onClick={() => handleNavItemClick("Home")}
                        className={({ isActive }) => (isActive ? styles.active : styles.notActive)}
                    >
                        Soluções
                        {renderText("Home")}
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/aprendizado"
                        onClick={() => handleNavItemClick("Jogos e video aula")}
                        className={({ isActive }) => (isActive ? styles.active : styles.notActive)}
                    >
                        Sobre a Geatech
                        {renderText("Jogos e video aula")}
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/Dashboard"
                        onClick={() => handleNavItemClick("Dashboard")}
                        className={({ isActive }) => (isActive ? styles.active : styles.notActive)}
                    >
                        Portal do Cliente
                        {renderText("Dashboard")}
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/about"
                        onClick={() => handleNavItemClick("Sobre nós")}
                        className={({ isActive }) => (isActive ? styles.active : styles.notActive)}
                    >
                        Fale Conosco
                        {renderText("Sobre nós")}
                    </NavLink>
                </li>
                <NavLink
                    to="https://www.instagram.com/GeatechSolucoes/"
                    target="_blank" className={styles.social}>
                    <RiInstagramLine />
                </NavLink>
                <NavLink
                    to="https://www.instagram.com/GeatechSolucoes/"
                    target="_blank" className={styles.social}>
                    <RiFacebookBoxFill />
                </NavLink>
            </ul>
            <button className={styles.menuButton} onClick={handleMenuToggle}>
                <div className={`${styles.menuIcon1} ${isMenuOpen ? styles.menuIcon1Active : styles.menuIcon1Back}`} onClick={handleMenuToggle}></div>
                <div className={`${styles.menuIcon2} ${isMenuOpen ? styles.menuIcon2Active : styles.menuIcon2Back}`} onClick={handleMenuToggle}></div>
                <div className={`${styles.menuIcon3} ${isMenuOpen ? styles.menuIcon3Active : styles.menuIcon3Back}`} onClick={handleMenuToggle}></div>
            </button>
        </nav>
    );
};

export default NavBar;
