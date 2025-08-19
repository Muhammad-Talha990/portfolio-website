import { Brain } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/10" data-testid="footer">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-3 mb-4 md:mb-0" data-testid="footer-logo">
            <div className="w-10 h-10 bg-gradient-to-r from-primary-blue to-accent-blue rounded-lg flex items-center justify-center">
              <Brain className="text-white w-5 h-5" />
            </div>
            <span className="text-lg font-bold gradient-text">Ben Parker</span>
          </div>
          <p className="text-gray-400 text-center md:text-right" data-testid="footer-copyright">
            © 2024 Ben Parker. All rights reserved. | Designed with passion ❤️
          </p>
        </div>
      </div>
    </footer>
  );
}
