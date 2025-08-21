import { ExternalLink, Github, Linkedin, Mail } from "lucide-react";

export default function FloatingSocial() {
  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/muhammad-talha-9634b1368/",
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn"
    },
    {
      href: "https://github.com/Muhammad-Talha990",
      icon: <Github className="w-5 h-5" />,
      label: "GitHub"
    },
    {
      href: "mailto:talha.sabir4073@example.com",
      icon: <Mail className="w-5 h-5" />,
      label: "Email"
    },
    {
      href: "https://wa.me/+923464684073",
      icon: <ExternalLink className="w-5 h-5" />,
      label: "WhatsApp"
    }
  ];

  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block" data-testid="floating-social">
      <div className="flex flex-col space-y-4">
        {/* <div className="text-xs text-gray-400 transform rotate-90 mb-4 origin-center whitespace-nowrap" data-testid="follow-text">
          FOLLOW ME ON
        </div> */}
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon w-12 h-12 glassmorphism rounded-full flex items-center justify-center hover-glow text-primary-blue hover:text-accent-blue transition-colors"
            data-testid={`floating-social-${link.label.toLowerCase()}`}
            aria-label={link.label}
          >
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  );
}
