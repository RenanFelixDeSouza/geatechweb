import React, { useState } from "react";
import logoMarca from '../img/logomarca-site.png';
import { NavLink } from "react-router-dom";
import { RiInstagramLine, RiFacebookBoxFill } from "react-icons/ri";
import styles from './Navbar.module.css';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeItem, setActiveItem] = useState(null);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleNavItemClick = (item) => {
        // Se o mesmo item estiver ativo, não faça nada
        if (activeItem === item) {
            return;
        } else {
            // Caso contrário, ative o novo item
            setActiveItem(item);
        }
    };

    const isItemActive = (item) => {
        return activeItem === item;
    };

    return (
        <nav className={styles.NavBar}>
            <NavLink to="/" className={styles.brand}>
                <img src={logoMarca} alt="geatech" className={styles.logoMarca} />
            </NavLink>

            <ul className={`${styles.links_list} ${isMenuOpen ? styles.showMenu : ""}`}>
                <li>
                    <NavLink
                        to="/home"
                        onClick={() => handleNavItemClick('solucoes')}
                        className={`${isItemActive('solucoes') ? styles.active : styles.notActive}`}
                    >
                        <div className={styles.Text}>
                            Soluções <br />
                            <div className={`${isItemActive('solucoes') ? styles.activeIndication : styles.hiddenIndication}`}>
                                °°°
                            </div>
                        </div>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/aprendizado"
                        onClick={() => handleNavItemClick('sobre')}
                        className={`${isItemActive('sobre') ? styles.active : styles.notActive}`}
                    >
                        <div className={styles.Text}>
                            Sobre a Geatech <br />
                            <div className={`${isItemActive('sobre') ? styles.activeIndication : styles.hiddenIndication}`}>
                                °°°
                            </div>
                        </div>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/Dashboard"
                        onClick={() => handleNavItemClick('portal')}
                        className={`${isItemActive('portal') ? styles.active : styles.notActive}`}
                    >
                        <div className={styles.Text}>
                            Portal do Cliente <br />
                            <div className={`${isItemActive('portal') ? styles.activeIndication : styles.hiddenIndication}`}>
                                °°°
                            </div>
                        </div>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/about"
                        onClick={() => handleNavItemClick("contato")}
                        className={`${isItemActive('contato') ? styles.active : styles.notActive}`}
                    >
                        <div className={styles.Text}>
                            Fale Conosco <br />
                            <div className={`${isItemActive('contato') ? styles.activeIndication : styles.hiddenIndication}`}>
                                °°°
                            </div>
                        </div>
                    </NavLink>
                </li>

            </ul>
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
            <button className={styles.menuButton} onClick={handleMenuToggle}>
                <div className={`${styles.menuIcon1} ${isMenuOpen ? styles.menuIcon1Active : styles.menuIcon1Back}`} onClick={handleMenuToggle}></div>
                <div className={`${styles.menuIcon2} ${isMenuOpen ? styles.menuIcon2Active : styles.menuIcon2Back}`} onClick={handleMenuToggle}></div>
                <div className={`${styles.menuIcon3} ${isMenuOpen ? styles.menuIcon3Active : styles.menuIcon3Back}`} onClick={handleMenuToggle}></div>
            </button>
        </nav>
    );
};

export default NavBar;
