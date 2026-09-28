import { Award, Calendar } from 'lucide-react';
import { experience } from '../data/portfolioData';
import { useInView } from '../hooks/useInView';

export default function Experience() {
  const [ref, isInView] = useInView();

  return (
    <section id="experience" className="py-20 md:py-28 relative">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`mb-12 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="text-xs font-mono text-cyan-500 tracking-widest uppercase mb-3 block">
            Experience
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Where I've worked
          </h2>
        </div>

        {/* Experience Cards */}
        <div className="space-y-6">
          {experience.map((exp, index) => (
            <div
              key={index}
              className={`p-6 sm:p-8 rounded-2xl bg-zinc-800/40 border border-zinc-700/50 card-hover ${
                isInView ? 'animate-fade-in-up delay-200' : 'opacity-0'
              }`}
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-5">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                    {exp.role}
                  </h3>
                  <p className="text-sm text-cyan-400 font-semibold">{exp.company}</p>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-700/50 border border-zinc-600/40 text-xs font-mono text-zinc-400">
                    <Calendar className="w-3 h-3" />
                    {exp.duration}
                  </span>
                  {exp.badge && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-semibold text-amber-400">
                      <Award className="w-3 h-3" />
                      {exp.badge}
                    </span>
                  )}
                </div>
              </div>

              {/* Highlights */}
              <ul className="space-y-3">
                {exp.highlights.map((highlight, hIdx) => (
                  <li
                    key={hIdx}
                    className="flex items-start gap-3 text-sm text-zinc-400 leading-relaxed"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 shrink-0" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
