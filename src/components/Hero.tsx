import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center px-4 py-16 bg-background dark:bg-background overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 opacity-50" />
      
      {/* Animated circles in background */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.1 }}
          transition={{ duration: 2, delay: 0.5, repeat: Infinity, repeatType: "reverse" }}
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-400 rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-4xl mx-auto z-10 w-full">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Left content */}
          <div className="flex-1 space-y-6">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold tracking-tight text-left"
            >
              <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400">
                Shrika Eddula
              </span>
            </motion.h1>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="prose prose-lg dark:prose-invert max-w-none space-y-4 text-left"
            >
              <p>
                Hi! I am a software engineer at Microsoft, working on the Azure team. Previously, I worked at Amazon
                as an SDE and graduated from the University of Washington with a B.S. in Computer Science.
              </p>
              
              <p>
                My work focuses on developing scalable cloud solutions and improving developer experiences. I am passionate about
                creating efficient, maintainable systems that solve real-world problems.
              </p>

              <p>
                I enjoy tackling complex technical challenges and finding elegant solutions through careful system design
                and implementation. My experience spans across cloud infrastructure, distributed systems, and web development.
              </p>

              <div className="mt-4 space-y-2">
                <p className="font-semibold">Contact Information:</p>
                <p>Email: shrika.eddula@example.com</p>
                <p>Location: Seattle, WA</p>
              </div>
            </motion.div>

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
          </div>

          {/* Right content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="lg:w-1/3"
          >
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg shadow-xl">
              <img 
                src="/lovable-uploads/050be7fb-6f18-49f7-907f-a3df3179f383.png"
                alt="Profile"
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};