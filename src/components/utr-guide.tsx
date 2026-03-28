import { History, MousePointer2, Lock } from "lucide-react";

export function UtrGuide() {
  const steps = [
    {
      icon: <History className="w-5 h-5 text-primary" />,
      title: "Activity Log",
      desc: "Check your transaction history for the ₹25 activation record."
    },
    {
      icon: <MousePointer2 className="w-5 h-5 text-primary" />,
      title: "Details",
      desc: "Select the record to view the advanced transaction properties."
    },
    {
      icon: <Lock className="w-5 h-5 text-primary" />,
      title: "Extract Key",
      desc: "Copy the 12-digit numeric key (UTR) required for node authentication."
    }
  ];

  return (
    <section className="px-4 py-12 max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-2xl font-headline font-bold mb-2">Activation Guide</h2>
        <p className="text-muted-foreground">Follow these steps to synchronize your account with the network.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {steps.map((step, i) => (
          <div key={i} className="p-6 rounded-xl bg-primary/5 border border-primary/10 relative group hover:border-primary/40 transition-all duration-300">
            <div className="absolute top-4 right-4 text-primary/10 font-headline font-bold text-4xl group-hover:text-primary/20 transition-colors">
              0{i + 1}
            </div>
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              {step.icon}
            </div>
            <h3 className="font-bold mb-2">{step.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
