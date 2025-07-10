import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt,
    FaPaperPlane, FaCheck, FaTimes
} from 'react-icons/fa';
import './Connect.css';

const Connect = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const socialLinks = [
        { icon: FaGithub, url: 'https://github.com/poudelef', label: 'GitHub' },
        { icon: FaLinkedin, url: 'https://www.linkedin.com/in/sambhav-poudel-70688b291/', label: 'LinkedIn' },
    ];

    const contactInfo = [
        { icon: FaEnvelope, label: 'Email', value: 'poudelsb@mail.uc.edu' },
        { icon: FaPhone, label: 'Phone', value: '+1 (513) 276-2979' },
        { icon: FaMapMarkerAlt, label: 'Location', value: 'Cincinnati, OH' }
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "59380c55-ee5d-4df2-be58-b730170e37a3");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            setSubmitStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });
        } else {
            setSubmitStatus('error');
        }
    } catch (error) {
        setSubmitStatus('error');
    } finally {
        setIsSubmitting(false);
    }
}

    return (
        <section id="connect" className="connect-section section">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2>Get In Touch</h2>

                </motion.div>

                <div className="connect-content">
                    <motion.div
                        className="contact-info"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h3>Contact Information</h3>
                        <p>
                            -----------------------------------------------------------------------
                        </p>

                        <div className="contact-details">
                            {contactInfo.map((info, index) => (
                                <motion.div
                                    key={info.label}
                                    className="contact-item"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="contact-icon">
                                        <info.icon />
                                    </div>
                                    <div className="contact-text">
                                        <span className="contact-label">{info.label}</span>
                                        <span className="contact-value">{info.value}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="social-links">

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
                        </div>
                    </motion.div>

                    <motion.div
                        className="contact-form"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                    >

                        <form onSubmit={handleSubmit} className="form glass-card">
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="Your name"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="your.email@example.com"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="subject">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="What's this about?"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                    rows="5"
                                    placeholder="Tell me about your project or just say hello!"
                                />
                            </div>

                            <motion.button
                                type="submit"
                                className="btn-primary submit-btn"
                                disabled={isSubmitting}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="spinner"></div>
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <FaPaperPlane />
                                        Send Message
                                    </>
                                )}
                            </motion.button>

                            {submitStatus && (
                                <motion.div
                                    className={`submit-status ${submitStatus}`}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    {submitStatus === 'success' ? (
                                        <>
                                            <FaCheck />
                                            Message sent successfully!
                                        </>
                                    ) : (
                                        <>
                                            <FaTimes />
                                            Failed to send message. Please try again.
                                        </>
                                    )}
                                </motion.div>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Connect; 