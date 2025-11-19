import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Payrexx Payment Integration",
      description: "Integrated and managed comprehensive online payment solutions with secure transaction processing, multi-PSP support, and optimized checkout flows.",
      tech: [
        "PHP 8.3",
        "Symfony",
        "MySQL",
        "Doctrine ORM",
        "jQuery",
        "Vue3",
        "Git",
        "Bitbucket",
        "AWS",
        "Docker",
        "Payrexx API (REST)",
        "Redis",
        "n8n",
        "Elasticsearch"
      ],
      achievements: [
        "Implemented ZUGFeRD XML e-invoicing compliance",
        "Optimized CI/CD pipeline with Docker",
        "Integrated SonarCloud for code quality analysis"
      ],
      period: "2022-2025",
      company: "Soft Solutions4U"
    },
    {
      title: "ViviApp - Business Management System",
      description: "Backend application for Vivi Kola Switzerland managing Billing, CRM, and Production operations with comprehensive tracking and reporting.",
      tech: ["CakePHP", "MySQL", "jQuery", "HTML5", "CSS3", "AWS"],
      achievements: [
        "Developed Billing Management module",
        "Integrated Google Calendar API for appointments",
        "Implemented Swiss rounding for financial compliance",
        "Supported CakePHP 3.6 to 4.4 migration"
      ],
      period: "2020-2022",
      company: "Soft Solutions4U"
    },
    {
      title: "Vivi Kola Website",
      description: "Custom WordPress e-commerce website with WooCommerce integration, featuring custom designs and enhanced user experience.",
      tech: ["WordPress", "WooCommerce", "Elementor", "PHP", "MySQL"],
      achievements: [
        "Custom page layouts and brand-aligned designs",
        "Enhanced user experience and functionality",
        "Collaborative design implementation"
      ],
      period: "2020-2022",
      company: "Soft Solutions4U"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 text-white">
      <div className="max-w-6xl mx-auto bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl border border-slate-700/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          
          <div className="space-y-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
                <div className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                      <p className="text-blue-400">{project.company} • {project.period}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 text-lg leading-relaxed">{project.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3 text-blue-300">Key Achievements:</h4>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {project.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-400 text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold mb-3 text-blue-300">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span key={techIndex} className="bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
