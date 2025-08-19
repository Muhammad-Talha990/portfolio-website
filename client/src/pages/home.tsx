import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import SkillsSection from "@/components/skills-section";
import ProjectsSection from "@/components/projects-section";
import ContactSection from "@/components/contact-section";
import FloatingSocial from "@/components/floating-social";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white font-inter overflow-x-hidden">
      {/* Floating Geometric Shapes */}
      <div className="floating-shape w-20 h-20 bg-primary-blue rounded-full animate-float top-20 left-10" />
      <div className="floating-shape w-16 h-16 bg-accent-blue rounded-lg animate-float-delay top-40 right-20 rotate-45" />
      <div className="floating-shape w-24 h-24 bg-gradient-to-r from-primary-blue to-accent-blue rounded-full animate-pulse-slow top-60 left-1/4" />
      <div className="floating-shape w-12 h-12 bg-accent-blue rounded-full animate-bounce-slow top-80 right-1/3" />
      
      <Navigation />
      <FloatingSocial />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
