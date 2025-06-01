
import { useState } from 'react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const skillCategories = {
    frontend: [
      { name: 'React', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Next.js', level: 85 },
      { name: 'Vue.js', level: 80 },
      { name: 'CSS/SCSS', level: 92 },
      { name: 'Tailwind CSS', level: 88 }
    ],
    backend: [
      { name: 'Node.js', level: 90 },
      { name: 'Python', level: 85 },
      { name: 'Express.js', level: 88 },
      { name: 'PostgreSQL', level: 82 },
      { name: 'MongoDB', level: 80 },
      { name: 'GraphQL', level: 75 }
    ],
    tools: [
      { name: 'Git', level: 95 },
      { name: 'Docker', level: 80 },
      { name: 'AWS', level: 75 },
      { name: 'Figma', level: 85 },
      { name: 'Jest', level: 88 },
      { name: 'Webpack', level: 82 }
    ]
  };

  return (
    <section id="skills" className="py-20 bg-white/5 backdrop-blur-sm relative z-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-yellow-300 mx-auto"></div>
        </div>

        <div className="flex justify-center mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 flex space-x-2">
            {Object.keys(skillCategories).map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 capitalize ${
                  activeCategory === category
                    ? 'bg-yellow-300 text-gray-900'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories[activeCategory as keyof typeof skillCategories].map((skill, index) => (
            <div
              key={skill.name}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                <span className="text-yellow-300 font-medium">{skill.level}%</span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-3 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-yellow-300 to-yellow-500 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
