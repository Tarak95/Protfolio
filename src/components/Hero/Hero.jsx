import React from 'react';
import { motion } from 'framer-motion';
import profile1 from '../../assets/profile1.png';

const Hero = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            id="home"
            className="min-h-screen flex items-center pt-20 pb-16 bg-gradient-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a]"
        >
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">

              
                <div className="md:w-2/3 mb-10 md:mb-0">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
                        Hi, I'm <span className="text-purple">Tarak Rahman</span>
                    </h1>

                    
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 typewriter break-words">
                        MERN Stack Developer
                    </h2>

                    <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl">
                        I create stunning web experiences with modern technologies and innovative design.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            href="#projects"
                            className="px-6 py-3 bg-purple rounded-lg font-medium hover:bg-purple-700 transition duration-300 text-center"
                        >
                            View Work
                        </a>
                        <a
                            href="#contact"
                            className="px-6 py-3 border border-purple rounded-lg font-medium hover:bg-purple/20 transition duration-300 text-center"
                        >
                            Contact Me
                        </a>
                    </div>
                </div>

                
                <div className="md:w-1/2 flex justify-center">
                    <div className="relative w-64 h-64 md:w-80 md:h-80">
                       
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple to-pink animate-pulse-slow opacity-70"></div>

                       
                        <motion.img
                            animate={{ y: [0, -20, 0] }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                repeatType: "loop",
                                ease: "easeInOut"
                            }}
                            src={profile1}
                            alt="profile"
                            className="relative w-full h-full rounded-full object-cover z-10"
                        />
                    </div>
                </div>

            </div>
        </motion.div>
    );
};

export default Hero;
