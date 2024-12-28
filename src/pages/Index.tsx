import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Timeline } from "@/components/Timeline";

const Index = () => {
  return (
    <div className="bg-white">
      <Hero />
      <Projects />
      <Timeline />
    </div>
  );
};

export default Index;