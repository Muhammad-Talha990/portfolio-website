import { useState } from "react";
import { Send, Mail, Phone, MapPin, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await apiRequest('POST', '/api/contact', formData);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again later or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/muhammad-talha-9634b1368/",
      icon: "💼",
      color: "text-primary-blue"
    },
    {
      name: "GitHub",
      href: "https://github.com/Muhammad-Talha990",
      icon: "🌐",
      color: "text-primary-blue"
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/+923464684073",
      icon: "💬",
      color: "text-green-400"
    },
    {
      name: "Email",
      href: "mailto:talha.sabir4073@gmail.com",
      icon: "✉️",
      color: "text-accent-blue"
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6" data-testid="contact-title">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-testid="contact-subtitle">
            Have a project in mind or simply want to chat? Let’s connect!
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="glassmorphism rounded-2xl p-8" data-testid="contact-form">
            <h3 className="text-2xl font-bold mb-6 gradient-text">Send Message</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <Label htmlFor="name" className="block text-sm font-medium mb-2">Name</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:border-primary-blue transition-colors text-white placeholder-gray-400"
                  placeholder="Your name"
                  data-testid="input-name"
                />
              </div>
              <div>
                <Label htmlFor="email" className="block text-sm font-medium mb-2">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:border-primary-blue transition-colors text-white placeholder-gray-400"
                  placeholder="your@email.com"
                  data-testid="input-email"
                />
              </div>
              <div>
                <Label htmlFor="message" className="block text-sm font-medium mb-2">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:border-primary-blue transition-colors resize-none text-white placeholder-gray-400"
                  placeholder="Your message..."
                  data-testid="textarea-message"
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-primary-blue to-accent-blue hover:from-blue-600 hover:to-blue-400 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                data-testid="submit-contact-form"
              >
                {isSubmitted ? (
                  <>
                    <Check className="w-4 h-4 mr-2" />
                    Message Sent!
                  </>
                ) : isSubmitting ? (
                  <>
                    <div className="w-4 h-4 mr-2 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="glassmorphism rounded-2xl p-6" data-testid="contact-info">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4" data-testid="contact-email">
                  <div className="w-12 h-12 glassmorphism rounded-full flex items-center justify-center">
                    <Mail className="text-primary-blue w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <a href="mailto:talha.sabir4073@gmail.com" className="text-gray-400 hover:text-primary-blue transition-colors">
                      talha.sabir4073@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4" data-testid="contact-phone">
                  <div className="w-12 h-12 glassmorphism rounded-full flex items-center justify-center">
                    <Phone className="text-primary-blue w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <a href="tel:+1234567890" className="text-gray-400 hover:text-primary-blue transition-colors">
                      +92 346 4684073
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4" data-testid="contact-location">
                  <div className="w-12 h-12 glassmorphism rounded-full flex items-center justify-center">
                    <MapPin className="text-primary-blue w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-gray-400">Islamabad, Pakistan</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Social Media Links */}
            <div className="glassmorphism rounded-2xl p-6" data-testid="social-links">
              <h3 className="text-xl font-bold mb-6">Follow Me</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center sm:justify-start space-x-2 sm:space-x-3 p-3 sm:p-4 glassmorphism rounded-xl hover:scale-105 transition-all duration-300 hover-glow group"
                    data-testid={`social-${link.name.toLowerCase()}`}
                  >
                    <span className="text-lg sm:text-xl group-hover:scale-110 transition-transform flex-shrink-0">
                      {link.icon}
                    </span>
                    <span className="font-medium text-sm sm:text-base truncate">{link.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
