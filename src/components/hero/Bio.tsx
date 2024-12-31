import { motion } from "framer-motion";

export const Bio = () => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8, delay: 0.2 }}
    className="prose prose-lg dark:prose-invert max-w-none space-y-4 text-left"
  >
    <p>
      Hi! I'm a junior at MIT studying CS + AI, Chemistry, and Business. This past summer, I was an intern at Apple's Vision Products Group, rapidly prototyping next-generation AR technologies.
    </p>
    
    <p>
      As a published researcher with 12 papers in international peer-reviewed journals and a Barry M. Goldwater Scholar, I've worked on diverse projects from analytical chemistry to affective computing and computer vision. 
    </p>

    <p>
      I'm passionate about building impactful products, from developing autonomous drone devices for the US Army, creating search solutions for drone and satellite imagery, and embedded devices to fix my laundry machine. I also currently serve as the president of AI @ MIT. 
    </p>

    <p>
      At present, I'm building an AI copilot for chemical synthesis that combines intelligent Design of Experiments (DoE), robotic automation, and ML-driven optimization to democratize high-throughput experimentation for biochemical engineering. 
    </p>
  </motion.div>
);