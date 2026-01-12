import { motion } from 'framer-motion';
import Button from "../components/Button/Button";

// Define the simple fade-in/fade-out animation properties
const pageVariants = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.4 } },
    exit: { opacity: 0, x: -50, transition: { duration: 0.3 } }
};

const Home = () => {
  return (
    // Wrap the content with motion.div and apply variants
    <motion.div 
        className='text-center space-y-4'
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit" // AnimatePresence uses this when the component is removed
    >
        <h1 className='font-extrabold text-4xl text-gray-800 '>Welcome to Homepage</h1>
        <p className=' text-orange-900 text-xl'> Discover amazing features and connect with our community today.</p>
        <Button className='rounded-lg bg-red-400 py-4 px-6 text-white font-extrabold hover:bg-red-500 transition'>
          Get Started
        </Button>
    </motion.div>
  );
};

export default Home;
