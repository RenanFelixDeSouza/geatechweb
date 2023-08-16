//css
import styles from './About.module.css'

import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className={styles.div}>
      <h2 className={styles.devkids}>Geatech</h2>
      <Link to="/aprendizado" className='btn'><button className={styles.aprenda}> Fale conosco </button></Link>
    </div>
  );
};

export default About;