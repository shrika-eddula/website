import { motion } from "framer-motion";

export const Bio = () => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8, delay: 0.2 }}
    className="prose prose-lg dark:prose-invert max-w-none space-y-4 text-left"
  >
    <p>
      Hi! I'm a student at MIT studying CS, AI, Math, and Business. This past summer, I was a ML SWE Intern
      at Apple's Vision Products Group, working on cutting-edge R&D projects.
    </p>
    
    <p>
      As a published researcher with 9 papers in international peer-reviewed journals and a Barry M. Goldwater Scholar,
      I've worked on diverse projects from quantum chemistry to affective computing at the MIT Media Lab.
      Currently, I'm developing an ML-powered system for optimizing caffeine delivery using biosignal data.
    </p>

    <p>
      I'm passionate about building impactful products, from developing an autonomous drone device for the US Army
      to creating VLM solutions for semantic search in drone and satellite imagery. As the president of AI @ MIT,
      I lead a vibrant community of over 300 members, fostering innovation and collaboration in AI.
    </p>
  </motion.div>
);