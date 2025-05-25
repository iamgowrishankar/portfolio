import React from 'react';
import { Award } from 'lucide-react';

const About = () => {
  const certifications = [
    "C Programming - SPOKEN TUTORIAL (IIT Bombay)",
    "Advanced C++ - SPOKEN TUTORIAL (IIT Bombay)", 
    "Python - SPOKEN TUTORIAL (IIT Bombay)",
    "Technology & Soft Skills Training - ICT Academy"
  ];

  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-300 mb-6">
              I'm a passionate Full Stack Developer with over 5 years of professional experience 
              creating robust, scalable web applications. My expertise spans from frontend user 
              interfaces to complex backend architectures, with a particular focus on payment 
              systems and business management solutions.
            </p>
            
            <p className="text-lg text-gray-300 mb-6">
              At Soft Solutions4U, I've led the development of critical payment integration systems, 
              implemented compliance standards like ZUGFeRD XML e-invoicing, and optimized CI/CD 
              pipelines for better deployment efficiency.
            </p>

            <p className="text-lg text-gray-300 mb-8">
              I'm motivated to continuously improve and leverage modern technologies to tackle 
              complex challenges while maintaining high code quality and system reliability.
            </p>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Education</h3>
              <div className="bg-slate-800/50 p-4 rounded-lg">
                <h4 className="font-semibold">Bachelor of Engineering - Computer Science</h4>
                <p className="text-gray-400">Paavai Engineering College, Namakkal</p>
                <p className="text-gray-400">2016 - 2020 | CGPA: 7.8</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-6 text-blue-400">Core Competencies</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Full Stack Development",
                  "Payment Integration",
                  "API Development", 
                  "Database Optimization",
                  "CI/CD Pipeline",
                  "Code Refactoring",
                  "Performance Tuning",
                  "Production Support"
                ].map((competency, index) => (
                  <div key={index} className="bg-blue-900/20 text-blue-300 px-3 py-2 rounded-lg text-sm text-center">
                    {competency}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Certifications</h3>
              <div className="space-y-2">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Award size={16} className="text-cyan-400" />
                    <span className="text-gray-300 text-sm">{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Languages</h3>
              <div className="flex gap-4">
                <span className="bg-slate-800/50 px-4 py-2 rounded-full">English</span>
                <span className="bg-slate-800/50 px-4 py-2 rounded-full">Tamil</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;