import { Timeline } from "@/components/Timeline";
import { Navigation } from "@/components/Navigation";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Python", "JavaScript", "TypeScript", "C++", "C", "R", "MATLAB"],
  },
  {
    title: "AI & Machine Learning",
    skills: ["PyTorch", "TensorFlow", "Keras", "Computer Vision", "NLP", "Machine Learning"],
  },
  {
    title: "Web Development",
    skills: ["React", "Node.js", "HTML", "CSS"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "Linux", "AWS", "SageMaker", "Arduino", "Docker"],
  },
];

const honors = [
  "Y Combinator Startup Challenge 2nd Place",
  "Barry M. Goldwater Scholar",
  "International Science & Engineering Fair (ISEF) Finalist",
  "United States National Chemistry Olympiad Semifinalist",
  "$15K in research grants",
  "ICDC (International DECA Finalist)",
];

const Resume = () => {
  return (
    <div className="bg-background dark:bg-background min-h-screen">
      <Navigation />
      <div className="fixed top-20 right-4 z-40 scale-125">
        <ThemeToggle />
      </div>
      <div className="pt-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">Skills</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {skillCategories.map((category, index) => (
                      <div key={index}>
                        <h3 className="font-semibold text-sm text-primary mb-2">{category.title}</h3>
                        <div className="flex flex-wrap gap-2">
                          {category.skills.map((skill, skillIndex) => (
                            <Badge
                              key={skillIndex}
                              variant="secondary"
                              className="bg-accent text-accent-foreground"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">Honors & Awards</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    {honors.map((honor, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="flex items-start"
                      >
                        <span className="text-primary mr-2">•</span>
                        <span>{honor}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <div className="md:col-span-2">
            <Timeline />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
