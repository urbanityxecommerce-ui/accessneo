
import { Instagram, Send } from "lucide-react";

export function Footer() {
  return (
    <footer className="px-4 py-12 border-t border-border mt-12 bg-card/30">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
            <Send className="text-white w-6 h-6 rotate-12" />
          </div>
          <div>
            <span className="text-xl font-headline font-bold tracking-tight">GLITCH <span className="text-primary">ACCESS</span></span>
            <p className="text-xs text-muted-foreground tracking-widest uppercase font-medium">Premium VIP Earning</p>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-end gap-2">
          <p className="text-sm text-muted-foreground">If you face issues, DM on Instagram:</p>
          <a 
            href="https://instagram.com/n_sider_neo" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-background border border-border hover:border-primary transition-colors text-sm font-medium"
          >
            <Instagram className="w-4 h-4 text-pink-500" />
            @n_sider_neo
          </a>
        </div>
      </div>
      
      <div className="mt-12 text-center text-xs text-muted-foreground/40">
        &copy; {new Date().getFullYear()} Glitch Access Community. All rights reserved. Professional Use Only.
      </div>
    </footer>
  );
}
