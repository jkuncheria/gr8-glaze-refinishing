const AnnouncementBanner = () => {
  return (
    <a
      href="https://www.atlantanewsfirst.com/2025/01/23/transform-your-kitchen-or-bathroom-with-surface-pro-refinishing/"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center gap-2 mb-1 animate-fade-in hover:opacity-80 transition-opacity cursor-pointer"
    >
      <span className="text-sm md:text-base font-semibold text-background/90 uppercase tracking-wide">
        Featured in
      </span>
      <img 
        src="/anf.png" 
        alt="Atlanta News First" 
        className="h-5 md:h-6 object-contain"
      />
    </a>
  );
};

export default AnnouncementBanner;

