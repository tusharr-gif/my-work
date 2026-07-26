import React from 'react';
import stackImage from '../assets/about/tushar_cartoon.jpg';
import reactImage from '../assets/about/react.png';
import nodeImage from '../assets/about/node.png';
import mongoImage from '../assets/about/mongodb.png';

const allSkills = [
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg", category: "Frontend" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg", category: "Frontend" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", category: "Frontend" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg", category: "Frontend" },
  { name: "React", icon: reactImage, category: "Frontend" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg", category: "Frontend" },
  { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", category: "Frontend" },
  { name: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg", category: "Frontend" },
  { name: "Node.js", icon: nodeImage, category: "Backend" },
  { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg", category: "Backend" },
  { name: "REST API", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg", category: "Backend" },
  { name: "MongoDB", icon: mongoImage, category: "Database" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg", category: "Database" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg", category: "Database" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg", category: "Languages" },
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg", category: "Languages" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg", category: "Tools" },
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg", category: "Tools" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg", category: "DevOps" },
  { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg", category: "Cloud" },
];

const About = () => {
  return (
    <section id="about" className="bg-[#ff2a2a] pt-20 pb-40 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start">
        
        {/* Left Side: ID Badge */}
        <div className="flex flex-col items-center w-full md:w-[350px] shrink-0 mt-12 md:mt-0">
          
          <div data-aos="drop-bounce" className="relative flex justify-center w-full">
            {/* Lanyard string */}
            <div className="absolute -top-32 left-1/2 w-3 h-40 bg-black transform -translate-x-1/2 shadow-inner z-0"></div>
            {/* Lanyard clip */}
            <div className="absolute -top-6 left-1/2 w-6 h-12 bg-gray-300 rounded border border-gray-400 transform -translate-x-1/2 z-10 shadow-[0_2px_10px_rgba(0,0,0,0.3)]"></div>
            
            {/* Badge Card */}
            <div className="bg-gray-900 w-full max-w-[280px] rounded-2xl p-3 shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative z-20 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
              {/* Cutout Hole */}
              <div className="absolute -top-3 left-1/2 w-16 h-6 bg-gray-900 rounded-t-xl transform -translate-x-1/2 flex justify-center items-center">
                <div className="w-8 h-2 bg-black/30 rounded-full shadow-inner"></div>
              </div>
              {/* Image Container */}
              <div className="w-full aspect-[3/4] overflow-hidden rounded-xl bg-gray-800 border-2 border-transparent">
                <img 
                  src={stackImage} 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Right Side: Info Content */}
        <div data-aos="fade-left" data-aos-delay="200" className="flex-1 text-white mt-8 md:mt-0 relative z-20">
          
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4">Hello!</h2>
          <p className="text-lg font-bold mb-8 leading-relaxed max-w-3xl text-red-50">
            Hi, my name is <span className="text-black text-xl font-black mx-1 tracking-wide uppercase">TUSHAR SONAR</span> , a passionate full-stack developer based in Pune, dedicated to crafting clean, functional, and highly scalable web applications.
          </p>

          {/* Quick Preview Icons Row */}
          <div className="flex items-center gap-8 mt-6 pb-6 border-b border-white/20">
            <span className="text-xs font-black uppercase tracking-widest text-black">Core Stack:</span>
            <img 
              src={reactImage} 
              alt="React" 
              title="React"
              className="w-12 h-12 md:w-14 md:h-14 object-contain hover:scale-125 transition-transform duration-300 cursor-pointer drop-shadow-xl" 
            />
            <img 
              src={nodeImage} 
              alt="Node.js" 
              title="Node.js"
              className="w-12 h-12 md:w-14 md:h-14 object-contain hover:scale-125 transition-transform duration-300 cursor-pointer drop-shadow-xl" 
            />
            <img 
              src={mongoImage} 
              alt="MongoDB" 
              title="MongoDB"
              className="w-12 h-12 md:w-14 md:h-14 object-contain hover:scale-125 transition-transform duration-300 cursor-pointer drop-shadow-xl" 
            />
          </div>

        </div>
      </div>

      {/* Full Technical Skills Section Grid */}
      <div id="skills" className="max-w-6xl mx-auto mt-28 relative z-20">
        <div className="text-center md:text-left mb-12" data-aos="fade-up">
          <h3 className="text-3xl md:text-5xl font-black text-black uppercase tracking-tight mb-3">
            Technical Skills & Toolstack
          </h3>
          <p className="text-white font-bold text-base md:text-lg opacity-95 max-w-2xl">
            The complete arsenal of modern technologies, languages, and frameworks I leverage to build robust web applications and digital solutions.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 md:gap-6">
          {allSkills.map((skill, index) => (
            <div 
              key={index}
              data-aos="zoom-in" 
              data-aos-delay={(index % 5) * 60}
              className="bg-white p-6 rounded-3xl flex flex-col items-center justify-center gap-3 shadow-xl hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)] transition-all duration-300 group cursor-pointer border-2 border-transparent hover:border-black"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center p-2.5 bg-gray-50 rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-inner">
                <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" />
              </div>
              <div className="text-center mt-1">
                <h4 className="font-black text-gray-900 text-sm md:text-base tracking-tight leading-tight">{skill.name}</h4>
                <span className="inline-block mt-1 text-[10px] font-extrabold text-[#ff2a2a] uppercase tracking-wider bg-red-50 px-2 py-0.5 rounded-full">
                  {skill.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Torn paper divider at bottom */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 transform translate-y-1">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* Decorative stars */}
      <div className="absolute top-10 right-10 md:right-20 text-black opacity-30 animate-pulse">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
      <div className="absolute bottom-32 left-4 md:left-20 text-black opacity-30 animate-pulse" style={{ animationDelay: '1s' }}>
        <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
    </section>
  );
};

export default About;
