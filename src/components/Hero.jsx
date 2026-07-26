import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import heroImage from '../assets/about/tushar_cartoon.jpg';

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out'
    });
  }, []);

  return (
    <section id="home" className="relative w-full min-h-screen overflow-hidden bg-[#ff2a2a] flex flex-col justify-end pt-24 md:pt-28 font-sans">
      
      {/* Decorative dark glow behind illustration */}
      <div className="absolute right-0 top-1/4 w-80 h-80 md:w-[500px] md:h-[500px] bg-black/30 rounded-full blur-[100px] pointer-events-none z-0"></div>

      {/* Right Side: Developer Illustration with Dramatic Vignette & Gradient Masking */}
      <div 
        data-aos="fade-left"
        data-aos-delay="200"
        className="absolute right-0 bottom-0 w-full md:w-[65%] lg:w-[55%] h-[75vh] md:h-[92vh] flex justify-end items-end z-10 pointer-events-none select-none overflow-hidden"
      >
        {/* The Image */}
        <img 
          src={heroImage} 
          alt="Tushar Sonar" 
          className="w-full h-full object-cover object-top md:object-center transform scale-105 md:scale-110 translate-y-2 origin-center"
        />

        {/* Top Red Gradient Overlay (blends top of hair into red background) */}
        <div className="absolute top-0 left-0 right-0 h-32 md:h-48 bg-gradient-to-b from-[#ff2a2a] via-[#ff2a2a]/80 to-transparent"></div>

        {/* Bottom Red Gradient Overlay (blends lower jacket into red background) */}
        <div className="absolute bottom-0 left-0 right-0 h-48 md:h-64 bg-gradient-to-t from-[#ff2a2a] via-[#ff2a2a]/90 to-transparent"></div>

        {/* Left Red Gradient Overlay (blends shoulder into text section) */}
        <div className="absolute top-0 bottom-0 left-0 w-48 md:w-80 bg-gradient-to-r from-[#ff2a2a] via-[#ff2a2a]/80 to-transparent"></div>

        {/* Right Red Gradient Overlay (soft right edge) */}
        <div className="absolute top-0 bottom-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[#ff2a2a] via-[#ff2a2a]/60 to-transparent"></div>

        {/* Inset Shadow for seamless corner feathering */}
        <div className="absolute inset-0 shadow-[inset_0_0_80px_40px_#ff2a2a]"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-20 px-6 pb-12 md:pb-0 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-end text-left w-full flex-1 min-h-[75vh] md:min-h-0">
        
        {/* Left Side: Text and Buttons */}
        <div className="flex flex-col justify-center items-start text-left max-w-2xl w-full md:w-1/2 py-12 md:pb-28 relative z-20">
          {/* Main Heading */}
          <h1 
            data-aos="fade-up"
            className="text-white text-4xl md:text-6xl font-black mb-4 tracking-tight leading-tight"
          >
            Hi, I’m a <br /> <span className="text-transparent [-webkit-text-stroke:1.5px_black] drop-shadow-sm">Full Stack Developer</span>
          </h1>

          {/* Subheading */}
          <p 
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-white text-base md:text-xl font-bold mb-8 max-w-lg drop-shadow-md leading-relaxed"
          >
            I build fast, scalable and modern web applications using React, Node.js and Tailwind CSS.
          </p>

          {/* Buttons */}
          <div 
            data-aos="fade-up"
            data-aos-delay="400"
            className="flex flex-row flex-wrap items-center gap-4 w-full"
          >
            {/* Primary Button */}
            <a 
              href="#projects"
              className="px-6 py-3 text-sm md:text-base rounded-full bg-white text-black font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg inline-block text-center"
            >
              View My Work
            </a>
            
            {/* Secondary Button - Glassmorphism style */}
            <a 
              href="#contact"
              className="px-6 py-3 text-sm md:text-base rounded-full bg-black/40 border border-white/80 text-white font-bold hover:bg-black/60 transition-all duration-300 transform hover:scale-105 backdrop-blur-md shadow-lg inline-block text-center"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        data-aos="fade-up"
        data-aos-delay="800"
        className="hidden md:block absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 pointer-events-none"
      >
        <div className="animate-bounce">
          <svg 
            className="w-6 h-6 text-black drop-shadow-[0_1px_2px_rgba(255,255,255,0.6)]" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="3" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
