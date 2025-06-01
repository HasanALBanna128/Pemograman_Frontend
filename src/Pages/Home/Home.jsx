import React from 'react';
import styles from './Home.module.css'; 

function Home() {
    return (
        <section className={styles.homeSection}>
            <h1 className={styles.title}>Welcome to Movie App</h1>
            <p className={styles.description}>
                Discover the <span className={styles.highlight}>latest movies</span>, 
                top-rated films, and <span className={styles.highlight}>trending titles</span> right here.
            </p>
            <button className={styles.ctaButton}>Browse Now</button>
            
        </section>
        
    );
    
}

export default Home;
