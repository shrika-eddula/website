import { motion } from "framer-motion";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const timelineItems = [
  {
    year: "June 2024 – August 2024",
    company: "Apple",
    title: "Software Engineering Intern",
    division: "Vision Products Group",
    location: "Seattle, WA",
    description: "Prototyped Human Computer Interfaces for the R&D wing, leveraging AI and augmented reality to develop revolutionary experiences. Developed an entirely new application paradigm requiring rapid experimentation and prototyping.",
    logo: "/apple-logo.svg"
  },
  {
    year: "April 2023 – June 2024",
    company: "MIT Media Lab",
    title: "Undergraduate Researcher",
    division: "Camera Culture Group",
    location: "Boston, MA",
    description: "Reconstructed 3D models from satellite imagery using Neural Radiance Fields (NeRF). Developed Eulerian Video Magnification + Senior Fusion approach for forest fire prediction.",
    logo: "/mit-logo.svg"
  },
  {
    year: "June 2023 – August 2023",
    company: "United States Army",
    title: "Machine Learning Intern",
    division: "Embedded Machine Learning",
    location: "Natik, MA",
    description: "Designed autonomous drone device for battlefield consciousness assessment using Glasgow Coma Scale. Implemented tinyML algorithms with pose detection, computer vision, and NLP for real-time processing on Nvidia Jetson Nano.",
    logo: "/army-logo.svg"
  },
  {
    year: "May 2019 – February 2022",
    company: "University of North Texas",
    title: "Undergraduate Researcher & Lab Manager",
    division: "Computational Chemistry",
    location: "Dallas, TX",
    description: "Led computational chemistry research on toxin/pollutant adsorption prediction. Managed lab operations, mentored students, and published first-authored paper.",
    logo: "/unt-logo.svg"
  }
];

export const Timeline = () => {
  return (
    <section className="py-16 px-4 bg-background dark:bg-background" id="about">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-foreground">My Journey</h2>
        <div className="space-y-8">
          {timelineItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-4"
            >
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 bg-primary rounded-full" />
                <div className="w-0.5 h-full bg-border" />
              </div>
              <div className="flex-1 pb-8">
                <div className="bg-card dark:bg-card backdrop-blur-sm rounded-lg p-6 border border-border">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={item.logo} alt={`${item.company} logo`} />
                        <AvatarFallback>{item.company[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">{item.company}</h3>
                        <div className="text-primary font-medium">{item.title}</div>
                        <div className="text-sm text-muted-foreground">{item.division}</div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start md:items-end mt-2 md:mt-0">
                      <div className="text-sm text-primary font-medium">{item.year}</div>
                      <div className="text-sm text-muted-foreground">{item.location}</div>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};