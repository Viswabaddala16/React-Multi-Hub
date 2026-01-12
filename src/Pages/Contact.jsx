import React, { useState } from 'react'
import Button from '../components/Button/Button';
import { motion } from 'framer-motion';

const pageVariants = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.4 } },
    exit: { opacity: 0, x: -50, transition: { duration: 0.3 } }
};

const Contact = () => {
  const[email,setEmail] = useState("");
  const[textArea,setTextArea] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message send from: ${email}`);
    setEmail("");
    setTextArea("");
  }
  return (
    <motion.div 
    className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md"
    variants={pageVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    >
      <h1 className="text-2xl font-bold mb-6 text-center">Get in Touch</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">Email Address</label>
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 border rounded-lg focus:ring-2 focus:ring-red-400 outline-none" 
            placeholder="you@example.com"
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">Message</label>
          <textarea value={textArea} onChange={(e) => setTextArea(e.target.value)} className="p-2 border rounded-lg h-24 focus:ring-2 focus:ring-red-400  outline-none" />
        </div>
        <Button type="submit" className="bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition-all font-bold">
          Send Message
        </Button>
      </form>
    </motion.div>
    
  );
}

export default Contact;