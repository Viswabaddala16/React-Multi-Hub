import { motion} from 'framer-motion';

const pageVarients = {
    initial : { opacity: 0, x: 50},
    animate : { opacity: 1, x: 0, transition: {duration: 0.4}},
    exit: { opacity: 0, x: -50, transition: { duration: 0.3 } }
}
function About()  {
    const data = [
        { title: 'Mission', icon: '🚀' },
        { title: 'Vision', icon: '👁️' },
        { title: 'Values', icon: '🤝' }
    ];
return(
    <motion.div 
    className="w-full  grid grid-cols-1 md:grid-cols-3  gap-6"
    variants={pageVarients}
    initial="initial"
    animate="animate"
    exit="exit"
    >
        {data.map((item) => (
            <div key={item.icon} className="p-6 flex items-center  flex-col border border-gray-300 border-t-4 border-t-red-500 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl mb-2 ">{item.icon}</div>
                <h3 className="font-bold text-2xl">{item.title}</h3>
                <p className="text-gray-500 text-lg">Providing the best quality service for our users in 2026.</p>
            </div>
        ))}
    </motion.div>
    
)}

export default About;
