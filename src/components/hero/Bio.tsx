import { motion } from "framer-motion";

export const Bio = () => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8, delay: 0.2 }}
    className="prose prose-lg dark:prose-invert max-w-none space-y-4 text-left"
  >
    <p>
      Hi! I'm a junior at MIT studying CS + AI, Chemistry, and Business. In a previous life, I was building software at Apple on the Vision Products team and autonomous drone systems at the US Army.
    </p>
    
    <p>
      I dabble in research when I can. I'm a Barry M. Goldwater Scholar and have published 12 papers in international peer-reviewed journals. While my research interests are field agnostic, I enjoy analytical chemistry, affective computing, and embedded systems.
    </p>

    <p>
      Long term, I have a couple of delusional goals such as accelerating artifical photosynthesis and carbon sequestration. I'd like to solve climate change in my lifetime. But at present, I'm building robots 🦾 and software 🧪 for the life sciences 🔬 and making biochemical synthesis 10 times faster.
    </p>

    <p>
      If any of my yapping interests you, please do drop me a note!
    </p>
  </motion.div>
);