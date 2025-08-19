import { useState } from "react";
import { Download, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { apiRequest } from "@/lib/queryClient";

export default function HeroSection() {
  const [isDownloading, setIsDownloading] = useState(false);
  const [isDownloaded, setIsDownloaded] = useState(false);

  const downloadCV = async () => {
    try {
      setIsDownloading(true);
      const response = await apiRequest('GET', '/api/download-cv');
      
      // Create blob and download
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Ben-Parker-CV.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      
      setIsDownloaded(true);
      setTimeout(() => {
        setIsDownloaded(false);
        setIsDownloading(false);
      }, 2000);
    } catch (error) {
      console.error('Download failed:', error);
      setIsDownloading(false);
    }
  };

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-primary-blue text-lg font-medium" data-testid="welcome-text">
              Welcome to my portfolio!
            </p>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight" data-testid="hero-title">
              Hello, my<br />
              name's <span className="gradient-text">Ben.</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-lg" data-testid="hero-description">
              I'm a visual designer from London.<br />
              Currently working with <span className="text-primary-blue font-semibold">@Ideo</span> as<br />
              a UI Consultant.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={downloadCV}
              disabled={isDownloading}
              className="bg-primary-blue hover:bg-blue-600 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary-blue/25"
              data-testid="download-cv-button"
            >
              {isDownloaded ? (
                <>
                  <Check className="w-4 h-4 mr-2" />
                  Downloaded!
                </>
              ) : isDownloading ? (
                <>
                  <div className="w-4 h-4 mr-2 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  Downloading...
                </>
              ) : (
                <>
                  <Download className="w-4 h-4 mr-2" />
                  Download CV
                </>
              )}
            </Button>
            
            <Button
              onClick={scrollToProjects}
              variant="outline"
              className="border border-white/20 hover:border-primary-blue px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 glassmorphism group bg-transparent text-white hover:text-white"
              data-testid="see-work-button"
            >
              See my work 
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
            </Button>
          </div>
        </div>
        
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative">
            {/* Decorative Elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent-blue rounded-full opacity-20 animate-pulse" />
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-primary-blue rounded-lg opacity-10 rotate-45 animate-float" />
            
            {/* Profile Image */}
            <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-primary-blue/30 hover:border-primary-blue/60 transition-all duration-500 hover:scale-105 hover-glow">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800"
                alt="Professional headshot portrait"
                className="w-full h-full object-cover"
                data-testid="profile-image"
              />
            </div>
            
            {/* Floating 3D Element */}
            <div className="absolute top-1/2 -right-12 w-16 h-16 bg-gradient-to-r from-accent-blue to-primary-blue rounded-xl transform rotate-45 animate-float-delay opacity-80" />
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2" data-testid="scroll-indicator">
        <span className="text-sm text-gray-400">Scroll down</span>
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-blue rounded-full animate-bounce mt-2" />
        </div>
      </div>
    </section>
  );
}
