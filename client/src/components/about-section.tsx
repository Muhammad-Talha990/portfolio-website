export default function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6" data-testid="about-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-testid="about-subtitle">
            Passionate about creating beautiful and functional digital experiences that make a difference.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed" data-testid="about-paragraph-1">
              With over 5 years of experience in digital design, I specialize in creating user-centered interfaces 
              that combine aesthetic appeal with functional excellence. My approach focuses on understanding user needs 
              and translating them into intuitive digital experiences.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed" data-testid="about-paragraph-2">
              I believe that great design is not just about how it looks, but how it works. Every project I take on 
              is an opportunity to solve complex problems through thoughtful design and innovative solutions.
            </p>
            
            <div className="grid grid-cols-3 gap-6 mt-8">
              <div className="text-center" data-testid="stat-projects">
                <div className="text-3xl font-bold gradient-text">50+</div>
                <div className="text-gray-400">Projects</div>
              </div>
              <div className="text-center" data-testid="stat-experience">
                <div className="text-3xl font-bold gradient-text">5+</div>
                <div className="text-gray-400">Years Experience</div>
              </div>
              <div className="text-center" data-testid="stat-clients">
                <div className="text-3xl font-bold gradient-text">30+</div>
                <div className="text-gray-400">Happy Clients</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
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
