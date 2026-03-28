import { Instagram, ShieldAlert } from "lucide-react";

export function Footer() {
  return (
    <footer className="px-4 py-16 border-t border-white/5 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(0,255,255,0.2)] border border-white/10">
            <ShieldAlert className="text-background w-8 h-8" />
          </div>
          <div>
            <span className="text-2xl font-headline font-black tracking-tight uppercase leading-none">SHADOW <span className="text-primary italic">NODE</span></span>
            <p className="text-[10px] text-muted-foreground tracking-[0.4em] uppercase font-bold mt-1">Status: <span className="text-primary">ONLINE</span></p>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-end gap-3">
          <p className="text-[10px] text-muted-foreground font-black tracking-widest uppercase">Contact Admin</p>
          <a 
            href="https://instagram.com/n_sider_neo_" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all text-sm font-bold group shadow-lg"
          >
            <Instagram className="w-5 h-5 text-pink-500 group-hover:scale-110 transition-transform" />
            @n_sider_neo_
          </a>
        </div>
      </div>
      
      <div className="mt-16 text-center text-[10px] text-muted-foreground/30 font-mono uppercase tracking-[0.5em]">
        &copy; {new Date().getFullYear()} SHADOW NODE. ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
}
