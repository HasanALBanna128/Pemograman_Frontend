import { useState, useEffect } from "react";
import styles from "./Hero.module.css";
import voyagerImage from "../../assets/voyager-1.jpeg";

function Hero() {
  const fullText = "Voyager 1 is the farthest human-made object from Earth, carrying the hopes and dreams of humanity into the unknown.";
  const words = fullText.split(" ");
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [currentWord, setCurrentWord] = useState(0); 

  useEffect(() => {
    if (currentWord < words.length) {
      setDisplayedText(words.slice(0, currentWord + 1).join(" ")); 
      const wordInterval = setInterval(() => {
        setCurrentWord((prev) => {
          if (prev + 1 < words.length) {
            return prev + 1;
          } else {
            clearInterval(wordInterval);
            return prev;
          }
        });
      }, 400);

      const cursorInterval = setInterval(() => {
        setShowCursor((prev) => !prev);
      }, 500);

      return () => {
        clearInterval(wordInterval);
        clearInterval(cursorInterval);
      };
    }
  }, [currentWord]); 

  return (
    <section className={styles.hero}>
      <div className={styles.textContainer}>
        <h1>Voyager 1: The Journey Beyond</h1>
        <p>
          {displayedText}
          <span className={styles.cursor} style={{ opacity: showCursor ? 1 : 0 }}>|</span>
        </p>
        <button className={styles.exploreButton}>Explore More</button>
      </div>
      <div className={styles.imageContainer}>
        <img src={voyagerImage} alt="Voyager 1" />
      </div>
    </section>
  );
}

export default Hero;
