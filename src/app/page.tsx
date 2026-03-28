import { HeroSection } from "@/components/hero-section";
import { PaymentSection } from "@/components/payment-section";
import { VerificationForm } from "@/components/verification-form";
import { FeaturesSection } from "@/components/features-section";
import { UtrGuide } from "@/components/utr-guide";
import { Footer } from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";

export default function Home() {
  return (
    <main className="min-h-screen relative cyber-grid">
      <div className="fixed inset-0 bg-background/50 backdrop-blur-[2px] -z-10" />
      
      <HeroSection />
      
      <div className="max-w-6xl mx-auto px-4 pb-20">
        {/* ACTION BLOCK: PAYMENT & VERIFICATION FIRST */}
        <div className="glass-card rounded-[2rem] p-6 md:p-10 mb-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
            <span className="font-mono text-[120px] leading-none font-black">25</span>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start relative z-10">
            <PaymentSection />
            <div className="hidden lg:block w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent absolute left-1/2 -translate-x-1/2" />
            <VerificationForm />
          </div>
        </div>

        {/* INFO BLOCKS: FEATURES & GUIDE SECOND */}
        <FeaturesSection />
        
        <UtrGuide />
      </div>

      <Footer />
      <Toaster />
    </main>
  );
}
