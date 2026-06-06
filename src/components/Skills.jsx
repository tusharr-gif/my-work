
import { skillsData } from '../data/skills';

const Skills = () => {
  return (
    <section id="skills" className="bg-[#ff2a2a] pt-20 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto">
        <div data-aos="fade-up" className="mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4">Technical Skills</h2>
          <p className="text-lg font-bold mb-12 leading-relaxed max-w-3xl text-red-50">
            A comprehensive overview of the tools, technologies, and frameworks I use to build scalable data solutions and applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-20">
          {Object.entries(skillsData).map(([category, skills], index) => {
            const formattedCategory = category.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
            return (
              <div
                key={category}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-black/90 p-8 rounded-2xl shadow-xl border border-white/10 hover:border-white/30 transition-colors"
              >
                <h3 className="text-xl font-black text-white mb-6 uppercase tracking-wide border-b border-white/20 pb-2">{formattedCategory}</h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-white/10 text-white text-sm font-semibold rounded-md hover:bg-white hover:text-black transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Torn paper divider at bottom */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 transform translate-y-1">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Skills;