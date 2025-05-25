import React from 'react';
import { Mail, Phone, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <>
      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Let's Work Together
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-12">
            I'm always interested in new opportunities and exciting projects. 
            Let's create something amazing together!
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-blue-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="text-blue-400" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-gray-400">gowris073@gmail.com</p>
            </div>
            
            <div className="text-center">
                <div className="bg-blue-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="text-blue-400" size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-2">Phone</h3>
                <a href="tel:+918124666608" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                    +91 8124666608
                </a>
            </div>
            
            <div className="text-center">
                <div className="bg-blue-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Linkedin className="text-blue-400" size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-2">LinkedIn</h3>
                <a 
                    href="https://www.linkedin.com/in/gowri-shankar-a-k-a8ba59147/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                >
                    linkedin.com/in/gowri-shankar
                </a>
            </div>
          </div>
          <a
            href="mailto:gowris073@gmail.com"
            className="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 transform hover:scale-105"
          >
            Send Message
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-8 px-4 text-center">
        <p className="text-gray-400">
          © 2025 Gowri Shankar AK. Built with React and passion for clean code.
        </p>
      </footer>
    </>
  );
};

export default Contact;