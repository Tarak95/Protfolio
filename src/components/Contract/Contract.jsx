import React from 'react'
import { motion } from 'framer-motion';

const Contract = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            id='contract'
            className='py-20 bg-dark-100'
        >
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-4">
                    Get In <span className="text-purple">Touch</span>
                </h2>

                <p className="text-gray-400 text-center mb-16">
                    Have a project in mind or want to collaborate? Let's talk!
                </p>

                <div>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto'>
                    <div>
                        <form className='space-y-6'>
                            <div>
                                <label htmlFor="name" className='block text-gray-300 mb-2'>Your Name</label>
                                <input className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-name' type='text'></input>
                            </div>
                        </form>
                    </div>
                </div>
                </div>

                <div className='mb-5 mt-5'> 
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto'>
                    <div>
                        <form className='space-y-6'>
                            <div>
                                <label htmlFor="email" className='block text-gray-300 mb-2'>Email Address</label>
                                <input className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-name ' type='text'></input>
                            </div>
                        </form>
                    </div>
                </div>
                </div>

                <div>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto'>
                    <div>
                        <form className='space-y-6'>
                            <div>
                                <label htmlFor="message" className='block text-gray-300 mb-2'>Message</label>
                                <input className='w-full h-40 bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-name ' type='text'></input>
                            </div>
                            <button type='submit' className='w-full px-6 py-3 bg-purple rounded-lg font-medium hover:bg-purple-700
                            transition duration-300 cursor-pointer
                            '>Send</button>
                        </form>
                    </div>
                </div>
                </div>
                </div>

        </motion.div>
    )
}

export default Contract