import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-6xl font-bold tracking-tight"
        >
          Hi, I'm Shrika Eddula
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 text-xl text-gray-600 leading-relaxed"
        >
          A passionate software engineer focused on creating impactful solutions through elegant code.
        </motion.p>
      </div>
    </section>
  );
};