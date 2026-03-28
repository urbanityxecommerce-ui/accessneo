
import { HeroSection } from "@/components/hero-section";
import { PaymentSection } from "@/components/payment-section";
import { VerificationForm } from "@/components/verification-form";
import { UtrGuide } from "@/components/utr-guide";
import { Footer } from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      {/* Background decoration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[20%] -left-[10%] w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[20%] -right-[10%] w-[30%] h-[30%] bg-secondary/5 blur-[100px] rounded-full" />
      </div>

      <HeroSection />
      
      <div className="space-y-12">
        <PaymentSection />
        
        <div className="bg-primary/5 py-12">
          <VerificationForm />
        </div>
        
        <UtrGuide />
      </div>

      <Footer />
      <Toaster />
    </main>
  );
}
