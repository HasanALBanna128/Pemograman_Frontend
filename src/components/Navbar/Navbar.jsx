import React from 'react';
import { Link } from "react-router-dom"; 
import styles from './Navbar.module.css';

function Navbar() {
    return (
        <div className={styles.container}>
            <nav className={styles.navbar}>
                <div>
                    <h1 className={styles.navbar__brand}>Movie App</h1>
                </div>
                <div>
                    <ul className={styles.navbar__list}>
                        <li className={styles.navbar__item}>
                            <Link to="/" className={styles.navbar__link}>Home</Link>
                        </li>
                        <li className={styles.navbar__item}>
                            <Link to="/movie/create" className={styles.navbar__link}>Add Movie</Link>
                        </li>
                        <li className={styles.navbar__item}>
                            <Link to="/movie/popular" className={styles.navbar__link}>Popular</Link>
                        </li>
                        <li className={styles.navbar__item}>
                            <Link to="/movie/nowplaying" className={styles.navbar__link}>Now Playing</Link>
                        </li>
                        <li className={styles.navbar__item}>
                            <Link to="/movie/toprated" className={styles.navbar__link}>Top Rated</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
