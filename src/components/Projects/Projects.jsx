import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import {
    FaReact,
    FaNodeJs,
    FaDatabase,
    FaStripe,
    FaVuejs,
    FaFire,
    FaCloud,
    FaRobot,
    FaArrowRight
} from 'react-icons/fa';

export const projects = [
    {
        title: "E-Commerce Platform",
        description: "A full-featured online store with shopping cart, user authentication, and payment processing.",
        tech: ["React", "Node.js", "MongoDB", "Stripe"],
        icons: [FaReact, FaNodeJs, FaDatabase, FaStripe],
        demo: "#",
        code: "#",
    },
    {
        title: "Task Management App",
        description: "A productivity application with drag-and-drop functionality and real-time updates.",
        tech: ["Vue.js", "Firebase", "Tailwind CSS", "WebSockets"],
        icons: [FaVuejs, FaFire, FaCloud, FaDatabase],
        demo: "#",
        code: "#",
    },
    {
        title: "Fitness Tracker",
        description: "A mobile app for tracking workouts, nutrition, and health metrics.",
        tech: ["React Native", "GraphQL", "MySQL"],
        icons: [FaReact, FaDatabase],
        demo: "#",
        code: "#",
    },
    {
        title: "Portfolio Website",
        description: "A personal portfolio to showcase projects, skills, and blogs.",
        tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
        icons: [FaReact, FaCloud],
        demo: "#",
        code: "#",
    },
    {
        title: "Chat App",
        description: "A real-time chat application with group messaging.",
        tech: ["Socket.IO", "React", "Node.js"],
        icons: [FaReact, FaNodeJs, FaDatabase],
        demo: "#",
        code: "#",
    },
    {
        title: "AI Image Generator",
        description: "Generate images using AI prompts powered by OpenAI.",
        tech: ["React", "OpenAI API", "Cloudinary"],
        icons: [FaRobot, FaReact, FaCloud],
        demo: "#",
        code: "#",
    }
];

const Projects = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            id="projects"
            className="py-20 bg-dark-200"
        >
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-4">
                    My <span className="text-purple">Projects</span>
                </h2>

                <p className="text-gray-400 text-center mb-16">
                    A selection of my recent work
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            title={project.title}
                            description={project.description}
                            tech={project.tech}
                            icons={project.icons}
                            demo={project.demo}
                            code={project.code}
                        />
                    ))}
                </div>
                <div className='text-center mt-12'>
                    <a href="#" className='inline-flex items-center px-6 py-3 border
                     border-purple rounded-lg font-medium hover:bg-purple/20 transition duration-300
                    '>
                        <span>View More Projects</span>
                        <FaArrowRight />
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

export default Projects;
