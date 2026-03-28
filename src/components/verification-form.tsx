
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { CheckCircle2, Loader2, Send, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { intelligentUtrVerification } from "@/ai/flows/intelligent-utr-verification";

const formSchema = z.object({
  username: z.string().min(3, "Telegram username must be at least 3 characters").startsWith("@", "Username must start with @"),
  utr: z.string().length(12, "UTR must be exactly 12 digits").regex(/^\d+$/, "UTR must only contain numbers"),
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
      // Step 1: AI Verification of format
      const verification = await intelligentUtrVerification({ utr: values.utr });
      
      if (!verification.isValid) {
        form.setError("utr", { message: verification.feedback });
        setIsSubmitting(false);
        return;
      }

      // Step 2: Send to Telegram Bot
      // Bot Token: 8341148373:AAGl9wHvC8znJwesCed04Anmm4rHrnHOcdo
      // My ID: 8599229951
      const botToken = "8341148373:AAGl9wHvC8znJwesCed04Anmm4rHrnHOcdo";
      const chatId = "8599229951";
      const message = `🚨 *New Glitch Access Request*\n\n👤 *Username:* ${values.username}\n🔢 *UTR:* \`${values.utr}\`\n💰 *Amount:* ₹25\n\n_Please verify payment manually._`;

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
        throw new Error("Failed to send verification");
      }
    } catch (error) {
      console.error(error);
      alert("Submission failed. Please try again or DM on Instagram.");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSuccess) {
    return (
      <div className="max-w-md mx-auto py-12 px-4 animate-in fade-in zoom-in duration-500">
        <Card className="bg-card border-primary shadow-[0_0_30px_rgba(13,124,242,0.15)] text-center overflow-hidden">
          <div className="h-2 bg-primary w-full" />
          <CardContent className="p-10 flex flex-col items-center">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6">
              <CheckCircle2 className="w-12 h-12 text-primary" />
            </div>
            <h2 className="text-3xl font-headline font-bold mb-4">VERIFIED</h2>
            <p className="text-muted-foreground mb-8">
              Your transaction has been submitted for verification. You can now join the private channel.
            </p>
            <Button asChild size="lg" className="w-full font-bold h-14 text-lg shadow-lg shadow-primary/25">
              <a href="https://t.me/+Fr2fbLG7n4YxNDE5" target="_blank" rel="noopener noreferrer">
                CLICK HERE TO JOIN <ExternalLink className="ml-2 w-5 h-5" />
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto py-12 px-4">
      <Card className="bg-card border-primary/20 shadow-xl overflow-hidden">
        <CardHeader className="bg-primary/5 border-b border-primary/10">
          <CardTitle className="text-xl font-headline font-bold flex items-center gap-2">
            <Send className="w-5 h-5 text-primary" />
            Step 2: Submit Details
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Telegram Username</FormLabel>
                    <FormControl>
                      <Input placeholder="@your_username" {...field} className="bg-background/50" />
                    </FormControl>
                    <FormDescription>Username where you want to receive access.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="utr"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>12-Digit UTR / Transaction ID</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter 12 digits" maxLength={12} {...field} className="bg-background/50" />
                    </FormControl>
                    <FormDescription>Found in your payment app transaction history.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button 
                type="submit" 
                className="w-full h-12 font-bold text-base" 
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    VERIFYING...
                  </>
                ) : (
                  "Verify & Join Access"
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
