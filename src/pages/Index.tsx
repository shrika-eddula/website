import { Hero } from "@/components/Hero";
import { Navigation } from "@/components/Navigation";
import { ThemeToggle } from "@/components/ThemeToggle";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <Navigation />
      <div className="fixed top-20 right-4 z-40 scale-125">
        <ThemeToggle />
      </div>
      <Hero />
    </div>
  );
};

export default Index;