export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/10" data-testid="footer">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0" data-testid="footer-logo">
            <span className="text-lg font-bold gradient-text">Muhammad Talha</span>
          </div>
          <p
            className="text-gray-400 text-center md:text-right"
            data-testid="footer-copyright"
          >
            © 2024 Muhammad Talha. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
