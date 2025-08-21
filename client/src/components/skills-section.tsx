import { useState } from "react";

interface SkillBarProps {
  skill: string;
  percentage: number;
}

function SkillBar({ skill, percentage }: SkillBarProps) {
  const [isAnimated, setIsAnimated] = useState(false);

  const handleMouseEnter = () => {
    if (!isAnimated) {
      setIsAnimated(true);
    }
  };

  return (
    <div 
      className="skill-item" 
      onMouseEnter={handleMouseEnter}
      data-testid={`skill-${skill.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
    >
      <div className="flex justify-between mb-2">
        <span className="font-semibold">{skill}</span>
        <span className="text-primary-blue">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2">
        <div 
          className="skill-bar bg-gradient-to-r from-primary-blue to-accent-blue h-2 rounded-full" 
          style={{ width: isAnimated ? `${percentage}%` : '0%' }}
        />
      </div>
    </div>
  );
}

export default function SkillsSection() {
    const technicalSkills = [
      { skill: "Mobile Development (Flutter, Dart)", percentage: 90 },
      { skill: "Frontend Development (HTML, CSS, JavaScript, React)", percentage: 85 },
      { skill: "Backend & APIs (Firebase, Node.js, REST APIs)", percentage: 80 },
      { skill: "Database Systems (MySQL, MongoDB)", percentage: 85 },
      { skill: "Tools (Git, GitHub, VS Code, Android Studio)", percentage: 90 },
      { skill: "Other (Responsive UI Design, State Management, Debugging)", percentage: 65 },
    ];


  const tools = [
    // { name: "Adobe CC", icon: "🎭" },
    { name: "HTML5", icon: "🌐" },
    { name: "CSS3", icon: "🎯" },
    { name: "Bootstrap", icon: "🅱️" },
    { name: "JavaScript", icon: "📜" },
    { name: "React", icon: "⚛️" },
    { name: "Tailwind CSS", icon: "💨" },
    { name: "Figma", icon: "🎨" },
    { name: "MongoDB", icon: "🍃" },
    { name: "Firebase", icon: "🔥" },
    // { name: "Node.js", icon: "🌲" },
    // { name: "Express.js", icon: "🚂" },
    // { name: "Socket.io", icon: "🔌" },


  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6" data-testid="skills-title">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-testid="skills-subtitle">
            A comprehensive toolkit for creating exceptional digital experiences.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div className="glassmorphism rounded-2xl p-8 hover-glow" data-testid="technical-skills">
            <h3 className="text-2xl font-bold mb-8 gradient-text">Technical Skills</h3>
            <div className="space-y-6">
              {technicalSkills.map((item, index) => (
                <SkillBar 
                  key={index} 
                  skill={item.skill} 
                  percentage={item.percentage} 
                />
              ))}
            </div>
          </div>
          
          {/* Tools & Technologies */}
          <div className="glassmorphism rounded-2xl p-8 hover-glow" data-testid="tools-technologies">
            <h3 className="text-2xl font-bold mb-8 gradient-text">Tools & Technologies</h3>
            <div className="grid grid-cols-3 gap-6">
              {tools.map((tool, index) => (
                <div key={index} className="text-center group cursor-pointer" data-testid={`tool-${tool.name.toLowerCase()}`}>
                  <div className="w-16 h-16 mx-auto mb-3 glassmorphism rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-2xl">{tool.icon}</span>
                  </div>
                  <span className="text-sm">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
