
import { Code, Palette, Rocket } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white/5 backdrop-blur-sm relative z-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">About Me</h2>
          <div className="w-24 h-1 bg-yellow-300 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-indigo-100 leading-relaxed">
              I'm a passionate full-stack developer with 5+ years of experience creating digital solutions that combine beautiful design with robust functionality. I specialize in React, Node.js, and modern web technologies.
            </p>
            <p className="text-lg text-indigo-100 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open source projects, or enjoying a good cup of coffee while planning my next creative endeavor.
            </p>
            <div className="flex space-x-4">
              <button className="px-6 py-3 bg-yellow-300 text-gray-900 rounded-lg font-semibold hover:bg-yellow-400 transition-colors duration-300 hover:scale-105 transform">
                Download Resume
              </button>
              <button className="px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 hover:scale-105 transform">
                Contact Me
              </button>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-4">
                <Code className="text-yellow-300 mr-4" size={32} />
                <h3 className="text-xl font-semibold text-white">Development</h3>
              </div>
              <p className="text-indigo-100">Building scalable web applications with modern frameworks and best practices.</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-4">
                <Palette className="text-yellow-300 mr-4" size={32} />
                <h3 className="text-xl font-semibold text-white">Design</h3>
              </div>
              <p className="text-indigo-100">Creating intuitive user interfaces that provide exceptional user experiences.</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-4">
                <Rocket className="text-yellow-300 mr-4" size={32} />
                <h3 className="text-xl font-semibold text-white">Innovation</h3>
              </div>
              <p className="text-indigo-100">Always exploring new technologies and pushing the boundaries of what's possible.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
