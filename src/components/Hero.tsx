import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="min-h-[80vh] flex items-center justify-center px-4 bg-background dark:bg-background mt-32">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-sky-600 via-blue-600 to-gray-500 dark:from-sky-400 dark:via-blue-400 dark:to-gray-400"
        >
          Hi, I'm Shrika Eddula
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-xl text-foreground/80 leading-relaxed"
        >
          A passionate software engineer focused on creating impactful solutions through elegant code.
        </motion.p>
      </div>
    </section>
  );
};