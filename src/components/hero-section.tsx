import { ShieldAlert, Terminal, Activity, Lock, BookOpen, Star } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative pt-24 pb-12 px-4 flex flex-col items-center text-center overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold tracking-[0.2em] mb-8 animate-pulse">
        <Activity className="w-3 h-3" />
        SECURE VIP CONNECTION
      </div>

      <h1 className="text-5xl md:text-8xl font-headline font-black mb-6 tracking-tighter uppercase leading-none">
        SHADOW <br />
        <span className="text-primary neon-glow italic">NODE</span>
      </h1>
      
      <p className="max-w-2xl text-muted-foreground text-base md:text-lg mb-10 leading-relaxed font-medium">
        Access <span className="text-foreground font-bold">Secret VIP Tricks</span>, Private Earning Methods, and Hidden System Guides.
        <span className="block mt-4 text-foreground font-black text-xl">
          ₹25 Monthly Entry <span className="text-primary">•</span> VIP Secret Layer
        </span>
      </p>

      <div className="flex flex-wrap justify-center items-center gap-8 text-[11px] text-muted-foreground font-bold tracking-widest uppercase">
        <div className="flex items-center gap-2">
          <Star className="w-4 h-4 text-primary" />
          <span>Secret Tricks</span>
        </div>
        <div className="flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-secondary" />
          <span>Private Guides</span>
        </div>
        <div className="flex items-center gap-2">
          <Lock className="w-4 h-4 text-primary" />
          <span>Hidden Access</span>
        </div>
      </div>
    </section>
  );
}
