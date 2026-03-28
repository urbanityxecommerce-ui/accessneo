"use client";

import { Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

export function PaymentSection() {
  const { toast } = useToast();
  const upiId = "6205662185@mbk";

  const copyUpi = () => {
    navigator.clipboard.writeText(upiId);
    toast({
      description: "UPI ID copied to clipboard",
    });
  };

  return (
    <section className="px-4 py-12 max-w-4xl mx-auto">
      <div className="max-w-xl mx-auto space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-headline font-bold mb-2">Step 1: Secure Membership</h2>
          <p className="text-muted-foreground">Process your monthly subscription of ₹25 via UPI.</p>
        </div>

        <Card className="bg-card border-primary/20 overflow-hidden">
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center justify-between p-3 rounded-lg bg-background border border-border">
              <div className="space-y-1">
                <span className="text-[10px] text-muted-foreground font-bold tracking-widest uppercase">Payment Address</span>
                <p className="font-mono font-medium text-primary">{upiId}</p>
              </div>
              <Button variant="ghost" size="icon" onClick={copyUpi} className="hover:bg-primary/10">
                <Copy className="w-4 h-4 text-primary" />
              </Button>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-lg border border-dashed border-primary/30 text-sm">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <span className="text-primary font-bold">₹</span>
              </div>
              <p className="text-muted-foreground">Subscription Fee: <span className="text-foreground font-bold">₹25.00</span></p>
            </div>
          </CardContent>
        </Card>
        
        <p className="text-center text-xs text-muted-foreground">
          Use any standard UPI application for a secure transaction.
        </p>
      </div>
    </section>
  );
}
