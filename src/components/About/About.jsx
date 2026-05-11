import React from "react";
import { motion } from "framer-motion";
import Profile1 from "../../assets/profile1.png";
import { FaLightbulb, FaPaintBrush, FaCode } from "react-icons/fa";

const aboutInfo = [
  {
    icon: FaLightbulb,
    title: "Innovative",
    description:
      "I love creating unique solutions to complex problems with cutting-edge technologies.",
    color: "text-purple",
  },
  {
    icon: FaPaintBrush,
    title: "Design Oriented",
    description:
      "Beautiful design and user experience are at the heart of everything I create.",
    color: "text-pink",
  },
  {
    icon: FaCode,
    title: "Clean Code",
    description:
      "I write maintainable, efficient code following best practices and modern patterns.",
    color: "text-blue",
  },
];

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      id="about"
      className="py-20 bg-dark-200"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">
          About <span className="text-purple">Me</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Get to know more about my background and passion
        </p>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="md:w-1/2 max-w-2xl overflow-hidden"
          >
            <img
              className="w-full h-full object-cover rounded-2xl"
              src={Profile1}
              alt="Profile"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="md:w-1/2"
          >
            <div className="rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-6">My Journey</h3>

              <p className="text-gray-300 mb-6">
                I’m a passionate CSE student and MERN Stack Developer who loves
                building modern, responsive, and user-friendly web applications.
                My journey started with learning basic HTML and CSS, and
                gradually I expanded my skills into JavaScript, React, Node.js,
                Express.js, and MongoDB.
              </p>

              <p className="text-gray-300 mb-12">
                I enjoy solving real-world problems through code and
                continuously improving my development skills by working on
                personal projects and exploring new technologies. I’m always
                eager to learn, grow, and take on new challenges in the world of
                web development.
              </p>
              <p className="text-gray-300 mb-12">
                When I’m not coding, I spend my time learning about modern
                technologies, exploring open-source projects, and improving my
                problem-solving skills. My goal is to become a skilled
                full-stack developer and create impactful digital experiences.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {aboutInfo.map((item, index) => (
                  <div
                    key={index}
                    className="bg-dark-300 rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-2 cursor-pointer"
                  >
                    <div className={`${item.color} text-4xl mb-4`}>
                      <item.icon />
                    </div>
                    <h4 className="text-xl font-semibold mb-3">{item.title}</h4>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
