import React from 'react';
import { ChevronDown, MapPin, Phone, Mail, Linkedin, Github } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <div className="text-center max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-6 flex items-center justify-center text-4xl font-bold">
            GS
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
            Gowri Shankar AK
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Full Stack Web Developer
        </p>
        
        <p className="text-lg text-gray-400 mb-10 max-w-3xl mx-auto">
          Experienced Full Stack Developer with 5+ years of expertise in building and maintaining 
          dynamic web applications. Skilled in creating scalable backend systems and user-friendly 
          front-end interfaces, with a focus on problem-solving and delivering high-quality solutions.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <button
            onClick={() => scrollToSection('projects')}
            className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 px-8 py-3 rounded-full font-semibold transition-all duration-200 transform hover:scale-105"
          >
            View My Work
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="border border-blue-400 hover:bg-blue-400/10 px-8 py-3 rounded-full font-semibold transition-all duration-200"
          >
            Get In Touch
          </button>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-sm text-gray-400 mb-8">
          <div className="flex items-center gap-2">
            <MapPin size={16} />
            <span>Chennai, India</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={16} />
            <span>+91 8124666608</span>
          </div>
        </div>
        
        <div className="flex justify-center space-x-6">
          <a 
            href="mailto:gowris073@gmail.com" 
            className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
            title="Email"
          >
            <Mail size={24} />
          </a>
          <a 
            href="https://www.linkedin.com/in/gowri-shankar" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
            title="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a 
            href="#" 
            className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
            title="GitHub"
          >
            <Github size={24} />
          </a>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-blue-400" size={32} />
        </div>
      </div>
    </section>
  );
};

export default Hero;