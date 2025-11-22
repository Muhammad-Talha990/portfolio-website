export default function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6" data-testid="about-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-testid="about-subtitle">
          I’m a professional Web & Mobile App Developer focused on creating user-centric, 
          performance-optimized digital experiences. I develop responsive websites and 
          cross-platform mobile apps with clean architecture, smooth UI/UX, and reliable 
          functionality.   </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed" data-testid="about-paragraph-1">
            I enjoy transforming ideas into practical solutions—whether it’s building a new product from scratch or improving an existing system. My approach combines modern development practices, attention to detail, and clear communication to ensure every project is delivered on time and aligned with client goals.   </p>
            {/* <p className="text-lg text-gray-300 leading-relaxed" data-testid="about-paragraph-2">
            I believe great design is defined not only by its appearance but by its functionality. Each project I undertake is an opportunity to solve complex challenges through thoughtful design and innovative solutions.  </p>
             */}
            {/* <div className="grid grid-cols-3 gap-6 mt-8">
              <div className="text-center" data-testid="stat-projects">
                <div className="text-3xl font-bold gradient-text">5+</div>
                <div className="text-gray-400">Projects</div>
              </div>
              <div className="text-center" data-testid="stat-experience">
                <div className="text-3xl font-bold gradient-text">2+</div>
                <div className="text-gray-400">Years Experience</div>
              </div>
              <div className="text-center" data-testid="stat-clients">
                <div className="text-3xl font-bold gradient-text">3+</div>
                <div className="text-gray-400">Happy Clients</div>
              </div>
            </div> */}
          </div>
          
          <div className="relative">
            <img
              src="/images/about.jpg"
              alt="Modern office workspace"
              className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
              data-testid="about-image"
            />
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-accent-blue rounded-full opacity-20 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
