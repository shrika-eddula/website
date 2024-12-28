import { motion } from "framer-motion";

const projects = [
  {
    title: "Project 1",
    description: "Description of project 1",
    tags: ["React", "TypeScript", "Node.js"],
    image: "/placeholder.svg",
  },
  // Add more projects here
];

export const Projects = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-sky-50 to-white" id="projects">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-gray-900">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-sky-100"
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-sky-50 text-sky-700 rounded-full text-sm font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};