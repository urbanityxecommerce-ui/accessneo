
import { Search, History, MousePointer2, ListOrdered } from "lucide-react";

export function UtrGuide() {
  const steps = [
    {
      icon: <History className="w-5 h-5 text-primary" />,
      title: "History",
      desc: "Open your payment app (PhonePe, GPay, Paytm) and go to transaction history."
    },
    {
      icon: <MousePointer2 className="w-5 h-5 text-primary" />,
      title: "Select Transaction",
      desc: "Click on the ₹25 transaction you just made to Glitch Access."
    },
    {
      icon: <ListOrdered className="w-5 h-5 text-primary" />,
      title: "Find UTR",
      desc: "Look for the 12-digit number labeled UTR, UPI Ref No, or Transaction ID."
    }
  ];

  return (
    <section className="px-4 py-12 max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-2xl font-headline font-bold mb-2">How to find your UTR?</h2>
        <p className="text-muted-foreground">Follow these simple steps to locate your transaction ID.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {steps.map((step, i) => (
          <div key={i} className="p-6 rounded-xl bg-primary/5 border border-primary/10 relative group hover:border-primary/40 transition-colors">
            <div className="absolute top-4 right-4 text-primary/20 font-headline font-bold text-4xl group-hover:text-primary/40 transition-colors">
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
