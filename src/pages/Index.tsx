import { Hero } from "@/components/Hero";
import { ThemeToggle } from "@/components/ThemeToggle";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="fixed top-4 right-4 z-40 scale-125">
        <ThemeToggle />
      </div>
      <Hero />
    </div>
  );
};

export default Index;
