import React, { useState, useEffect } from 'react';
import styles from './Table.module.css';

const Table = () => {
  const [voyagerData, setVoyagerData] = useState([]);

  useEffect(() => {
    fetch('/voyager1.json')
      .then((response) => response.json())
      .then((data) => {
        console.log(data); 
        setVoyagerData(data);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className={styles.tableContainer}>
      <h1 className={styles.tableTitle}>About Voyager 1</h1>
      <h2 className={styles.tableSubtitle}>Key Information about Voyager 1 Mission</h2>

      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>No</th>
              <th>Data Point</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {voyagerData.length > 0 ? (
              voyagerData.map((data) => (
                <tr key={data.id}>
                  <td>{data.id}</td>
                  <td>{data.name}</td>
                  <td>{data.value}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3">Loading data...</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
