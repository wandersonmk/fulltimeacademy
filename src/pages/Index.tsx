
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ForWhoSection from "@/components/ForWhoSection";
import BenefitsSection from "@/components/BenefitsSection";
import AppDevelopmentSection from "@/components/AppDevelopmentSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import CTASection from "@/components/CTASection";
import FooterSection from "@/components/FooterSection";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  useEffect(() => {
    // Update document title
    document.title = "Fulltime Academy - Sites Profissionais com IA no VS Code";

    // Initialize reveal on scroll functionality
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    
    const reveal = () => {
      revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100 && elementBottom > 0) {
          element.classList.add('revealed');
        }
      });
    };
    
    window.addEventListener('scroll', reveal);
    
    // Trigger reveal on initial load
    setTimeout(reveal, 200);
    
    return () => {
      window.removeEventListener('scroll', reveal);
    };
  }, []);

  return (
    <>
      {/* Video background fixo — irmão do conteúdo para não ser cortado pelo overflow */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, overflow: 'hidden' }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        >
          <source src="/images/aa.mp4" type="video/mp4" />
        </video>
        {/* Overlay escuro para garantir legibilidade do conteúdo */}
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(2, 8, 16, 0.92)' }} />
      </div>

      {/* Conteúdo principal acima do vídeo */}
      <div className="min-h-screen text-white overflow-x-hidden" style={{ position: 'relative', zIndex: 1 }}>
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ForWhoSection />
        <BenefitsSection />
        <AppDevelopmentSection />
        <TestimonialsSection />
        <GuaranteeSection />
        <CTASection />
        <FooterSection />
        <ScrollToTop />
      </div>
    </>
  );
};

export default Index;
