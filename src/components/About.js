import React from 'react';
import { Award, GraduationCap, Briefcase, Globe, User, Building, Rocket } from 'lucide-react';

const About = () => {
  const certifications = [
    "C Programming - SPOKEN TUTORIAL (IIT Bombay)",
    "Advanced C++ - SPOKEN TUTORIAL (IIT Bombay)", 
    "Python - SPOKEN TUTORIAL (IIT Bombay)",
    "Technology & Soft Skills Training - ICT Academy"
  ];

  const competencies = [
    "Full Stack Development",
    "Payment Integration",
    "API Development", 
    "Database Optimization",
    "CI/CD Pipeline",
    "Code Refactoring",
    "Performance Tuning",
    "Production Support"
  ];

  return (
    <section id="about" className="py-20 px-4 text-white">
      <div className="max-w-6xl mx-auto bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl border border-slate-700/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          
          {/* Three paragraphs with icons - better spaced */}
          <div className="max-w-4xl mx-auto mb-16 space-y-8">
            <div className="flex items-start gap-4">
              <User className="text-blue-400 mt-1 flex-shrink-0" size={24} />
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a passionate Full Stack Developer with over 5 years of professional experience 
                creating robust, scalable web applications. My expertise spans from frontend user 
                interfaces to complex backend architectures, with a particular focus on payment 
                systems and business management solutions.
              </p>
            </div>
            
            <div className="flex items-start gap-4">
              <Building className="text-blue-400 mt-1 flex-shrink-0" size={24} />
              <p className="text-lg text-gray-300 leading-relaxed">
                At Soft Solutions4U, I've led the development of critical payment integration systems, 
                implemented compliance standards like ZUGFeRD XML e-invoicing, and optimized CI/CD 
                pipelines for better deployment efficiency.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <Rocket className="text-blue-400 mt-1 flex-shrink-0" size={24} />
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm motivated to continuously improve and leverage modern technologies to tackle 
                complex challenges while maintaining high code quality and system reliability.
              </p>
            </div>
          </div>

          {/* Card-based layout */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Education Card */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-blue-900/30 p-2 rounded-lg">
                  <GraduationCap className="text-blue-400" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white">Education</h3>
              </div>
              <div className="bg-slate-700/30 p-4 rounded-lg">
                <h4 className="font-semibold text-white mb-2">Bachelor of Engineering - Computer Science</h4>
                <p className="text-blue-400 mb-1">Paavai Engineering College, Namakkal</p>
                <p className="text-gray-400">2016 - 2020 | CGPA: 7.8</p>
              </div>
            </div>

            {/* Core Competencies Card */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-blue-900/30 p-2 rounded-lg">
                  <Briefcase className="text-blue-400" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white">Core Competencies</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {competencies.map((competency, index) => (
                  <div key={index} className="bg-blue-900/20 text-blue-300 px-3 py-2 rounded-lg text-sm text-center hover:bg-blue-900/30 transition-colors duration-200">
                    {competency}
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications Card */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-blue-900/30 p-2 rounded-lg">
                  <Award className="text-blue-400" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white">Certifications</h3>
              </div>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-700/30 transition-colors duration-200">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-300 text-sm">{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages Card */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-blue-900/30 p-2 rounded-lg">
                  <Globe className="text-blue-400" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white">Languages</h3>
              </div>
              <div className="flex gap-4">
                <div className="bg-slate-700/30 px-4 py-3 rounded-lg flex items-center gap-2 flex-1">
                  <span className="text-2xl">🇺🇸</span>
                  <span className="text-white font-medium">English</span>
                </div>
                <div className="bg-slate-700/30 px-4 py-3 rounded-lg flex items-center gap-2 flex-1">
                  <span className="text-2xl">🇮🇳</span>
                  <span className="text-white font-medium">Tamil</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;