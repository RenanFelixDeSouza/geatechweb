import styles from './Footer.module.css';
const Footer = () => {
    return (<footer className={styles.footer}>
        <h3>Aqui é o fim da página.</h3>
        <p>Criador: Renan Felix de Souza   <break/>
            <a href='https://www.linkedin.com/in/renan-felix-de-souza/' target="_blank" rel="noopener noreferrer">
              Linkedin
            </a> |   <break/>
            <a href='https://github.com/RenanFelixDeSouza/' target="_blank" rel="noopener noreferrer">
                  <break/> GitHub
            </a>
        </p>
        <p>DevKids &copy; 2022</p>
    </footer>
    );
};

export default Footer;