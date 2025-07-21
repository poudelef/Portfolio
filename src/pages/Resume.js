import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';
import './Resume.css';

const Resume = () => {

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = 'https://poudelef.github.io/Portfolio/Sambhav.Poudel_2025.pdf'; 
        link.download = 'Sambhav.Poudel_2025.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };


    return (
        <section id="resume" className="resume-section section">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2>Resume</h2>
                    <p className="section-subtitle">My professional journey and skills</p>
                </motion.div>

                <motion.div
                    className="resume-actions"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <div className="action-buttons">
                        <motion.button
                            className="btn-primary"
                            onClick={handleDownload}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FaDownload />
                            Download PDF
                        </motion.button>
                     
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Resume; 