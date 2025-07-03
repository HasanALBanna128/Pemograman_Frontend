import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>PokéDex App</div>
      <ul className={styles.navLinks}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/type">By Type</Link></li>
        <li><Link to="/generation">By Generation</Link></li>
        <li><Link to="/ability">By Ability</Link></li>
        <li><Link to="/favorite">Favorite</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
