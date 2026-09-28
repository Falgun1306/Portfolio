import { personalInfo } from '../data/portfolioData';
import { useInView } from '../hooks/useInView';

export default function About() {
  const [ref, isInView] = useInView();

  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`mb-12 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="text-xs font-mono text-cyan-500 tracking-widest uppercase mb-3 block">
            About
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Who I am
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* About text */}
          <div className={`${isInView ? 'animate-fade-in-up delay-200' : 'opacity-0'}`}>
            <p className="text-base sm:text-lg text-zinc-400 leading-relaxed mb-6">
              {personalInfo.about}
            </p>
            <p className="text-sm text-zinc-500 leading-relaxed">
              Currently pursuing B.E. in Computer Engineering at VGEC (GTU) with a CGPA of 8.85/10. 
              I focus on building end-to-end web applications with clean architecture and 
              practical utility.
            </p>
          </div>

          {/* Quick stats */}
          <div className={`grid grid-cols-2 gap-4 ${isInView ? 'animate-fade-in-up delay-300' : 'opacity-0'}`}>
            {[
              { value: '8.85', label: 'CGPA (GTU)', suffix: '/10' },
              { value: '270+', label: 'DSA Problems Solved' },
              { value: '3', label: 'Production Projects' },
              { value: '3+', label: 'Months Internship' },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-zinc-900/50 border border-zinc-800/80 card-hover"
              >
                <div className="text-2xl sm:text-3xl font-bold text-white font-mono mb-1">
                  {stat.value}
                  {stat.suffix && <span className="text-zinc-600 text-lg">{stat.suffix}</span>}
                </div>
                <div className="text-xs text-zinc-500 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
