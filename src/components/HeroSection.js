import React from 'react';
import { motion } from 'framer-motion';
import '../styles/HeroSection.css';

const HeroSection = () => {
    return (
      <div className="hero" id="home">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1>Путешествуйте с комфортом по волнам мечты!</h1>
          <p>Круизы 2025 года: уникальные маршруты, изысканная кухня и незабываемые впечатления.</p>
          <button>Посмотреть маршруты</button>
        </motion.div>
      </div>
    );
  };
  
  export default HeroSection;