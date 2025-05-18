import styles from "./Hero.module.css";

function Hero() {
    return (
        <div className={styles.container}>
            <section className={styles.hero}>
                <div className={styles.hero__left}>
                    <h2 className={styles.hero__title}>Spider-man 3</h2>
                    <h3 className={styles.hero__genre}>
                        Genre: Thriller, Drama, Romance
                    </h3>
                    <p className={styles.hero__description}>
                        Sebuah cairan hitam aneh dari dunia lain melekat ke tubuh Peter Parker dan menyebabkan kekacauan batinnya.
                         Pada saat bersamaan, muncul sosok penjahat baru yang mengancam warga New York
                    </p>
                    <button className={styles.hero__button}>Watch</button>
                </div>
                <div className={styles.hero__right}>
                    <img
                        className={styles.hero__image}
                        src="https://material.asset.catchplay.com/SNY-ID-002-A1040/artworks/posters/SNY-ID-002-A1040-P1200.jpg?hash=1747398119"
                        alt="placeholder"
                    />
                </div>
            </section>
        </div>
    );
}

export default Hero;