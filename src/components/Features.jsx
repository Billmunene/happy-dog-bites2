import React from 'react';
import { motion } from 'framer-motion';
import './Features.css';
import productDog from "../assets/Rectangle15.png";

const StatItem = ({ number, text, delay }) => {
  return (
    <motion.div
      className="stat-item"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
    >
      <div className="stat-number">{number}%</div>
      <p className="stat-text">{text}</p>
    </motion.div>
  );
};

const Features = () => {
  return (
    <section className="features-section">
      <div className="container features-container">
        <div className="features-content">
          <motion.h2
            className="features-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Nutrition is the foundation for longer, healthier lives in dogs.
          </motion.h2>
          <motion.p
            className="features-description"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Invest in your dog's future with our scientifically formulated superfood-powered supplements. Give them the nutrition they deserve and watch them thrive with vitality, energy, and the joy of a longer, healthier life.
          </motion.p>

          <div className="stats-grid">
            <StatItem
              number="97"
              text="Dogs choose our dog food over leading brands because of its real functional ingredients and delicious flavor."
              delay={0.3}
            />
            <StatItem
              number="84"
              text="Our dog food provides superior nutrition and a patented probiotic for optimal nutrient absorption."
              delay={0.4}
            />
            <StatItem
              number="92"
              text="Our dog food's high protein and fat digestibility contribute to ideal stool quality."
              delay={0.5}
            />
          </div>

          <motion.button
            className="features-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Give your furry friend the gift of wholesome nutrition
          </motion.button>
        </div>

        <div className="features-image-container">
          <img src={productDog} alt="Happy dog with product" />
        </div>
      </div>
    </section>
  );
};

export default Features;
