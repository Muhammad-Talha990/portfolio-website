import { useState } from "react";
import { Brain, Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className="fixed top-0 w-full z-50 glassmorphism"
      data-testid="navigation"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center" data-testid="logo">
            <span className="text-xl font-bold gradient-text">
              Muhammad Talha
            </span>
          </div>


          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="nav-link hover:text-primary-blue"
              data-testid="nav-home"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="nav-link hover:text-primary-blue"
              data-testid="nav-about"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="nav-link hover:text-primary-blue"
              data-testid="nav-skills"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="nav-link hover:text-primary-blue"
              data-testid="nav-projects"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="nav-link hover:text-primary-blue"
              data-testid="nav-contact"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="mobile-menu-toggle"
          >
            {isMobileMenuOpen ? (
              <X className="text-xl" />
            ) : (
              <Menu className="text-xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden glassmorphism mx-4 my-2 rounded-xl"
          data-testid="mobile-menu"
        >
          <div className="px-6 py-4 space-y-4">
            <button
              onClick={() => scrollToSection("home")}
              className="block hover:text-primary-blue transition-colors w-full text-left"
              data-testid="mobile-nav-home"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block hover:text-primary-blue transition-colors w-full text-left"
              data-testid="mobile-nav-about"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="block hover:text-primary-blue transition-colors w-full text-left"
              data-testid="mobile-nav-skills"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="block hover:text-primary-blue transition-colors w-full text-left"
              data-testid="mobile-nav-projects"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block hover:text-primary-blue transition-colors w-full text-left"
              data-testid="mobile-nav-contact"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
