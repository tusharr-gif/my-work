
import { experienceData } from '../data/experience';

const Achievements = () => {
  return (
    <section id="achievements" className="bg-[#0a0a0a] pt-24 pb-24 px-6 md:px-12 w-full relative overflow-hidden font-sans border-t border-gray-800">
      <div className="max-w-6xl mx-auto relative z-10">

        <div data-aos="fade-up" className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Achievements</h2>
          <div className="w-24 h-1 bg-[#ff2a2a] mx-auto mb-6"></div>
          <p className="text-lg text-gray-400 font-medium max-w-2xl mx-auto">
            Milestones and recognition from my academic and technical journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experienceData.achievements.map((achievement, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 150}
              className="bg-[#1a1a1a] p-8 rounded-2xl border border-gray-800 hover:border-[#ff2a2a] transition-all duration-300 group flex flex-col h-full"
            >
              <div className="w-12 h-12 rounded-full bg-[#2a2a2a] group-hover:bg-[#ff2a2a] flex items-center justify-center mb-6 transition-colors duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#ff2a2a] transition-colors">{achievement.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow">
                {achievement.description}
              </p>
              {achievement.points && (
                <ul className="text-gray-400 text-sm list-disc pl-4 space-y-1 mt-auto">
                  {achievement.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Achievements;