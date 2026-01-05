import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      id="contact"
      className="py-20 bg-dark-100"
    >
      <div className="container mx-auto px-6 max-w-6xl">
       

        <h2 className="text-3xl font-bold text-center mb-4">
          Get In <span className="text-purple">Touch</span>
        </h2>
        <p className="text-gray-400 text-center mb-16">
          Have a project in mind or want to collaborate? Let's talk!
        </p>

       
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          
          <form className="space-y-6">
            <div>
              <label className="block text-gray-300 mb-2">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2">
                Message
              </label>
              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-purple rounded-lg font-medium hover:bg-purple-700 transition duration-300"
            >
              Send Message
            </button>
          </form>

          
          <div className="space-y-8">
            
           
            <div className="flex items-start text-gray-300">
              <FaMapMarkerAlt className=" text-2xl mr-4 mt-1" />
              <div>
                <h3 className="text-lg font-semibold">Location</h3>
                <p className="text-sm text-gray-400">
                  Dhaka, Bangladesh
                </p>
              </div>
            </div>

           
            <div className="flex items-start text-gray-300">
              <MdOutlineMailOutline className=" text-2xl mr-4 mt-1" />
              <div>
                <h3 className="text-lg font-semibold">Email</h3>
                <p className="text-sm text-gray-400">
                  tarekrahman8295@gmail.com
                </p>
              </div>
            </div>

           
            <div className="flex items-start text-gray-300">
              <FaPhoneAlt className=" text-xl mr-4 mt-1" />
              <div>
                <h3 className="text-lg font-semibold">Phone</h3>
                <p className="text-sm text-gray-400">
                  +880 1991 208 295
                </p>
              </div>
            </div>

            
            <div>
              <h3 className="text-lg font-semibold mb-4">
                Follow Me
              </h3>
              <div className="flex space-x-4">
                
                <a
                  href="https://github.com/Tarak95"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center
                  hover:bg-purple hover:text-white transition duration-300"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://www.linkedin.com/in/tarek-rahman-51535533b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center
                  text-blue-500 hover:bg-blue-500 hover:text-white transition duration-300"
                >
                  <FaLinkedin />
                </a>

                <a
                  href="https://www.facebook.com/share/1CyRWR6hBL/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center
                  text-blue-600 hover:bg-blue-600 hover:text-white transition duration-300"
                >
                  <FaFacebook />
                </a>

                <a
                  href="Yhttps://x.com/TarakRahma88288"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center
                  text-sky-400 hover:bg-sky-400 hover:text-white transition duration-300"
                >
                  <FaTwitter />
                </a>

              </div>
            </div>

            
            <div className="w-full h-64 rounded-lg overflow-hidden border border-dark-400">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps?q=Dhaka,Bangladesh&output=embed"
                className="w-full h-full"
                loading="lazy"
              ></iframe>
            </div>

          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
