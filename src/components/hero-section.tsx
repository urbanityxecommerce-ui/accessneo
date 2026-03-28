import { ShieldAlert, Terminal, Activity, Lock } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative pt-24 pb-16 px-4 flex flex-col items-center text-center overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold tracking-[0.2em] mb-8 animate-pulse">
        <Activity className="w-3 h-3" />
        ENCRYPTED SESSION ACTIVE
      </div>

      <h1 className="text-5xl md:text-8xl font-headline font-black mb-6 tracking-tighter uppercase leading-none">
        SHADOW <br />
        <span className="text-primary neon-glow italic">PROTOCOL</span>
      </h1>
      
      <p className="max-w-2xl text-muted-foreground text-base md:text-lg mb-10 leading-relaxed font-medium">
        Access undocumented digital architecture and private network handshake protocols. 
        <span className="block mt-2 text-foreground font-black">
          ₹25 Monthly Access Fee <span className="text-primary">•</span> Private Channel Unlock
        </span>
      </p>

      <div className="flex flex-wrap justify-center items-center gap-8 text-[11px] text-muted-foreground font-bold tracking-widest uppercase">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-primary" />
          <span>Hidden Logic</span>
        </div>
        <div className="flex items-center gap-2">
          <ShieldAlert className="w-4 h-4 text-secondary" />
          <span>Private Access</span>
        </div>
        <div className="flex items-center gap-2">
          <Lock className="w-4 h-4 text-primary" />
          <span>Advanced Layer</span>
        </div>
      </div>
    </section>
  );
}
