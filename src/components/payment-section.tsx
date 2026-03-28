
"use client";

import { Copy, Check, QrCode } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function PaymentSection() {
  const { toast } = useToast();
  const upiId = "6205662185@mbk";
  const qrImage = PlaceHolderImages.find(img => img.id === "upi-qr-placeholder");

  const copyUpi = () => {
    navigator.clipboard.writeText(upiId);
    toast({
      description: "UPI ID copied to clipboard",
    });
  };

  return (
    <section className="px-4 py-12 max-w-4xl mx-auto">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-headline font-bold mb-2">Step 1: Make Payment</h2>
            <p className="text-muted-foreground">Scan the QR or use the UPI ID below to pay ₹25.</p>
          </div>

          <Card className="bg-card border-primary/20 overflow-hidden">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center justify-between p-3 rounded-lg bg-background border border-border">
                <div className="space-y-1">
                  <span className="text-[10px] text-muted-foreground font-bold tracking-widest uppercase">UPI ID</span>
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
                <p className="text-muted-foreground">Amount to pay: <span className="text-foreground font-bold">₹25.00</span></p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-center">
          <div className="relative p-6 bg-white rounded-2xl shadow-[0_0_40px_rgba(13,124,242,0.2)]">
            <div className="absolute inset-0 border-2 border-primary/20 rounded-2xl -m-1 pointer-events-none" />
            {qrImage && (
              <Image 
                src={qrImage.imageUrl} 
                alt="UPI QR Code" 
                width={200} 
                height={200}
                className="rounded-lg"
                data-ai-hint="qr code"
              />
            )}
            <div className="mt-4 flex flex-col items-center gap-2">
               <div className="flex items-center gap-2 px-3 py-1 bg-primary text-white rounded-full text-xs font-bold">
                 <QrCode className="w-3 h-3" />
                 SCAN TO PAY
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
