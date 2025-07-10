import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaRocket, FaLightbulb, FaUsers } from 'react-icons/fa';
import './About.css';

const About = () => {
    const skills = [
        { name: 'React', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'Node.js', level: 80 },
        { name: 'Python', level: 75 },
        { name: 'SQL', level: 85 },
        { name: 'AWS', level: 70 }
    ];

    const highlights = [
        {
            icon: FaGraduationCap,
            title: 'Student',
            description: 'Shopomore at University of Cincinnati, Majoring in Computer Science. Graduating in 2028.'
        },
        {
            icon: FaRocket,
            title: 'Startup Entusiast',
            description: 'Passionate about startups and the startup ecosystem'
        },
        {
            icon: FaLightbulb,
            title: 'Problem Solving',
            description: 'Creative solutions to complex technical challenges and business requirements.'
        },
        {
            icon: FaUsers,
            title: 'Team Collaboration',
            description: 'Working effectively in agile teams and mentoring junior developers.'
        }
    ];

    return (
        <section id="about" className="about-section section">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2>About Me</h2>
                </motion.div>

                <div className="about-content">
                    <motion.div
                        className="about-text"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h3>Who I Am</h3>
                        <p>
                            I’m a passionate learner with a growing interest in the startup ecosystem. My current focus lies in
                            Computer Vision, especially working with images and video, as well as AI-driven audio and
                            speech technologies (such as voice recognition and sound analysis). I enjoy building and
                            experimenting with ideas that sit at the intersection of innovation and real-world impact.
                        </p>
                        <p>
                            Currently, I’m working on a startup idea and am always eager to connect with like-minded
                            individuals. If you're interested in collaboration, especially in areas like vision AI,
                            voice AI, or early-stage startups, feel free to reach out!
                        </p>
                        <p>
                            Let's Talk Busniess!
                        </p>
                    </motion.div>

                    <motion.div
                        className="about-highlights"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <h3>What I Do</h3>
                        <div className="highlights-grid">
                            {highlights.map((highlight, index) => (
                                <motion.div
                                    key={highlight.title}
                                    className="highlight-card glass-card"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                                    viewport={{ once: true }}
                                    whileHover={{ y: -10 }}
                                >
                                    <div className="highlight-icon">
                                        <highlight.icon />
                                    </div>
                                    <h4>{highlight.title}</h4>
                                    <p>{highlight.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
                {/* 
                <motion.div
                    className="skills-section"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h3>Technical Skills</h3>
                    <div className="skills-grid">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={skill.name}
                                className="skill-item"
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="skill-header">
                                    <span className="skill-name">{skill.name}</span>
                                    <span className="skill-percentage">{skill.level}%</span>
                                </div>
                                <div className="skill-bar">
                                    <motion.div
                                        className="skill-progress"
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${skill.level}%` }}
                                        transition={{ duration: 1, delay: 1 + index * 0.1 }}
                                        viewport={{ once: true }}
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div> */}

                <motion.div
                    className="experience-section"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h3>Experience</h3>
                    <div className="timeline">
                        <motion.div
                            className="timeline-item"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 1 }}
                            viewport={{ once: true }}
                        >
                            <div className="timeline-content glass-card">
                                <h4>Research Intern</h4>
                                <p className="timeline-company">FCU • 2025 - Present</p>
                                <p>Worked on Smart Glass. Optimized the best model for Computer Vision. Worked on the backend of the Smart Glass.</p>
                            </div>
                        </motion.div>

                        <motion.div
                            className="timeline-item"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 1.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="timeline-content glass-card">
                                <h4>Founder</h4>
                                <p className="timeline-company">Startup • 2024 - Present</p>
                                <p>Working on a advance banking startup idea. Looking for co-founders and investors.</p>
                            </div>
                        </motion.div>

                        <motion.div
                            className="timeline-item"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 1.4 }}
                            viewport={{ once: true }}
                        >
                            <div className="timeline-content glass-card">
                                <h4>Student Wroker</h4>
                                <p className="timeline-company">University of Cincinnati • 2023 - 2025</p>
                                <p>Helped Engieering department with facilities and other things.</p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About; 