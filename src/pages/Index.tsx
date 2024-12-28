import { Hero } from "@/components/Hero";
import { Navigation } from "@/components/Navigation";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Doodles } from "@/components/Doodles";

const Index = () => {
  return (
    <div className="bg-background/50 dark:bg-background/50 min-h-screen relative">
      <Navigation />
      <div className="fixed top-20 right-4 z-40 scale-125">
        <ThemeToggle />
      </div>
      <Doodles />
      <Hero />
    </div>
  );
};

export default Index;