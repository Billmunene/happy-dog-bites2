import React from 'react';
import { motion } from 'framer-motion';
import './HealthBenefits.css';

const HealthBenefits = () => {
    return (
        <section className="health-benefits-section">
            <div className="container health-benefits-container">
                <div className="health-benefits-image-container">
                    <motion.div
                        className="health-benefits-image"
                        style={{ backgroundImage: "url('/assets/two-dogs.png')" }}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    />
                </div>
                <div className="health-benefits-content">
                    <motion.h2
                        className="health-benefits-title"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Improve overall gastrointestinal health for better nutrient absorption
                    </motion.h2>
                    <motion.p
                        className="health-benefits-description"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        Through rigorous scientific studies and consultations with veterinarians, we have created a breakthrough formula exclusively tailored to combat the health challenges prevalent in dogs. A staggering 91% of our customers have reported significant improvements in their dogs' health after incorporating our product into their diet.
                    </motion.p>
                </div>
            </div>
        </section>
    );
};

export default HealthBenefits;
