import { Instagram, Ghost, Shield } from "lucide-react";

export function Footer() {
  return (
    <footer className="px-4 py-12 border-t border-border mt-12 bg-card/30">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
            <Shield className="text-white w-6 h-6" />
          </div>
          <div>
            <span className="text-xl font-headline font-bold tracking-tight uppercase">GLITCH <span className="text-primary italic">SHADOW</span></span>
            <p className="text-xs text-muted-foreground tracking-widest uppercase font-medium font-mono">Node ID: 6205-6621-85</p>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-end gap-2">
          <p className="text-sm text-muted-foreground">Node Admin / Support:</p>
          <a 
            href="https://instagram.com/n_sider_neo" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-background border border-border hover:border-primary transition-all text-sm font-medium"
          >
            <Instagram className="w-4 h-4 text-pink-500" />
            @n_sider_neo
          </a>
        </div>
      </div>
      
      <div className="mt-12 text-center text-[10px] text-muted-foreground/30 font-mono uppercase tracking-[0.2em]">
        &copy; {new Date().getFullYear()} Private Node Access. All Protocols Restricted.
      </div>
    </footer>
  );
}
