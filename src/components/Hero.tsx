import { Bio } from "./hero/Bio";
import { ProfileSection } from "./hero/ProfileSection";
import { ActionButtons } from "./hero/ActionButtons";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center px-4 pt-20 pb-16 bg-background dark:bg-background overflow-hidden">
      <div className="relative z-10 mx-auto w-full max-w-4xl motion-safe:animate-fadeIn">
        <div className="flex flex-col items-start gap-8 lg:flex-row">
          <div className="flex-1 space-y-6 lg:mt-16">
            <h1 className="text-left text-5xl font-bold tracking-tight md:text-6xl">
              <span className="inline-block text-gray-600 dark:text-gray-200">
                hi, i’m shrika
              </span>
            </h1>
            
            <Bio />
            <ActionButtons />
          </div>

          <ProfileSection />
        </div>
      </div>
    </section>
  );
};
