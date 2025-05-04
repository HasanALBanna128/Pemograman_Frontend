import React, { useState, useEffect } from 'react';
import styles from './Data.module.css';

const Data = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/voyager1.json') 
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  if (!data) {
    return <p>Loading...</p>;
  }

  const limitedData = data.slice(0, 3);

  return (
    <div className={styles.dataContainer}>
      <h1 className={styles.dataTitle}>Voyager 1</h1>
      <p className={styles.dataSubtitle}>Exploring the Unknown: Voyager 1's Journey Beyond</p>
      
      <div className={styles.cardContainer}>
        {limitedData.map((item) => (
          <div key={item.id} className={styles.card}>
            <h3 className={styles.cardTitle}>{item.name}</h3>
            <p className={styles.cardContent}>{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Data;
