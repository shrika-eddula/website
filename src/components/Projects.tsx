import { motion } from "framer-motion";
import { useState } from "react";
import { ProjectDialog } from "./ProjectDialog";

const projects = [
  {
    title: "SculptFormer",
    description: "Transformer Boosted 3D Mesh Reconstruction from a Single 2D Image",
    tags: ["Transformers", "Computer Vision", "3D Reconstruction"],
    image: "/placeholder.svg",
    links: {
      github: "https://github.com/evnkm/SculptFormer",
      // Paper and slides links will be added later
    }
  },
  // Add more projects here
];

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section className="py-24 px-4 bg-background dark:bg-background" id="projects">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-foreground">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card dark:bg-card backdrop-blur-sm rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-border cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2 text-foreground">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-secondary dark:bg-secondary text-secondary-foreground dark:text-secondary-foreground rounded-full text-sm font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectDialog
          open={!!selectedProject}
          onOpenChange={(open) => !open && setSelectedProject(null)}
          project={selectedProject}
        />
      )}
    </section>
  );
};
