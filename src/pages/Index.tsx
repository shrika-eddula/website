import { Hero } from "@/components/Hero";
import { Timeline } from "@/components/Timeline";
import { Navigation } from "@/components/Navigation";
import { ThemeToggle } from "@/components/ThemeToggle";

const Index = () => {
  return (
    <div className="bg-background dark:bg-background min-h-screen">
      <Navigation />
      <div className="fixed top-20 right-6 z-40 scale-115">
        <ThemeToggle />
      </div>
      <Hero />
      <Timeline />
    </div>
  );
};

export default Index;