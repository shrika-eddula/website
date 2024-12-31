import { motion } from "framer-motion";

export const ActionButtons = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.4 }}
    className="flex gap-4 pt-4"
  >
    <a 
      href="/projects" 
      className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity inline-flex items-center gap-2"
    >
      View Projects
    </a>
    <a 
      href="/resume" 
      className="px-6 py-3 bg-secondary text-secondary-foreground rounded-lg hover:opacity-90 transition-opacity inline-flex items-center gap-2"
    >
      Resume
    </a>
  </motion.div>
);