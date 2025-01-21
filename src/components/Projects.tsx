import { motion } from "framer-motion";
import { useState } from "react";
import { ProjectDialog } from "./ProjectDialog";

const projects = [
  {
    title: "HierDTI",
    description: "Hierarchical Graph Transformer for Drug-Target Interaction Prediction",
    tags: ["Graph Neural Networks", "Transformers", "Drug Discovery"],
    image: "/content/HierDTIWebsite/images/model.jpeg",
    links: {
      github: "https://github.com/shrika-eddula/HierDTI",
    },
    details: "HierDTI is a novel architecture that integrates molecular graph-based learning and protein sequence encoding through cross-modality attention mechanisms. By bridging atomic-level molecular features with sequence-level protein data, this model aims to predict binding affinities with both precision and interpretability."
  },
  {
    title: "BuddyMate",
    description: "Autonomous drone system for US Army to detect consciousness of warfighters on battlefield",
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
    title: "Conjure",
    description: "HackMIT project to retrieve actionable insights from large image datasets",
    tags: ["Computer Vision", "LLMs", "Image Processing"],
    image: "/content/images/conjure.jpeg",
    video: "https://www.youtube.com/embed/your-video-id",
    links: {
      github: "https://github.com/your-username/conjure",
      devpost: "https://devpost.com/software/conjure-2tyhq5",
    },
    details: "Conjure is a powerful tool developed during HackMIT that helps researchers and analysts extract meaningful insights from large collections of images. By combining computer vision with large language models, Conjure can process, analyze, and generate reports about visual patterns and trends in image datasets."
  },
  {
    title: "ArchiGen",
    description: "AI generated architectural floor plans via stable diffusion",
    tags: ["Stable Diffusion", "GANs", "Generative AI"],
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
    title: "Activation Aware BitDelta",
    description: "A novel approach to LLM quantization that considers activation patterns",
    tags: ["Quantization", "Model Compression", "Deep Learning"],
    image: "/content/images/BitDelta.webp",
    links: {
      github: "https://github.com/mpeng19/Activation-Aware-Bitdelta",
      paper: "/content/ActAwareBitDelta.pdf",
    },
    details: "Activation-Aware BitDelta introduces an improved scale initialization scheme for 1-bit quantization of LLM fine-tuning weights. By incorporating activation statistics and deriving closed-form solutions for scale factors, our method eliminates the need for computationally expensive distillation steps. This results in >2x speedups while maintaining or improving model performance compared to traditional approaches. The method enables more efficient deployment of fine-tuned LLMs in resource-constrained environments, making multi-tenant serving more accessible without compromising quality."
  },
  {
    title: "WashWatch",
    description: "Embedded ML-Based Real-time Anomaly Monitoring for Laundry Machines",
    tags: ["Arduino", "C++", "Embedded ML", "Sensor Fusion"],
    image: "/content/images/arduino.jpg",
    links: {
      github: "https://github.com/shrika-eddula/WashWatch",
      paper: "/content/washwatch/paper.pdf",
      slides: "/content/washwatch/slides.pdf"
    },
    details: "Last summer, my parents were having troubles with our washing and drying units, so in an effort to help them and also get familiar with tinyML development, I developed tinyML algorithms on an Arduino Nano 33 BLE Sense, including K-means clustering and anomaly detection, to identify irregular load patterns based on vibration, accelerometer, and audio data."
  }
];

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const handleProjectClick = (project: typeof projects[0]) => {
    if (project.title === "Conjure") {
      window.open("https://devpost.com/software/conjure-2tyhq5", "_blank");
    } else if (project.title === "HierDTI") {
      window.open("/content/HierDTIWebsite/index.html", "_blank");
    } else {
      setSelectedProject(project);
    }
  };

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
              onClick={() => handleProjectClick(project)}
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
