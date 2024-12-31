import { motion } from "framer-motion";

export const ProfileSection = () => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, delay: 0.6 }}
    className="lg:w-1/3 mt-8 lg:mt-16"
  >
    <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg shadow-xl">
      <img 
        src="/lovable-uploads/2a1579bc-3846-4ae0-9e17-39859574adcc.png"
        alt="Profile"
        className="object-cover w-full h-full"
      />
    </div>
    
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.8 }}
      className="mt-6 space-y-2 text-left"
    >
      <p className="font-semibold">Contact Information:</p>
      <p>Email: shrika@mit.edu</p>
      <p>Currently: Cambridge, MA</p>
    </motion.div>
  </motion.div>
);