import { ShieldCheck, Terminal, Eye } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative pt-20 pb-16 px-4 flex flex-col items-center text-center overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium mb-6">
        <ShieldCheck className="w-3 h-3" />
        SECURE ACCESS ACTIVE
      </div>

      <h1 className="text-4xl md:text-6xl font-headline font-bold mb-6 tracking-tight glitch-text">
        Unlock <br />
        <span className="text-primary italic">Hidden Insights</span>
      </h1>
      
      <p className="max-w-xl text-muted-foreground text-lg mb-8">
        Get access to unconventional digital knowledge and exclusive deep-tech strategies for just <span className="text-foreground font-semibold">₹25/month</span>.
      </p>

      <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-muted-foreground">
        <div className="flex items-center gap-1.5">
          <Eye className="w-4 h-4 text-secondary" />
          <span>Exclusive Methods</span>
        </div>
        <div className="hidden sm:block w-1 h-1 rounded-full bg-border" />
        <div className="flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-secondary" />
          <span>Private Network</span>
        </div>
        <div className="hidden sm:block w-1 h-1 rounded-full bg-border" />
        <div className="flex items-center gap-1.5">
          <Terminal className="w-4 h-4 text-secondary" />
          <span>Deep Knowledge</span>
        </div>
      </div>
    </section>
  );
}
