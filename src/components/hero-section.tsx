import { ShieldAlert, Terminal, EyeOff } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative pt-20 pb-16 px-4 flex flex-col items-center text-center overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium mb-6">
        <Terminal className="w-3 h-3" />
        SECURE PROTOCOL ACTIVE
      </div>

      <h1 className="text-4xl md:text-6xl font-headline font-bold mb-6 tracking-tight glitch-text">
        See the <br />
        <span className="text-primary italic">Hidden Layers</span>
      </h1>
      
      <p className="max-w-xl text-muted-foreground text-lg mb-8">
        Unlock access to the unconventional digital landscape for <span className="text-foreground font-semibold">₹25/month</span>. Master the architecture that stays invisible to the surface world.
      </p>

      <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-muted-foreground">
        <div className="flex items-center gap-1.5">
          <EyeOff className="w-4 h-4 text-secondary" />
          <span>Non-Public Insights</span>
        </div>
        <div className="hidden sm:block w-1 h-1 rounded-full bg-border" />
        <div className="flex items-center gap-1.5">
          <ShieldAlert className="w-4 h-4 text-secondary" />
          <span>Exclusive Protocols</span>
        </div>
        <div className="hidden sm:block w-1 h-1 rounded-full bg-border" />
        <div className="flex items-center gap-1.5">
          <Terminal className="w-4 h-4 text-secondary" />
          <span>Advanced Logic</span>
        </div>
      </div>
    </section>
  );
}
