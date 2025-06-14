import React from 'react';
import { MapPin } from 'lucide-react';

const Experience = () => {
  const experience = [
    {
      title: "Senior Programmer",
      company: "Soft Solutions4U",
      location: "Chennai",
      period: "May 2020 - Present",
      duration: "5+ years",
      highlights: [
        "Led development of payment integration systems handling secure transactions",
        "Implemented e-invoicing compliance with ZUGFeRD XML standards",
        "Optimized CI/CD pipelines and integrated automated testing",
        "Managed code refactoring to service-based architecture",
        "Provided production support and real-time issue resolution"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 text-white">
      <div className="max-w-6xl mx-auto bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl border border-slate-700/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Professional Experience
            </span>
          </h2>
          
          {experience.map((exp, index) => (
            <div key={index} className="bg-slate-800/50 rounded-xl p-8 mb-8 hover:transform hover:scale-105 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                  <p className="text-lg text-blue-400 mb-1">{exp.company}</p>
                  <p className="text-gray-400 flex items-center gap-2">
                    <MapPin size={16} />
                    {exp.location}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-cyan-400 font-semibold">{exp.period}</p>
                  <p className="text-gray-400">{exp.duration}</p>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4 text-blue-300">Key Achievements:</h4>
                <ul className="space-y-3">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;