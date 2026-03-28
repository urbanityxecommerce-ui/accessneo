"use client";

import { Copy, CreditCard, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export function PaymentSection() {
  const { toast } = useToast();
  const upiId = "6205662185@mbk";

  const copyUpi = () => {
    navigator.clipboard.writeText(upiId);
    toast({
      description: "UPI Address copied successfully",
    });
  };

  return (
    <div className="space-y-8">
      <div className="text-left">
        <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 border border-primary/20">
          <CreditCard className="w-6 h-6 text-primary" />
        </div>
        <h2 className="text-3xl font-headline font-black mb-3 tracking-tight uppercase">
          STEP 01: <span className="text-primary">PAYMENT</span>
        </h2>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Pay <span className="text-foreground font-bold underline decoration-primary">₹25 Monthly</span> for full access to Grey Hat Tricks, Private Ebooks, and Restricted Methods.
        </p>
      </div>

      <div className="space-y-4">
        <div className="group relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
          <div className="relative flex items-center justify-between p-5 rounded-2xl bg-background/80 border border-white/5 backdrop-blur-md">
            <div className="space-y-1.5">
              <span className="text-[9px] text-primary font-black tracking-[0.3em] uppercase">PAY TO THIS UPI</span>
              <p className="font-mono font-bold text-lg text-foreground tracking-tight">{upiId}</p>
            </div>
            <Button variant="secondary" size="icon" onClick={copyUpi} className="h-12 w-12 rounded-xl shadow-lg border border-white/10 hover:border-primary/50 transition-all">
              <Copy className="w-5 h-5" />
            </Button>
          </div>
        </div>

        <div className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/5 text-sm">
          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0 border border-primary/30">
            <span className="text-primary font-black text-lg">₹</span>
          </div>
          <div>
            <p className="text-[10px] text-muted-foreground font-bold tracking-widest uppercase mb-0.5">MONTHLY ACCESS</p>
            <p className="text-xl font-headline font-black text-foreground">₹25.00 / Month</p>
          </div>
        </div>
      </div>
      
      <div className="flex items-start gap-3 p-4 rounded-xl bg-secondary/5 border border-secondary/10">
        <div className="mt-1">
          <ChevronRight className="w-4 h-4 text-secondary" />
        </div>
        <p className="text-xs text-muted-foreground italic leading-relaxed">
          After payment, copy the <span className="text-foreground font-bold underline decoration-primary/50">12-Digit UTR / Transaction ID</span> from your app's history.
        </p>
      </div>
    </div>
  );
}
