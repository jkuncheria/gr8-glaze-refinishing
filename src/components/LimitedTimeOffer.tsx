import { X } from "lucide-react";
import { useState } from "react";

const LimitedTimeOffer = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-primary via-primary-glow to-primary text-primary-foreground py-3 px-4 relative animate-fade-in">
      <div className="container mx-auto flex items-center justify-center gap-4 text-center">
        <div className="flex-1 flex items-center justify-center gap-3 flex-wrap">
          <span className="font-bold text-sm md:text-base">🎉 LIMITED TIME OFFER:</span>
          <span className="text-sm md:text-base">
            Get 15% OFF on all bathtub refinishing services! Book before end of month.
          </span>
          <a 
            href="#contact" 
            className="bg-white text-primary hover:bg-white/90 px-4 py-1.5 rounded-full text-sm font-semibold transition-all hover:scale-105"
          >
            Claim Offer
          </a>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-1 hover:bg-white/20 rounded-full transition-colors"
          aria-label="Close banner"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default LimitedTimeOffer;
