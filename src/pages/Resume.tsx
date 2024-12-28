import { Timeline } from "@/components/Timeline";
import { Navigation } from "@/components/Navigation";
import { ThemeToggle } from "@/components/ThemeToggle";

const Resume = () => {
  return (
    <div className="bg-background dark:bg-background min-h-screen">
      <Navigation />
      <div className="fixed top-20 right-4 z-40 scale-125">
        <ThemeToggle />
      </div>
      <div className="pt-24">
        <Timeline />
      </div>
    </div>
  );
};

export default Resume;