import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaEye, FaFilePdf, FaBriefcase, FaGraduationCap, FaCode } from 'react-icons/fa';
import './Resume.css';

const Resume = () => {
    // const experience = [
    //     {
    //         title: 'Senior Full Stack Developer',
    //         company: 'Tech Company',
    //         period: '2022 - Present',
    //         description: [
    //             'Led development of enterprise web applications using React, Node.js, and MongoDB',
    //             'Mentored junior developers and implemented best practices across the team',
    //             'Optimized application performance and improved user experience',
    //             'Collaborated with cross-functional teams to deliver high-quality products'
    //         ]
    //     },
    //     {
    //         title: 'Full Stack Developer',
    //         company: 'Startup',
    //         period: '2020 - 2022',
    //         description: [
    //             'Built and maintained multiple web applications with modern frameworks',
    //             'Implemented responsive designs and ensured cross-browser compatibility',
    //             'Integrated third-party APIs and payment gateways',
    //             'Participated in agile development processes and code reviews'
    //         ]
    //     },
    //     {
    //         title: 'Frontend Developer Intern',
    //         company: 'Digital Agency',
    //         period: '2019 - 2020',
    //         description: [
    //             'Developed responsive websites using HTML, CSS, and JavaScript',
    //             'Worked with design teams to implement pixel-perfect layouts',
    //             'Optimized website performance and SEO best practices',
    //             'Collaborated with clients to understand and meet their requirements'
    //         ]
    //     }
    // ];

    // const education = [
    //     {
    //         degree: 'Bachelor of Computer Science',
    //         school: 'University Name',
    //         period: '2016 - 2020',
    //         description: 'Graduated with honors, focusing on software engineering and web development technologies.'
    //     }
    // ];

    // const skills = {
    //     'Frontend': ['React', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'SASS', 'Next.js'],
    //     'Backend': ['Node.js', 'Python', 'Express.js', 'Django', 'REST APIs', 'GraphQL'],
    //     'Database': ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Firebase'],
    //     'DevOps': ['AWS', 'Docker', 'Git', 'CI/CD', 'Linux', 'Nginx'],
    //     'Tools': ['VS Code', 'Figma', 'Postman', 'Jira', 'Slack', 'Trello']
    // };

    // const certifications = [
    //     'AWS Certified Developer Associate',
    //     'MongoDB Certified Developer',
    //     'React Developer Certification',
    //     'Google Cloud Platform Fundamentals'
    // ];

    const handleDownload = () => {
        // In a real application, this would download the actual PDF
        const link = document.createElement('a');
        link.href = '/resume.pdf'; // Placeholder - you'll need to add your actual resume PDF
        link.download = 'Sambhav_Poudel_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleView = () => {
        // In a real application, this would open the PDF in a new tab
        window.open('/resume.pdf', '_blank');
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
                        <motion.button
                            className="btn-secondary"
                            onClick={handleView}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FaEye />
                            View Online
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Resume; 