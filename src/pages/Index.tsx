
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
    document.title = "Fulltime Academy - Automação com IA no WhatsApp";

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
    <div className="min-h-screen bg-cyber-dark text-white overflow-x-hidden">
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
  );
};

export default Index;
