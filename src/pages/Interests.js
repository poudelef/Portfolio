import React from 'react';
import { motion } from 'framer-motion';
import {
    FaReact, FaNodeJs, FaPython, FaDatabase, FaAws, FaDocker,
    FaGithub, FaFigma, FaCode, FaBook, FaGamepad, FaCamera,
    FaMusic, FaHiking, FaCoffee, FaLaptop
} from 'react-icons/fa';
import { SiTensorflow } from 'react-icons/si';
import './Interests.css';

const Interests = () => {
    const techStack = [
        { name: 'Python', icon: FaPython, color: '#3776AB' },
        { name: 'TensorFlow & Keras', icon: SiTensorflow, color: '#47A248' },
        { name: 'C/C++', icon: FaCode, color: '#00599C' },
        { name: 'React', icon: FaReact, color: '#61DAFB' },
        { name: 'JavaScript & TypeScript', icon: FaCode, color: '#FF9900' },
        { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
        { name: 'Docker', icon: FaDocker, color: '#2496ED' },
        { name: 'GitHub', icon: FaGithub, color: '#181717' },

    ];

    const personalInterests = [
        {
            icon: FaCode,
            title: 'Open Source',
            description: 'Contributing to open-source projects and building tools for the developer community.'
        },
        {
            icon: FaBook,
            title: 'Learning',
            description: 'Always exploring new technologies and staying updated with the latest trends in tech.'
        },
        {
            icon: FaGamepad,
            title: 'Gaming',
            description: 'Enjoying strategy games and exploring virtual worlds in my free time.'
        },
        {
            icon: FaHiking,
            title: 'Outdoors',
            description: 'Traveling, Hiking, camping, and exploring nature whenever possible.'
        }
    ];

    const currentLearning = [
        'Machine Learning & AI',
        'Computer Vision',
        'Multi-Agent Systems',
    ];

    return (
        <section id="interests" className="interests-section section">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2>Interests & Tech Stack</h2>

                </motion.div>

                <div className="interests-content">
                    <motion.div
                        className="tech-stack-section"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h3>Tech Stack</h3>
                        <div className="tech-grid">
                            {techStack.map((tech, index) => (
                                <motion.div
                                    key={tech.name}
                                    className="tech-item glass-card"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                                    viewport={{ once: true }}
                                    whileHover={{ y: -10, scale: 1.05 }}
                                >
                                    <div className="tech-icon" style={{ color: tech.color }}>
                                        <tech.icon />
                                    </div>
                                    <span className="tech-name">{tech.name}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        className="personal-interests-section"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <h3>Personal Interests</h3>
                        <div className="interests-grid">
                            {personalInterests.map((interest, index) => (
                                <motion.div
                                    key={interest.title}
                                    className="interest-card glass-card"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                                    viewport={{ once: true }}
                                    whileHover={{ y: -10 }}
                                >
                                    <div className="interest-icon">
                                        <interest.icon />
                                    </div>
                                    <h4>{interest.title}</h4>
                                    <p>{interest.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    className="learning-section"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h3>Currently Learning</h3>
                    <div className="learning-grid">
                        {currentLearning.map((topic, index) => (
                            <motion.div
                                key={topic}
                                className="learning-item"
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="learning-icon">
                                    <FaLaptop />
                                </div>
                                <span>{topic}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>


            </div>
        </section>
    );
};

export default Interests; 