import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    ShieldCheckIcon,
    CodeBracketIcon,
    ServerIcon,
    LightBulbIcon,
    GlobeAltIcon,
    AcademicCapIcon
} from '@heroicons/react/24/solid';

const MatrixBackground: React.FC = () => {
    const [characters, setCharacters] = useState<string[]>([]);

    useEffect(() => {
        const generateCharacters = () => {
            const chars = [];
            for (let i = 0; i < 200; i++) {
                chars.push(
                    String.fromCharCode(Math.random() * (126 - 33) + 33)
                );
            }
            setCharacters(chars);
        };

        generateCharacters();
        const interval = setInterval(generateCharacters, 500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {characters.map((char, index) => (
                <motion.div
                    key={index}
                    initial={{ 
                        y: -50, 
                        opacity: 0,
                        x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : 0
                    }}
                    animate={{ 
                        y: typeof window !== 'undefined' ? window.innerHeight + 50 : 0,
                        opacity: [0, 0.5, 0],
                        x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : 0
                    }}
                    transition={{
                        duration: Math.random() * 10 + 5,
                        repeat: Infinity,
                        repeatType: "loop"
                    }}
                    className="absolute text-green-500 text-xs opacity-30"
                >
                    {char}
                </motion.div>
            ))}
        </div>
    );
};

export default function Portfolio() {
    const skills = [
        { name: "Cybersecurity", icon: <ShieldCheckIcon className="w-12 h-12 text-green-500" />, description: "Protecting digital assets and infrastructure." },
        { name: "Web Development", icon: <CodeBracketIcon className="w-12 h-12 text-emerald-500" />, description: "Building responsive and secure web applications." },
        { name: "Ethical Hacking", icon: <ServerIcon className="w-12 h-12 text-lime-500" />, description: "Identifying vulnerabilities in systems." },
        { name: "Cloud Security", icon: <LightBulbIcon className="w-12 h-12 text-teal-500" />, description: "Securing cloud-based environments." },
        { name: "Penetration Testing", icon: <GlobeAltIcon className="w-12 h-12 text-cyan-500" />, description: "Simulating cyberattacks to test defenses." },
        { name: "React & Next.js", icon: <AcademicCapIcon className="w-12 h-12 text-green-600" />, description: "Developing modern web applications." }
    ];

    const projects = [
        {
            title: "Personal Portfolio",
            description: "A responsive portfolio website showcasing my skills and projects.",
        },
        {
            title: "Cybersecurity Dashboard",
            description: "A dashboard for monitoring and analyzing security threats.",
        },
        {
            title: "Penetration Testing Toolkit",
            description: "A toolkit for performing penetration tests on web applications.",
        }
    ];

    const testimonials = [
        {
            name: "John Doe",
            feedback: "An exceptional professional with a deep understanding of cybersecurity!",
        },
        {
            name: "Jane Smith",
            feedback: "Delivered outstanding results on our web security project.",
        },
        {
            name: "Alice Johnson",
            feedback: "A highly skilled developer and cybersecurity expert!",
        }
    ];

    return (
        <div className="relative min-h-screen bg-gradient-to-r from-gray-900 via-black to-gray-900 text-green-500 overflow-hidden">
            <MatrixBackground />

            <div className="relative z-10 container mx-auto px-4 py-8">
                <motion.header
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex justify-between items-center mb-16"
                >
                    <motion.h1
                        whileHover={{ scale: 1.1 }}
                        className="text-3xl font-mono font-bold text-green-400"
                    >
                        M Shashidhar
                    </motion.h1>

                    <nav className="space-x-4">
                        <a href="#about" className="hover:text-green-300">About</a>
                        <a href="#skills" className="hover:text-green-300">Skills</a>
                        <a href="#projects" className="hover:text-green-300">Projects</a>
                        <a href="#contact" className="hover:text-green-300">Contact</a>
                    </nav>
                </motion.header>

                <section id="about" className="mb-16 text-center">
                    <motion.img
                        src="/watch-dogs-profile.png"
                        alt="Watch Dogs Profile Picture"
                        className="w-32 h-32 mx-auto rounded-full border-4 border-green-500"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                    />
                    <h2 className="text-4xl font-mono font-bold text-green-400 mt-4">About Me</h2>
                    <p className="text-lg text-green-200 font-mono mt-4">
                        Hi, I'm M Shashidhar, a passionate cybersecurity expert and web developer. I specialize in protecting digital assets and building secure web applications.
                    </p>
                </section>

                <section id="skills" className="mb-16">
                    <h2 className="text-4xl font-mono font-bold text-green-400 mb-4">Skills</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                className="bg-black/60 border border-green-800 p-6 rounded-lg text-center hover:shadow-lg hover:shadow-green-500 transition"
                                whileHover={{ scale: 1.05 }}
                            >
                                {skill.icon}
                                <h3 className="text-green-300 font-mono text-xl mt-4">{skill.name}</h3>
                                <p className="text-green-100 font-mono mt-2">{skill.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                <section id="projects" className="mb-16">
                    <h2 className="text-4xl font-mono font-bold text-green-400 mb-4">Projects</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                className="bg-black/60 border border-green-800 p-4 rounded-lg"
                                whileHover={{ scale: 1.05 }}
                            >
                                <h3 className="text-green-300 font-mono text-xl">{project.title}</h3>
                                <p className="text-green-100 font-mono mt-2">{project.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                <section id="testimonials" className="mb-16">
                    <h2 className="text-4xl font-mono font-bold text-green-400 mb-4">Testimonials</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="bg-black/60 border border-green-800 p-4 rounded-lg">
                                <p className="text-green-100 font-mono">"{testimonial.feedback}"</p>
                                <p className="text-green-300 font-mono mt-2">- {testimonial.name}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section id="contact" className="mb-16">
                    <h2 className="text-4xl font-mono font-bold text-green-400 mb-4">Contact Me</h2>
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-green-300 font-mono">Name:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="w-full bg-black/60 border border-green-800 p-2 rounded-lg text-green-100 font-mono focus:outline-none focus:border-green-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-green-300 font-mono">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="w-full bg-black/60 border border-green-800 p-2 rounded-lg text-green-100 font-mono focus:outline-none focus:border-green-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-green-300 font-mono">Message:</label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={4}
                                className="w-full bg-black/60 border border-green-800 p-2 rounded-lg text-green-100 font-mono focus:outline-none focus:border-green-500"
                            />
                        </div>
                        <motion.button
                            type="submit"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="bg-green-600 text-black px-6 py-3 rounded-lg font-mono hover:bg-green-400 transition"
                        >
                            Send Message
                        </motion.button>
                    </form>
                </section>

                <footer className="mt-16 text-center text-green-300 font-mono">
                    <p>© 2023 M Shashidhar. All rights reserved.</p>
                    <div className="flex justify-center space-x-4 mt-4">
                        <a href="#" className="hover:text-green-100">Facebook</a>
                        <a href="#" className="hover:text-green-100">Twitter</a>
                        <a href="#" className="hover:text-green-100">LinkedIn</a>
                    </div>
                </footer>
            </div>
        </div>
    );
}