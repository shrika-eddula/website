import { motion } from "framer-motion";

const timelineItems = [
  {
    year: "2024",
    title: "ML Software Engineering Intern",
    company: "Apple | Vision Products Group",
    location: "Seattle, WA",
    description: "Prototyped Human Computer Interfaces for the R&D wing, leveraging AI and augmented reality to develop revolutionary experiences blending digital content with physical space. Developed an entirely new application paradigm requiring rapid experimentation and prototyping.",
  },
  {
    year: "2023-2024",
    title: "Undergraduate Researcher",
    company: "MIT Media Lab | Camera Culture Group",
    location: "Boston, MA",
    description: "Reconstructed 3D models from satellite imagery using Neural Radiance Fields (NeRF). Developed Eulerian Video Magnification + Senior Fusion approach for forest fire prediction.",
  },
  {
    year: "2023",
    title: "Machine Learning Intern",
    company: "United States Army",
    location: "Natik, MA",
    description: "Designed autonomous drone device for battlefield consciousness assessment using Glasgow Coma Scale. Implemented tinyML algorithms with pose detection, computer vision, and NLP for real-time processing on Nvidia Jetson Nano.",
  },
  {
    year: "2022",
    title: "Software Engineering Intern",
    company: "Sectra Inc | Medical Imaging IT Cybersecurity",
    location: "Shelton, CT",
    description: "Developed real-time server monitoring across global hospital networks and led patient data migration to SecureLink platform. Built automated solution for helpdesk ticket backlogs.",
  },
  {
    year: "2021-2022",
    title: "Software Engineering Intern",
    company: "avoMD | HealthTech Startup",
    location: "Brooklyn, NY",
    description: "Developed LLM pipeline for document automation and medical decision-making. Engineered analytics dashboards via Mixpanel and implemented user onboarding through Google Scripts.",
  },
  {
    year: "2019-2022",
    title: "Undergraduate Researcher & Lab Manager",
    company: "University of North Texas",
    location: "Dallas, TX",
    description: "Led computational chemistry research on toxin/pollutant adsorption prediction. Managed lab operations, mentored students, and published first-authored paper.",
  },
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
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                      <div className="text-primary font-medium">{item.company}</div>
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