"use client";

import { Zap, ShieldAlert, Cpu, MessageSquareQuote } from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      icon: <Zap className="w-6 h-6 text-primary" />,
      title: "Exclusive Bypasses",
      desc: "Get access to undocumented digital paths and restricted system bypasses that aren't available on the public web."
    },
    {
      icon: <ShieldAlert className="w-6 h-6 text-secondary" />,
      title: "Shadow Protocols",
      desc: "Private grey-hat strategies and deep-tech insights designed for those who operate in the hidden layers."
    },
    {
      icon: <Cpu className="w-6 h-6 text-primary" />,
      title: "Undocumented Logic",
      desc: "Daily updates on system vulnerabilities and private handshake protocols for elite network access."
    },
    {
      icon: <MessageSquareQuote className="w-6 h-6 text-secondary" />,
      title: "On-Demand Requests",
      desc: "Need a specific trick, content, or a custom bypass? Protocol members can request specific solutions directly from the admins."
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-headline font-black mb-4 tracking-tight uppercase">
          PROTOCOL <span className="text-primary">BENEFITS</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto text-sm font-medium">
          Unlock the full potential of the shadow network with these exclusive features.
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
          [ SYSTEM NOTE ]
        </p>
        <p className="text-xs text-muted-foreground mt-2 italic">
          "The protocol is dynamic. If you need a specific trick or content not currently listed, our admin node accepts custom requests from all active subscribers."
        </p>
      </div>
    </section>
  );
}
