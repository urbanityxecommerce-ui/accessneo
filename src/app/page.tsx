import { HeroSection } from "@/components/hero-section";
import { PaymentSection } from "@/components/payment-section";
import { VerificationForm } from "@/components/verification-form";
import { UtrGuide } from "@/components/utr-guide";
import { Footer } from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";

export default function Home() {
  return (
    <main className="min-h-screen relative cyber-grid">
      <div className="fixed inset-0 bg-background/50 backdrop-blur-[2px] -z-10" />
      
      <HeroSection />
      
      <div className="max-w-6xl mx-auto px-4 pb-20">
        <div className="glass-card rounded-[2rem] p-6 md:p-10 mb-12">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            <PaymentSection />
            <div className="hidden lg:block w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent absolute left-1/2 -translate-x-1/2" />
            <VerificationForm />
          </div>
        </div>
        
        <UtrGuide />
      </div>

      <Footer />
      <Toaster />
    </main>
  );
}
