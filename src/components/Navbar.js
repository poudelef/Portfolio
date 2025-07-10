import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaRobot } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'About', to: 'about' },
        { name: 'Projects', to: 'projects' },
        { name: 'Interests', to: 'interests' },
        { name: 'Resume', to: 'resume' },
        { name: 'Connect', to: 'connect' }
    ];

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <motion.nav
            className={`navbar ${scrolled ? 'scrolled' : ''}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="nav-container">
                <motion.div
                    className="nav-logo"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Link to="home" smooth={true} duration={500}>
                        <FaRobot />
                    </Link>
                </motion.div>

                <div className="nav-menu">
                    {navItems.map((item, index) => (
                        <motion.div
                            key={item.name}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Link
                                to={item.to}
                                smooth={true}
                                duration={500}
                                spy={true}
                                activeClass="active"
                                className="nav-link"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <div className="nav-toggle" onClick={toggleMenu}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>
            </div>

            {/* Mobile Menu */}
            <motion.div
                className={`mobile-menu ${isOpen ? 'open' : ''}`}
                initial={{ opacity: 0, x: '100%' }}
                animate={{
                    opacity: isOpen ? 1 : 0,
                    x: isOpen ? 0 : '100%'
                }}
                transition={{ duration: 0.3 }}
            >
                {navItems.map((item, index) => (
                    <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : 50 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <Link
                            to={item.to}
                            smooth={true}
                            duration={500}
                            spy={true}
                            activeClass="active"
                            className="mobile-nav-link"
                            onClick={() => setIsOpen(false)}
                        >
                            {item.name}
                        </Link>
                    </motion.div>
                ))}
            </motion.div>
        </motion.nav>
    );
};

export default Navbar; 