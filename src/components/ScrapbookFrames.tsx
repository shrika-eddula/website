import { motion } from "framer-motion";

export const ScrapbookFrames = () => {
  return (
    <div className="relative w-full max-w-4xl mx-auto mt-12 mb-24">
      {/* Grid background */}
      <div 
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, #F1F0FB 1px, transparent 1px),
            linear-gradient(to bottom, #F1F0FB 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px'
        }}
      />
      
      {/* Scrapbook frames */}
      <div className="relative grid grid-cols-2 gap-8 p-8">
        <motion.div
          initial={{ rotate: -5, scale: 0.9 }}
          animate={{ rotate: -5, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="transform col-span-1 aspect-square bg-white p-3 shadow-lg rounded-sm"
        >
          <div className="w-full h-full bg-blue-50 rounded-sm flex items-center justify-center text-blue-300">
            Picture 1
          </div>
        </motion.div>
        
        <motion.div
          initial={{ rotate: 5, scale: 0.9 }}
          animate={{ rotate: 5, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="transform col-span-1 aspect-[3/4] bg-white p-3 shadow-lg rounded-sm"
        >
          <div className="w-full h-full bg-blue-50 rounded-sm flex items-center justify-center text-blue-300">
            Picture 2
          </div>
        </motion.div>
        
        <motion.div
          initial={{ rotate: -3, scale: 0.9 }}
          animate={{ rotate: -3, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="transform col-span-2 aspect-[16/9] bg-white p-3 shadow-lg rounded-sm"
        >
          <div className="w-full h-full bg-blue-50 rounded-sm flex items-center justify-center text-blue-300">
            Picture 3
          </div>
        </motion.div>
      </div>
    </div>
  );
};