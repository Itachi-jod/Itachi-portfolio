
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 bg-black/20 backdrop-blur-sm relative z-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold text-white mb-2">Itachi Uchiha</h3>
            <p className="text-indigo-200">Full Stack Developer & UI/UX Designer</p>
          </div>

          <div className="flex space-x-6 mb-6 md:mb-0">
            <a
              href="#"
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 group"
            >
              <Github size={20} className="text-white group-hover:text-yellow-300" />
            </a>
            <a
              href="#"
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 group"
            >
              <Linkedin size={20} className="text-white group-hover:text-yellow-300" />
            </a>
            <a
              href="#"
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 group"
            >
              <Mail size={20} className="text-white group-hover:text-yellow-300" />
            </a>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-indigo-200 flex items-center justify-center space-x-2">
            <span>Made with</span>
            <Heart size={16} className="text-red-400 animate-pulse" />
            <span>by Itachi Uchiha © 2024. All rights reserved.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
