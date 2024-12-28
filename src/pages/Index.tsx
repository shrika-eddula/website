import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Timeline } from "@/components/Timeline";
import { Navigation } from "@/components/Navigation";

const Index = () => {
  return (
    <div className="bg-gray-50">
      <Navigation />
      <Hero />
      <Projects />
      <Timeline />
    </div>
  );
};

export default Index;