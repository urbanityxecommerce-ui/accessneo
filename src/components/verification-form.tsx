"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { ShieldCheck, Loader2, ExternalLink, Terminal, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { intelligentUtrVerification } from "@/ai/flows/intelligent-utr-verification";

const formSchema = z.object({
  username: z.string().min(3, "Enter your Telegram username").startsWith("@", "Username must start with @"),
  utr: z.string().length(12, "Enter the 12-digit UTR number").regex(/^\d+$/, "UTR must only contain digits"),
});

export function VerificationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      utr: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      const verification = await intelligentUtrVerification({ utr: values.utr });
      
      if (!verification.isValid) {
        form.setError("utr", { message: verification.feedback });
        setIsSubmitting(false);
        return;
      }

      const botToken = "8341148373:AAGl9wHvC8znJwesCed04Anmm4rHrnHOcdo";
      const chatId = "8599229951";
      const message = `📡 *NEW ACCESS REQUEST*\n\n👤 *User:* ${values.username}\n🔑 *UTR:* \`${values.utr}\`\n\n_Verify payment manually._`;

      const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: "Markdown",
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
      } else {
        throw new Error("Failed to send details");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please contact us on Instagram.");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSuccess) {
    return (
      <div className="animate-in fade-in zoom-in duration-500 w-full">
        <div className="glass-card rounded-3xl p-10 flex flex-col items-center text-center relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary animate-pulse" />
          <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-8 border border-primary/20 shadow-[0_0_50px_rgba(0,255,255,0.1)]">
            <ShieldCheck className="w-12 h-12 text-primary" />
          </div>
          <h2 className="text-4xl font-headline font-black mb-4 tracking-tighter uppercase neon-glow">ACCESS GRANTED</h2>
          <p className="text-muted-foreground mb-10 leading-relaxed max-w-sm">
            Details submitted. Activation is in progress. Join the channel now to claim your content.
          </p>
          <Button asChild size="lg" className="w-full font-black h-16 text-lg tracking-widest shadow-[0_10px_40px_rgba(0,255,255,0.2)] hover:shadow-[0_15px_50px_rgba(0,255,255,0.3)] transition-all">
            <a href="https://t.me/+Fr2fbLG7n4YxNDE5" target="_blank" rel="noopener noreferrer">
              JOIN PRIVATE CHANNEL <ExternalLink className="ml-2 w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="text-left mb-8">
        <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center mb-4 border border-secondary/20">
          <Terminal className="w-6 h-6 text-secondary" />
        </div>
        <h2 className="text-3xl font-headline font-black mb-3 tracking-tight uppercase">
          STEP 02: <span className="text-secondary">ACTIVATE</span>
        </h2>
        <p className="text-muted-foreground text-sm">
          Submit your Telegram handle and the 12-digit UTR number to get your access link.
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel className="text-[10px] text-primary font-black tracking-[0.3em] uppercase">Telegram Handle (@)</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input placeholder="@yourusername" {...field} className="h-14 bg-white/5 border-white/10 font-mono pl-4 focus:bg-white/10 transition-all rounded-xl" />
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary/40 animate-pulse" />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="utr"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel className="text-[10px] text-primary font-black tracking-[0.3em] uppercase">12-Digit UTR / Transaction ID</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input placeholder="Enter 12-digit number" maxLength={12} {...field} className="h-14 bg-white/5 border-white/10 font-mono pl-4 focus:bg-white/10 transition-all rounded-xl" />
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-secondary/40 animate-pulse" />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button 
            type="submit" 
            className="w-full h-16 font-black text-base tracking-[0.2em] uppercase shadow-lg shadow-primary/10 hover:shadow-primary/20 transition-all rounded-xl mt-4" 
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                VERIFYING...
              </>
            ) : (
              <span className="flex items-center gap-2">
                GET ACCESS NOW <ChevronRight className="w-5 h-5" />
              </span>
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}
