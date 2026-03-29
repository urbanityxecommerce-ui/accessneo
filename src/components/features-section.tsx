"use client";

import { Zap, ShieldAlert, Cpu, MessageSquareQuote, Book, Globe, Star, Sparkles, MessageCircle } from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      icon: <Star className="w-6 h-6 text-primary" />,
      title: "Secret Tricks",
      desc: "Get special tricks and methods that you won't find anywhere else. Updated regularly."
    },
    {
      icon: <Sparkles className="w-6 h-6 text-secondary" />,
      title: "New Daily Updates",
      desc: "We post new content and private guides every day to keep you ahead of everyone."
    },
    {
      icon: <Book className="w-6 h-6 text-primary" />,
      title: "Earning Methods",
      desc: "Access our collection of private guides on how to make money online with secret tricks."
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-secondary" />,
      title: "On-Demand Requests",
      desc: "Want a specific trick or method? Just ask us, and we will find it for you."
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-headline font-black mb-4 tracking-tight uppercase">
          WHAT <span className="text-primary">YOU GET</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto text-sm font-medium">
          Join the private layer. Get access to content that is never shared with the public.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, i) => (
          <div 
            key={i} 
            className="glass-card p-8 rounded-3xl border border-white/5 hover:border-primary/30 transition-all duration-300 group"
          >
            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              {feature.icon}
            </div>
            <h3 className="text-lg font-headline font-bold mb-3 tracking-tight uppercase text-foreground">
              {feature.title}
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed font-medium">
              {feature.desc}
            </p>
          </div>
        ))}
      </div>
      
      <div className="mt-12 p-6 rounded-2xl bg-primary/5 border border-dashed border-primary/20 text-center max-w-2xl mx-auto">
        <p className="text-sm font-bold tracking-wide text-primary uppercase">
          [ ACCESS GRANTED ]
        </p>
        <p className="text-xs text-muted-foreground mt-2 italic">
          "New secret tricks added daily. If you want a specific method, send a request and we will get it."
        </p>
      </div>
    </section>
  );
}
