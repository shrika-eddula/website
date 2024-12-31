import { Navigation } from "@/components/Navigation";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const researchProjects = [
  {
    title: "Machine Learning for Medical Imaging",
    description: "Developed deep learning models for medical image analysis, focusing on early disease detection using computer vision techniques.",
    technologies: ["PyTorch", "TensorFlow", "Computer Vision", "Deep Learning"],
    impact: "Improved disease detection accuracy by 25%"
  },
  {
    title: "Natural Language Processing in Healthcare",
    description: "Created NLP models to analyze medical records and extract key clinical information for better patient care.",
    technologies: ["NLP", "BERT", "Python", "Healthcare Analytics"],
    impact: "Reduced manual review time by 60%"
  },
  {
    title: "Robotics and Automation",
    description: "Designed and implemented autonomous navigation systems for robotic applications in healthcare settings.",
    technologies: ["ROS", "C++", "Robotics", "Sensor Fusion"],
    impact: "Successfully deployed in 3 hospitals"
  }
];

const Research = () => {
  return (
    <div className="bg-background min-h-screen">
      <Navigation />
      <div className="fixed top-20 right-4 z-40 scale-125">
        <ThemeToggle />
      </div>
      <div className="pt-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-8 text-center"
          >
            Research Projects
          </motion.h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {researchProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold text-sm text-primary mb-2">Technologies</h3>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge
                              key={techIndex}
                              variant="secondary"
                              className="bg-accent text-accent-foreground"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm text-primary mb-2">Impact</h3>
                        <p className="text-sm text-muted-foreground">{project.impact}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Research;