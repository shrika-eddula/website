import { Hero } from "@/components/Hero";
import { Navigation } from "@/components/Navigation";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Background } from "@/components/Background";

const Index = () => {
  return (
    <div className="min-h-screen relative bg-gradient-to-b from-background/50 to-background/80 backdrop-blur-sm">
      <Background />
      <Navigation />
      <div className="fixed top-20 right-4 z-40 scale-125">
        <ThemeToggle />
      </div>
      <Hero />
    </div>
  );
};

export default Index;