import { Timeline } from "@/components/Timeline";
import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Python", "Java", "TypeScript", "C++", "C", "R", "MATLAB"],
  },
  {
    title: "AIML",
    skills: ["PyTorch", "TensorFlow", "Keras", "Computer Vision", "NLP"],
  },
  {
    title: "Web Development",
    skills: ["React", "Node.js", "HTML", "CSS"],
  },
  {
    title: "Tools",
    skills: ["Git", "Linux", "AWS", "SageMaker", "Arduino", "Docker"],
  },
];

const honors = [
  "Y Combinator Startup Challenge 2nd Place",
  "Barry M. Goldwater Scholar",
  "International Science & Engineering Fair (ISEF) Finalist",
  "United States National Chemistry Olympiad Semifinalist",
  "ICDC (International DECA Finalist)",
  "$15K in research grants"
];

const Resume = () => {
  return (
    <div className="bg-background dark:bg-background min-h-screen">
      <Navigation />
      <div className="pt-24 px-4 md:px-8">
        <motion.div 
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-[1fr,400px] gap-8">
            {/* Experience Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Timeline />
            </motion.div>

            {/* Skills and Honors Column */}
            <div className="space-y-8 pt-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">Skills</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {skillCategories.map((category, index) => (
                        <motion.div 
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                          <h3 className="font-semibold text-sm text-primary mb-3">{category.title}</h3>
                          <div className="flex flex-wrap gap-2">
                            {category.skills.map((skill, skillIndex) => (
                              <Badge
                                key={skillIndex}
                                variant="secondary"
                                className="bg-accent/80 hover:bg-accent transition-colors duration-200 text-accent-foreground px-3 py-1"
                              >
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">Honors & Awards</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      {honors.map((honor, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className="flex items-start group"
                        >
                          <span className="text-primary mr-3 text-lg group-hover:scale-110 transition-transform duration-200">•</span>
                          <span className="text-foreground/90 group-hover:text-foreground transition-colors duration-200">{honor}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Resume;
