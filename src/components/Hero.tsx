import { motion } from "framer-motion";
import { BackgroundEffects } from "./hero/BackgroundEffects";
import { Bio } from "./hero/Bio";
import { ProfileSection } from "./hero/ProfileSection";
import { ActionButtons } from "./hero/ActionButtons";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center px-4 pt-32 pb-16 bg-background dark:bg-background overflow-hidden">
      <BackgroundEffects />

      <div className="relative max-w-4xl mx-auto z-10 w-full">
        <div className="flex flex-col lg:flex-row gap-8 items-start lg:items-center">
          <div className="flex-1 space-y-6 lg:mt-16">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold tracking-tight text-left"
            >
              <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400">
                Shrika Eddula
              </span>
            </motion.h1>
            
            <Bio />
            <ActionButtons />
          </div>

          <ProfileSection />
        </div>
      </div>
    </section>
  );
};