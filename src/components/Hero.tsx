
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import AnimatedText from './AnimatedText';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative z-10">
      <div className="text-center text-white max-w-4xl mx-auto px-4">
        <div className="mb-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
            Hi, I'm <span className="text-yellow-300">Itachi Uchiha</span>
          </h1>
          <div className="text-xl md:text-2xl text-indigo-200 h-8">
            <AnimatedText 
              text="Full Stack Developer & UI/UX Designer" 
              className="font-light"
              delay={1000}
            />
          </div>
        </div>

        <p className="text-lg md:text-xl text-indigo-100 mb-8 max-w-2xl mx-auto animate-fade-in opacity-0 animation-delay-2000">
          I create beautiful, functional, and user-centered digital experiences with modern technologies.
        </p>

        <div className="flex justify-center space-x-6 mb-8 animate-fade-in opacity-0 animation-delay-3000">
          <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110">
            <Github size={24} />
          </a>
          <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110">
            <Linkedin size={24} />
          </a>
          <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110">
            <Mail size={24} />
          </a>
        </div>

        <button
          onClick={scrollToAbout}
          className="animate-bounce text-white hover:text-yellow-300 transition-colors duration-300"
        >
          <ArrowDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
