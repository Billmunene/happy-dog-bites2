import React from 'react';
import { motion } from 'framer-motion';
import './Ingredients.css';
import productDog from "../assets/Rectangle7.png";

const Ingredients = () => {
    return (
        <section className="ingredients-section">
            <div className="container ingredients-container">
                <div className="ingredients-content">
                    <motion.h2
                        className="ingredients-title"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Prebiotics nourish the beneficial gut bacteria, supporting digestive health
                    </motion.h2>
                    <motion.p
                        className="ingredients-description"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        Our dog food formula contains carefully selected prebiotics that work in harmony with the gut microbiota, providing the necessary nutrients for the growth and maintenance of beneficial bacteria, ultimately supporting digestive health.
                    </motion.p>
                </div>
                <img src={productDog} alt="Happy dog with product" />
            </div>
        </section>
    );
};

export default Ingredients;
