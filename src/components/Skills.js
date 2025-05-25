import React from 'react';
import { Code, Database, Cloud, Settings } from 'lucide-react';

const Skills = () => {
  const skills = [
    {
      category: "Frontend Development",
      icon: <Code size={24} />,
      technologies: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "jQuery", "React", "Vue.js"],
      proficiency: 90
    },
    {
      category: "Backend Development",
      icon: <Settings size={24} />,
      technologies: ["Core PHP", "Laravel", "CakePHP", "WordPress", "REST API", "MVC Architecture"],
      proficiency: 95
    },
    {
      category: "Database",
      icon: <Database size={24} />,
      technologies: ["MySQL", "Doctrine ORM", "Schema Design", "Query Optimization"],
      proficiency: 88
    },
    {
      category: "Cloud & DevOps",
      icon: <Cloud size={24} />,
      technologies: ["AWS (EC2, S3)", "Docker", "Git", "Bitbucket", "CI/CD"],
      proficiency: 82
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Technical Skills
          </span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skillCategory, index) => (
            <div key={index} className="bg-slate-800/50 rounded-xl p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-blue-400">
                  {skillCategory.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{skillCategory.category}</h3>
              </div>
              
              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-300">Proficiency</span>
                  <span className="text-blue-400">{skillCategory.proficiency}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-blue-600 to-cyan-600 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${skillCategory.proficiency}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {skillCategory.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="bg-blue-900/30 text-blue-300 px-2 py-1 rounded text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;