import fazendeiro from '../../img/fazendeiro.png'
import React from 'react';
import styles from './Home.module.css';

const Home = () => {
    return (
        <div className={styles.home}>
            <div className={styles.box}>
                <div className={styles.boxText}>
                    <p>NF-e, CT-e, MDF-e.</p>
                    <h1>Produtor Rural, emita nota fiscal eletrônica com o sistema da Geatech</h1>
                    <button className={styles.active}>FALE CONOSCO</button>
                </div>
                <img src={fazendeiro} alt="Imagem lateral" className={styles.fazendeiro} />
            </div>
        </div>
    );
};

export default Home;
