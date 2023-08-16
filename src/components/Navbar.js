import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from './Navbar.module.css';

const NavBar = () => {
    const [selectedNavItem, setSelectedNavItem] = useState(null);

    const handleNavItemClick = (navItem) => {
        if (selectedNavItem === navItem) {
            setSelectedNavItem(null); // Deselect the item if it's clicked again
        } else {
            setSelectedNavItem(navItem);
        }
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
                <span>Geatech</span>
            </NavLink>

            <ul className={styles.links_list}>
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
            </ul>
        </nav>
    );
};

export default NavBar;
