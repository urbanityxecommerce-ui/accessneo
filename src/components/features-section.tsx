"use client";

import { Zap, ShieldAlert, Cpu, MessageSquareQuote } from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      icon: <Zap className="w-6 h-6 text-primary" />,
      title: "Private Tricks",
      desc: "Get access to hidden settings and mobile tricks that nobody else shares on the public internet."
    },
    {
      icon: <ShieldAlert className="w-6 h-6 text-secondary" />,
      title: "Restricted Methods",
      desc: "Exclusive private methods and pro tips designed for those who want to stay ahead of the game."
    },
    {
      icon: <Cpu className="w-6 h-6 text-primary" />,
      title: "VIP Content",
      desc: "Daily updates on secret app methods and private tricks for exclusive mobile access."
    },
    {
      icon: <MessageSquareQuote className="w-6 h-6 text-secondary" />,
      title: "Request Anything",
      desc: "Need a special trick or method? Our members can directly request specific content from the admins."
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-headline font-black mb-4 tracking-tight uppercase">
          WHAT <span className="text-primary">YOU UNLOCK</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto text-sm font-medium">
          Enter the restricted layer with your monthly pass. Everything is updated daily.
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
          "New restricted tricks added every day. If you want a specific method or trick, just send a request and we will find it for you."
        </p>
      </div>
    </section>
  );
}
