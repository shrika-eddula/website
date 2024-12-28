import { Projects } from "@/components/Projects";
import { Navigation } from "@/components/Navigation";

const ProjectsPage = () => {
  return (
    <div className="bg-background dark:bg-background min-h-screen">
      <Navigation />
      <Projects />
    </div>
  );
};

export default ProjectsPage;