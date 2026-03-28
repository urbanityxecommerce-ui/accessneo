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
    <div className="space-y-6">
      <div className="text-left">
        <h2 className="text-2xl font-headline font-bold mb-2">01. Pay ₹25 via UPI</h2>
        <p className="text-muted-foreground">Pay the monthly fee to this UPI ID to get your 12-digit UTR number for verification.</p>
      </div>

      <Card className="bg-card border-primary/20 overflow-hidden shadow-2xl">
        <CardContent className="p-6 space-y-4">
          <div className="flex items-center justify-between p-3 rounded-lg bg-background border border-border">
            <div className="space-y-1">
              <span className="text-[10px] text-muted-foreground font-bold tracking-widest uppercase">Payment Address (UPI ID)</span>
              <p className="font-mono font-medium text-primary text-sm sm:text-base truncate mr-2">{upiId}</p>
            </div>
            <Button variant="ghost" size="icon" onClick={copyUpi} className="hover:bg-primary/10 shrink-0">
              <Copy className="w-4 h-4 text-primary" />
            </Button>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-lg border border-dashed border-primary/30 text-sm">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <span className="text-primary font-bold">₹</span>
            </div>
            <p className="text-muted-foreground">Amount to Pay: <span className="text-foreground font-bold">₹25.00</span></p>
          </div>
        </CardContent>
      </Card>
      
      <p className="text-left text-xs text-muted-foreground italic">
        Keep your 12-digit UTR number ready after payment.
      </p>
    </div>
  );
}
