import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="min-h-[90vh] relative flex items-center justify-center overflow-hidden">
      {/* Background with animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-gray-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDEyOSwgMTQwLCAyNDgsIDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-40" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 py-32 sm:px-6 lg:px-8">
        <div className="text-center space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 dark:from-purple-400 dark:via-pink-400 dark:to-indigo-400">
                Hi, I'm Shrika Eddula
              </span>
            </h1>
            <p className="max-w-2xl mx-auto text-xl md:text-2xl text-gray-600 dark:text-gray-300">
              A passionate software engineer focused on creating impactful solutions through elegant code.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Link
              to="/projects"
              className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-medium overflow-hidden rounded-full bg-purple-600 text-white transition-all hover:bg-purple-700 duration-300 ease-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2"
            >
              <span className="relative flex items-center">
                View Projects
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
            <Link
              to="/resume"
              className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-medium overflow-hidden rounded-full border-2 border-purple-600 text-purple-600 hover:bg-purple-50 dark:border-purple-400 dark:text-purple-400 dark:hover:bg-purple-900/20 transition-all duration-300 ease-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2"
            >
              <span className="relative flex items-center">
                Resume
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12"
          >
            {[
              { title: "Frontend", description: "React, TypeScript, Tailwind" },
              { title: "Backend", description: "Node.js, Python, Java" },
              { title: "Tools", description: "Git, Docker, AWS" }
            ].map((item, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-white/40 dark:bg-gray-800/40 backdrop-blur-sm border border-purple-100 dark:border-purple-900 hover:border-purple-300 dark:hover:border-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {item.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};