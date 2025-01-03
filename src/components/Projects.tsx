import { motion } from "framer-motion";
import { useState } from "react";
import { ProjectDialog } from "./ProjectDialog";

const projects = [
  {
    title: "SculptFormer",
    description: "Transformer Boosted 3D Mesh Reconstruction from a Single 2D Image",
    tags: ["Transformers", "Computer Vision", "3D Reconstruction", "Mesh"],
    image: "/content/SculptFormer/sculptformer.png",
    video: "https://www.youtube.com/embed/bId7TcPZsIA",
    links: {
      github: "https://github.com/evnkm/SculptFormer",
      paper: "/content/SculptFormer/sculptformer.pdf",
      slides: "/content/SculptFormer/sculptpres.pdf"
    },
    details: "This project was done over Spring 2024 alongside my good friend Evan for our computer vision class."
  },
  {
    title: "BuddyMate",
    description: "ML project for US Army to detect consciousness of warfighters on battlefield",
    tags: ["OpenCV", "Speech Recognition", "Embedded ML", "Arduino", "LLM"],
    image: "/content/images/3d.png",
    video: "https://www.youtube.com/embed/vCpYQHbRQa4",
    links: {
      github: "https://github.com/shrika-eddula/BuddyMate",
      paper: "/content/BuddyMate/buddymate.pdf",
      slides: "/content/BuddyMate/buddyPres.pdf"
    },
    details: "This project was done over the summer of 2023 for the United States Army. The task was to research and design a smartphone sized drone attachment that can remotely assess a wounded Warfighter's state of consciousness on the battlefield asper the Glasgow Coma Scale. Through a combination of computer vision and natural language processing, the approach integrates both AI and functional hardware components, such as optical, audio, and laser, in a semi-autonomous system as a tool for future Army Medics that can give vital insight into a wounded Warfighter's neurological state."
  },
  {
    title: "Conjure",
    description: "HackMIT project to retrieve actionable insights from large image datasets",
    tags: ["Computer Vision", "LLMs", "Image Processing", "Data Analysis", "Python"],
    image: "/content/images/conjure.jpeg",
    video: "https://www.youtube.com/embed/your-video-id",
    links: {
      github: "https://github.com/your-username/conjure",
      devpost: "https://devpost.com/software/conjure-mit",
    },
    details: "Conjure is a powerful tool developed during HackMIT that helps researchers and analysts extract meaningful insights from large collections of images. By combining computer vision with large language models, Conjure can process, analyze, and generate reports about visual patterns and trends in image datasets."
  },
  {
    title: "ArchiGen",
    description: "AI generated architectural floor plans via stable diffusion",
    tags: ["Stable Diffusion", "GANs", "Generative AI", "Machine Learning"],
    image: "/content/images/archigen.png",
    video: "https://www.youtube.com/embed/kYeRlDDyd70",
    links: {
      github: "https://github.com/shrika-eddula/archigen",
      paper: "/content/images/archigenPresentation.pdf",
      slides: "/content/images/archigenPresentation.pdf"
    },
    details: "ArchiGen gives users the power to specify what general features they need in an architectural floor plan (e.g, number of rooms, type of building) and generates multiple potential layouts that meet the constraints. Our product breaks the bounds of creativity by considering arrangements that would not immediately have been thought of by the human mind."
  },
  {
    title: "WashWatch",
    description: "Embedded ML-Based Real-time Anomaly Monitoring for Laundry Machines",
    tags: ["Arduino", "C++", "Embedded ML", "Sensor Fusion"],
    image: "/content/images/arduino.jpg",
    video: "https://www.youtube.com/embed/your-video-id",
    links: {
      github: "https://github.com/shrika-eddula/WashWatch",
      paper: "/content/washwatch/paper.pdf",
      slides: "/content/washwatch/slides.pdf"
    },
    details: "WashWatch is an innovative project that uses embedded machine learning to monitor laundry machines in real-time for anomalies. By integrating various sensors and implementing sophisticated ML algorithms on Arduino hardware, the system can detect unusual vibrations, sounds, or behavior patterns that might indicate maintenance needs or potential failures. This proactive monitoring approach helps prevent machine breakdowns and optimizes maintenance schedules."
  },
  {
    title: "Project 6",
    description: "Description for Project 6",
    tags: ["Tag 1", "Tag 2", "Tag 3"],
    image: "/placeholder.svg",
    links: {
      github: "#",
      paper: "#",
      slides: "#"
    }
  },
  {
    title: "Project 7",
    description: "Description for Project 7",
    tags: ["Tag 1", "Tag 2", "Tag 3"],
    image: "/placeholder.svg",
    links: {
      github: "#",
      paper: "#",
      slides: "#"
    }
  }
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
              <div className="aspect-video w-full overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-contain bg-black/5" 
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2 text-foreground">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 bg-secondary dark:bg-secondary text-secondary-foreground dark:text-secondary-foreground rounded-full text-sm font-medium"
                    >
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
