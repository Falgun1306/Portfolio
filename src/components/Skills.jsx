import { Code, Layout, Server, Database, Wrench } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';
import { useInView } from '../hooks/useInView';

const iconMap = {
  code: Code,
  layout: Layout,
  server: Server,
  database: Database,
  wrench: Wrench,
};

const colorMap = {
  code: 'text-cyan-400',
  layout: 'text-emerald-400',
  server: 'text-violet-400',
  database: 'text-amber-400',
  wrench: 'text-sky-400',
};

export default function Skills() {
  const [ref, isInView] = useInView();

  return (
    <section id="skills" className="py-20 md:py-28 relative">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`mb-12 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="text-xs font-mono text-cyan-500 tracking-widest uppercase mb-3 block">
            Skills
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Tech Stack
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories.map((cat, index) => {
            const IconComponent = iconMap[cat.icon] || Code;
            const colorClass = colorMap[cat.icon] || 'text-cyan-400';

            return (
              <div
                key={index}
                className={`p-5 rounded-2xl bg-zinc-800/40 border border-zinc-700/50 card-hover ${
                  isInView ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${150 + index * 100}ms` }}
              >
                {/* Category header */}
                <div className="flex items-center gap-2.5 mb-4">
                  <div className={`p-1.5 rounded-lg bg-zinc-700/50 ${colorClass}`}>
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-white">{cat.category}</h3>
                </div>

                {/* Skill pills */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1.5 rounded-lg bg-zinc-700/30 border border-zinc-600/40 text-xs text-zinc-300 font-medium hover:border-zinc-500 hover:text-white transition-colors cursor-default"
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
    </section>
  );
}
