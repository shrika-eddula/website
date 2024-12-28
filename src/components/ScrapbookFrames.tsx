import { motion } from "framer-motion";

export const ScrapbookFrames = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        initial={{ rotate: -5, scale: 0.9, opacity: 0 }}
        animate={{ rotate: -5, scale: 1, opacity: 0.8 }}
        transition={{ duration: 0.5 }}
        className="absolute top-32 -left-4 w-48 aspect-square bg-white p-3 shadow-lg rounded-sm"
      >
        <div className="w-full h-full bg-blue-50 rounded-sm flex items-center justify-center text-blue-300">
          Picture 1
        </div>
      </motion.div>
      
      <motion.div
        initial={{ rotate: 5, scale: 0.9, opacity: 0 }}
        animate={{ rotate: 5, scale: 1, opacity: 0.8 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="absolute top-48 -right-4 w-56 aspect-[3/4] bg-white p-3 shadow-lg rounded-sm"
      >
        <div className="w-full h-full bg-blue-50 rounded-sm flex items-center justify-center text-blue-300">
          Picture 2
        </div>
      </motion.div>
      
      <motion.div
        initial={{ rotate: -3, scale: 0.9, opacity: 0 }}
        animate={{ rotate: -3, scale: 1, opacity: 0.8 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="absolute bottom-24 left-1/4 w-64 aspect-[16/9] bg-white p-3 shadow-lg rounded-sm"
      >
        <div className="w-full h-full bg-blue-50 rounded-sm flex items-center justify-center text-blue-300">
          Picture 3
        </div>
      </motion.div>
    </div>
  );
};