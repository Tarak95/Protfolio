import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaJs,
  FaNodeJs,
  FaGitAlt,
  FaFigma,
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiFirebase, SiExpress } from "react-icons/si";
import { TbBrandCpp, TbBrandPython } from "react-icons/tb";
import { HiOutlineDatabase } from "react-icons/hi";

const skills = [
 
  { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
  { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },

  { name: "Bootstrap", icon: FaBootstrap, color: "text-purple-400" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-sky-400" },
  { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
  { name: "React", icon: FaReact, color: "text-cyan-400" },
  { name: "Node.js", icon: FaNodeJs, color: "text-green-400" },
  { name: "Express", icon: SiExpress, color: "text-gray-300" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
  { name: "MySQL", icon: HiOutlineDatabase, color: "text-blue-300" },
  { name: "Firebase", icon: SiFirebase, color: "text-orange-400" },
  { name: "Git & GitHub", icon: FaGitAlt, color: "text-red-400" },
  { name: "Figma", icon: FaFigma, color: "text-pink-400" },
  { name: "C++ OpenGL", icon: TbBrandCpp, color: "text-blue-400" },
  // { name: "Python (Basic)", icon: TbBrandPython, color: "text-yellow-300" },
];

const Skill = () => {
  return (
    <motion.section
      id="skills"
      className="py-20 bg-dark-200"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-3xl md:text-4xl font-bold text-center mb-4">
          My <span className="text-purpl">Skills</span>
        </h3>

        <p className="text-gray-400 text-center max-w-xl mx-auto mb-14">
          Technologies I use to build modern, scalable and interactive applications
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="bg-gray-800 rounded-2xl p-6 flex flex-col items-center gap-4 shadow-lg hover:shadow-teal-500/20 transition"
              >
                <div className={`text-4xl ${skill.color}`}>
                  <Icon />
                </div>
                <span className="text-sm font-medium text-gray-200">
                  {skill.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default Skill;
