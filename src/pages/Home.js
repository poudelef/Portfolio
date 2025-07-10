import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Home.css';

const Home = () => {
    const socialLinks = [
        { icon: FaGithub, url: 'https://github.com/poudelef', label: 'GitHub' },
        { icon: FaLinkedin, url: 'https://www.linkedin.com/in/sambhav-poudel-70688b291/', label: 'LinkedIn' },
    ];

    return (
        <section id="home" className="home-section">
            <div className="home-content">
                <motion.div
                    className="home-text-content"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.h1
                        className="name"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        Sambhav Poudel
                    </motion.h1>

                    <motion.h2
                        className="title"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                    >
                        AI/ML Engineer
                    </motion.h2>

                    <motion.p
                        className="description"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                    >
                        I'm a passionate developer who loves to code and build things.
                        I'm interested in Machine Learning, Computer Vision, and Multi-Agent Systems.
                    </motion.p>

                    <motion.div
                        className="cta-buttons"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.8 }}
                    >
                        <Link to="projects" smooth={true} duration={500}>
                            <motion.button
                                className="btn-primary"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                View My Work
                            </motion.button>
                        </Link>

                        <Link to="connect" smooth={true} duration={500}>
                            <motion.button
                                className="btn-secondary"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Get In Touch
                            </motion.button>
                        </Link>
                    </motion.div>

                    <motion.div
                        className="social-links"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2, duration: 0.8 }}
                    >
                        {socialLinks.map((social, index) => (
                            <motion.a
                                key={social.label}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link"
                                whileHover={{ scale: 1.2, y: -5 }}
                                whileTap={{ scale: 0.9 }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.4 + index * 0.1, duration: 0.5 }}
                            >
                                <social.icon />
                            </motion.a>
                        ))}
                    </motion.div>
                </motion.div>

                <motion.div
                    className="animation-container"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="bg-circle"></div>
                    <div className="bg-circle-circle"></div>
                    <div className="radar-circle"></div>
                </motion.div>
            </div>
        </section>
    );
};

export default Home; 