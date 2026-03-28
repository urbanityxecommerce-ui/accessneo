"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { ShieldCheck, Loader2, Key, ExternalLink } from "lucide-react";
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
  username: z.string().min(3, "Alias must be at least 3 characters").startsWith("@", "Handle must start with @"),
  utr: z.string().length(12, "Token must be exactly 12 digits").regex(/^\d+$/, "Token must only contain numbers"),
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
      const message = `🌑 *New Dark Access Request*\n\n👤 *Alias:* ${values.username}\n🔑 *Token:* \`${values.utr}\`\n💸 *Fee:* ₹25\n\n_System pending manual clearance._`;

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
      alert("Clearance failed. Retry or contact via Instagram handle.");
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
              <ShieldCheck className="w-12 h-12 text-primary" />
            </div>
            <h2 className="text-3xl font-headline font-bold mb-4">GRANTED</h2>
            <p className="text-muted-foreground mb-8">
              Your credentials have been logged. You now have clearance to join the encrypted channel.
            </p>
            <Button asChild size="lg" className="w-full font-bold h-14 text-lg shadow-lg shadow-primary/25">
              <a href="https://t.me/+Fr2fbLG7n4YxNDE5" target="_blank" rel="noopener noreferrer">
                ACCESS CHANNEL <ExternalLink className="ml-2 w-5 h-5" />
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
            <Key className="w-5 h-5 text-primary" />
            Step 2: Submit Token
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
                    <FormLabel>Telegram Alias</FormLabel>
                    <FormControl>
                      <Input placeholder="@your_alias" {...field} className="bg-background/50" />
                    </FormControl>
                    <FormDescription>The handle to be whitelisted.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="utr"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>12-Digit Verification Token</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter 12 digits" maxLength={12} {...field} className="bg-background/50" />
                    </FormControl>
                    <FormDescription>Your UTR from the transaction history.</FormDescription>
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
                    AUTHORIZING...
                  </>
                ) : (
                  "Request Clearance"
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
