import React, { useState } from 'react';
import styles from './Form.module.css';
import voyagerImage from "../../assets/voyager.png"; 

const Form = () => {
  const [formData, setFormData] = useState({
    provinsi: '',
    status: '',
    jumlah: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert(`Data submitted: ${JSON.stringify(formData)}`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
        <a href="https://example.com" target="_blank" rel="noopener noreferrer">
          <img
            src={voyagerImage} 
            alt="Voyager 1 Image"
            className={styles.image}
          />
        </a>
      </div>

      <div className={styles.rightSection}>
        <h1 className={styles.title}>Voyager 1 - Data Form</h1>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="provinsi">Space Region</label>
            <input
              type="text"
              id="provinsi"
              name="provinsi"
              value={formData.provinsi}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="status">Mission Status</label>
            <input
              type="text"
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="jumlah">Distance Traveled (billion km)</label>
            <input
              type="number"
              id="jumlah"
              name="jumlah"
              value={formData.jumlah}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className={styles.submitButton}>
            Submit Data
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
