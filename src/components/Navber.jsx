import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

const Navber = () => {
  const [showMenu, setShowMenu] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      
      <nav className="fixed top-0 left-0 w-full z-50 bg-dark-100/90 backdrop-blur-md py-4 px-8 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          
          <a href="#home" className="text-3xl font-bold text-white flex items-center gap-2">
            Tarak <span className="text-purple">Rahman</span>
            <span className="w-2 h-2 bg-purple rounded-full"></span>
          </a>

          
          <div className="hidden md:flex space-x-10">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-white/80 hover:text-purple transition group"
              >
                {link.name}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>

          
          <div className="md:hidden text-white text-2xl cursor-pointer">
            {showMenu ? (
              <FaXmark onClick={() => setShowMenu(false)} />
            ) : (
              <FaBars onClick={() => setShowMenu(true)} />
            )}
          </div>
        </div>
      </nav>

     
      <AnimatePresence>
        {showMenu && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.3 }}
            className="fixed top-20 left-0 w-full h-[calc(100vh-80px)] bg-dark-300 z-40 flex flex-col items-center justify-center space-y-6 md:hidden"
          >
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setShowMenu(false)}
                className="text-2xl text-white/80 hover:text-purple transition"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navber;
