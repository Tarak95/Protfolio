import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaVuejs,
  FaFire,
  FaCloud,
  FaRobot,
  FaArrowRight,
} from "react-icons/fa";

import { RiTailwindCssFill } from "react-icons/ri";
import { SiFirebase } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";

export const projects = [
  {
    title: "Chatting Application",
    description:
      "A realtime chat application using React, Firebase Authentication, Realtime Database and Tailwind CSS.",
    image: "/chat.png",
    tech: ["React", "Node.js", "Tailwind", "Firebase"],
    icons: [FaReact, FaNodeJs, RiTailwindCssFill, SiFirebase],
    demo: "https://postman-navy.vercel.app",
    code: "https://github.com/Tarak95/Postman.git",
  },
  {
    title: "Nexcent-Website",
    description:
      "Nexcent is a modern, high-performance landing page designed for agencies and organizations looking to streamline their community management and digital presence. Built with cutting-edge technology, it offers a seamless user experience to turn visitors into loyal clients.",
    image: "/nexcent.png",
    tech: ["React", "Node.js", "Tailwind", "Javascript"],
    icons: [TbBrandJavascript, FaReact, RiTailwindCssFill],
    demo: "https://nexcent-ten.vercel.app",
    code: "https://github.com/Tarak95/nexcent.git",
  },
  {
    title: "Game",
    description:
      "",
    image: "/gam.png",
    tech: ["React Native", "GraphQL", "MySQL"],
    icons: [FaReact, FaDatabase],
    demo: "https://game-rose-eta.vercel.app/",
    code: "https://github.com/Tarak95/Game.git",
  },
  {
    title: "Petroil Website",
    description:
      "Petroil AI: Smart Energy Solutions is a solid choice. You could also go with NextGen Petroil-T: Intelligent Fuel Management",
    image: "/petroil.png",
    tech: ["Next.js", "Tailwind CSS", "js","Html","Css","Node.js"],
    icons: [FaReact, FaCloud],
    demo: "https://protfolio-xi-ashen.vercel.app/",
    code: "https://github.com/Tarak95/Protfolio.git",
  },
  {
    title: "Chat App",
    description:
      "A real-time chat application with group messaging.",
    image: "",
    tech: ["Socket.IO", "React", "Node.js"],
    icons: [FaReact, FaNodeJs, FaDatabase],
    demo: "#",
    code: "#",
  },
  {
    title: "AI Image Generator",
    description:
      "Generate images using AI prompts powered by OpenAI.",
    image: "",
    tech: ["React", "OpenAI API", "Cloudinary"],
    icons: [FaRobot, FaReact, FaCloud],
    demo: "#",
    code: "#",
  },
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
              image={project.image}
              tech={project.tech}
              icons={project.icons}
              demo={project.demo}
              code={project.code}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 border border-purple rounded-lg font-medium hover:bg-purple/20 transition duration-300"
          >
            <span>View More Projects</span>
            <FaArrowRight />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
