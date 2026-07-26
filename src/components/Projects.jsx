import React, { useState } from 'react';
import amyronLogo from '../assets/projects/amyron.png';
import smartpayLogo from '../assets/projects/smartpay.png';

// ==========================================
// 🚀 HOW TO ADD YOUR PROJECTS ONE BY ONE:
// 1. Copy one of the project objects {} inside the `projectsData` array below.
// 2. Paste it as a new item in the array (don't forget the comma between objects!).
// 3. Update title, category, description, image URL, tech array, github link, and live link.
// ==========================================
const projectsData = [
  {
    id: 1,
    title: "AMYRON Groups - Marketing Agency",
    category: "Full Stack",
    description: "A high-conversion, visually stunning web platform built for AMYRON Groups, a premier modern marketing agency, featuring dynamic animations and seamless user experience.",
    image: amyronLogo,
    tech: ["React", "Tailwind CSS", "Framer Motion", "Vercel"],
    github: "#",
    live: "https://amyron-com.vercel.app/",
    featured: true
  },
  {
    id: 2,
    title: "JANUIN - SmartPay Guardian",
    category: "Web App",
    description: "A secure, next-generation payment processing and fintech platform featuring real-time transaction protection, encryption, and a sleek checkout experience.",
    image: smartpayLogo,
    tech: ["React", "FinTech", "Tailwind CSS", "Security", "Vercel"],
    github: "#",
    live: "https://smartpay-guardian.vercel.app/",
    featured: true
  },
  {
    id: 3,
    title: "E-Commerce Suite & Analytics",
    category: "Full Stack",
    description: "A comprehensive e-commerce dashboard featuring real-time inventory tracking, payment gateway integration, and animated sales analytics.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    github: "#",
    live: "#",
    featured: true
  },
  {
    id: 4,
    title: "AI Video & Portfolio Generator",
    category: "Web App",
    description: "An AI-powered platform allowing users to generate stunning video portfolios from custom prompts and resume data with automated cloud rendering.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
    tech: ["React 19", "Framer Motion", "Vite", "Tailwind"],
    github: "#",
    live: "#",
    featured: true
  },
  {
    id: 5,
    title: "Real-time Collaborative Workspace",
    category: "Full Stack",
    description: "A cloud workspace app featuring live multi-user editing, video rooms, interactive whiteboards, and instant Kanban board sync.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop",
    tech: ["Next.js", "WebSockets", "Express", "PostgreSQL"],
    github: "#",
    live: "#",
    featured: false
  },
  {
    id: 6,
    title: "Modern FinTech Banking App",
    category: "UI/UX",
    description: "A sleek, dark-mode financial dashboard design with custom interactive charts, crypto tracking, and instant peer-to-peer transfers.",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1000&auto=format&fit=crop",
    tech: ["React", "Chart.js", "Framer Motion", "Tailwind"],
    github: "#",
    live: "#",
    featured: false
  }
];

const categories = ["All", "Full Stack", "Web App", "UI/UX"];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projectsData 
    : projectsData.filter(project => project.category === activeCategory);

  return (
    <section 
      id="projects" 
      className="bg-[#0c0c0c] text-white pt-28 pb-36 px-6 md:px-12 w-full relative overflow-hidden font-sans border-t border-gray-900"
    >
      {/* Background Decorative Glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#ff2a2a]/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/3 right-0 w-[500px] h-[500px] bg-red-900/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div data-aos="fade-up">
            <div className="inline-block border border-red-500/30 bg-red-500/10 text-[#ff2a2a] rounded-full px-5 py-1.5 text-xs font-black tracking-widest uppercase mb-4">
              Portfolio & Works
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-none">
              Featured <span className="text-[#ff2a2a]">Projects</span>
            </h2>
          </div>
          
          <p data-aos="fade-up" data-aos-delay="150" className="text-gray-400 max-w-md text-base md:text-lg font-medium leading-relaxed">
            Here is a showcase of my latest web applications and creative projects. You can add your new projects one-by-one anytime!
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div data-aos="fade-up" data-aos-delay="250" className="flex flex-wrap items-center gap-3 mb-12 border-b border-gray-800 pb-6">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 cursor-pointer ${
                activeCategory === category
                  ? "bg-[#ff2a2a] text-white shadow-[0_0_20px_rgba(255,42,42,0.4)] scale-105"
                  : "bg-gray-900/80 text-gray-400 hover:text-white hover:bg-gray-800 border border-gray-800/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-10">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group bg-[#161616] border border-gray-800/80 hover:border-red-500/50 rounded-[2rem] overflow-hidden flex flex-col transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(255,42,42,0.15)] relative"
            >
              {/* Project Image Container */}
              <div className="relative w-full h-64 sm:h-72 overflow-hidden bg-gray-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#161616] via-transparent to-transparent opacity-80"></div>
                
                {/* Category Badge on Image */}
                <span className="absolute top-6 left-6 px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-xs font-bold tracking-wider uppercase text-white shadow-lg">
                  {project.category}
                </span>

                {/* Hover Action Buttons */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50 backdrop-blur-sm">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-full bg-[#ff2a2a] text-white font-bold text-sm hover:bg-white hover:text-black transition-colors shadow-xl flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 duration-300"
                  >
                    <span>Live Demo</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-full bg-white/20 hover:bg-white border border-white/40 text-white hover:text-black font-bold text-sm transition-colors shadow-xl flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 duration-300 delay-75"
                  >
                    <span>GitHub</span>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8 flex flex-col flex-1 justify-between bg-[#161616]">
                <div>
                  <h3 className="text-2xl font-black text-white mb-3 group-hover:text-[#ff2a2a] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-800/80">
                  {project.tech.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-black/40 border border-gray-800 rounded-lg text-xs font-semibold text-gray-300 group-hover:border-red-500/30 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Guide card for adding more projects */}
          <div
            data-aos="fade-up"
            data-aos-delay={filteredProjects.length * 100}
            className="border-2 border-dashed border-gray-800 hover:border-red-500/60 rounded-[2rem] p-8 flex flex-col items-center justify-center text-center bg-gradient-to-b from-[#161616]/40 to-transparent hover:bg-[#161616]/80 transition-all duration-500 min-h-[350px] group cursor-pointer"
            onClick={() => alert("To add your own work: open src/components/Projects.jsx and add a new item inside the `projectsData` array!")}
          >
            <div className="w-16 h-16 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center text-[#ff2a2a] mb-6 group-hover:scale-110 group-hover:bg-[#ff2a2a] group-hover:text-white transition-all duration-300 shadow-[0_0_25px_rgba(255,42,42,0.2)]">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <h3 className="text-2xl font-black text-white mb-2">Add Your Work Here</h3>
            <p className="text-gray-400 text-sm max-w-sm font-medium leading-relaxed mb-6">
              Ready to showcase your new project? Open <code className="text-[#ff2a2a] bg-black/50 px-2 py-0.5 rounded font-mono text-xs">Projects.jsx</code> and add your projects one by one!
            </p>
            <span className="text-xs font-bold tracking-wider uppercase text-[#ff2a2a] group-hover:underline">
              Click for Instructions &rarr;
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Projects;
