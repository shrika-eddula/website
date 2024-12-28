import { Hero } from "@/components/Hero";
import { Timeline } from "@/components/Timeline";
import { Navigation } from "@/components/Navigation";

const Index = () => {
  return (
    <div className="bg-background dark:bg-background min-h-screen">
      <Navigation />
      <Hero />
      <Timeline />
    </div>
  );
};

export default Index;