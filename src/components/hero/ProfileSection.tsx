const lastUpdated = import.meta.env.VITE_LAST_UPDATED;

export const ProfileSection = () => (
  <div className="mt-8 text-base leading-relaxed lg:mt-16 lg:w-1/3">
    <div className="relative h-40 w-40 overflow-hidden rounded-full border border-border shadow-lg sm:h-44 sm:w-44">
      <img 
        src="/content/images/profile-slack.webp"
        alt="Shrika Eddula"
        width="512"
        height="512"
        decoding="async"
        className="h-full w-full object-cover"
      />
    </div>
    
    <div className="mt-6 space-y-2 text-left">
      <p>Currently: San Francisco, CA 📍</p>
      <p className="text-muted-foreground">Last updated: {lastUpdated}</p>
    </div>
  </div>
);
