import { ExternalLink, Star, ArrowUpRight, Globe, Lock } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { projects } from '../data/portfolioData';
import { useInView } from '../hooks/useInView';

function ProjectCard({ project, index }) {
  const [ref, isInView] = useInView();
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`group relative rounded-2xl bg-zinc-900/60 border border-zinc-800/80 overflow-hidden card-hover transition-all duration-300 hover:border-zinc-700/80 ${
        isInView ? 'animate-fade-in-up' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {/* Accent top border */}
      <div
        className="h-[2px] w-full"
        style={{
          background: `linear-gradient(90deg, transparent, ${project.accentColor}, transparent)`,
        }}
      />

      {/* Featured shimmer */}
      {project.isFeatured && <div className="absolute inset-0 shimmer pointer-events-none" />}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
        {/* Project Image Showcase */}
        <div
          className={`lg:col-span-6 xl:col-span-7 flex flex-col justify-center bg-zinc-950/40 p-4 sm:p-6 lg:p-7 border-b lg:border-b-0 ${
            isEven ? 'lg:order-1 lg:border-r border-zinc-800/60' : 'lg:order-2 lg:border-l border-zinc-800/60'
          }`}
        >
          {/* Mock Browser Window Container */}
          <div className="rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900/90 shadow-2xl transition-all duration-300 group-hover:border-zinc-700/80 group-hover:shadow-cyan-500/5">
            {/* Browser top bar */}
            <div className="flex items-center justify-between px-3 py-2 bg-zinc-900 border-b border-zinc-800/80 text-zinc-400 select-none">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
              </div>
              <div className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-zinc-950/60 border border-zinc-800 text-[11px] font-mono text-zinc-400 max-w-[200px] sm:max-w-xs truncate">
                <Lock className="w-2.5 h-2.5 text-emerald-400 shrink-0" />
                <span className="truncate">{project.liveDemo.replace('https://', '')}</span>
              </div>
              <div className="w-8" />
            </div>

            {/* Image Container with Hover Zoom and Link */}
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noreferrer"
              className="block relative overflow-hidden group/preview aspect-[16/10] bg-zinc-950"
              aria-label={`Open live demo of ${project.title}`}
            >
              <img
                src={project.image}
                alt={`${project.title} screenshot`}
                className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover/preview:scale-105"
                loading="lazy"
              />

              {/* Overlay with CTA on hover */}
              <div className="absolute inset-0 bg-zinc-950/50 backdrop-blur-[2px] opacity-0 group-hover/preview:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white text-zinc-900 font-semibold text-xs shadow-lg transform translate-y-2 group-hover/preview:translate-y-0 transition-transform duration-300">
                  <Globe className="w-3.5 h-3.5" />
                  View Live Demo
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </a>
          </div>
        </div>

        {/* Project Details Content */}
        <div
          className={`lg:col-span-6 xl:col-span-5 p-6 sm:p-8 flex flex-col justify-between ${
            isEven ? 'lg:order-2' : 'lg:order-1'
          }`}
        >
          <div>
            {/* Header row */}
            <div className="flex items-start justify-between gap-3 mb-3">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1.5">
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {project.title}
                  </h3>
                  {project.isFeatured && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/20">
                      <Star className="w-3 h-3 fill-amber-400" />
                      Featured
                    </span>
                  )}
                </div>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>

            {/* Problem */}
            <div className="p-3 rounded-lg bg-zinc-800/40 border border-zinc-800/60 mb-5">
              <p className="text-xs text-zinc-400 leading-relaxed">
                <span className="font-semibold text-zinc-300">Problem:</span> {project.problem}
              </p>
            </div>

            {/* Key Features */}
            <div className="mb-5">
              <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 block mb-2">
                Key Features
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.features.map((feature, fIdx) => (
                  <div
                    key={fIdx}
                    className="flex items-center gap-2 text-xs sm:text-sm text-zinc-300"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5 shrink-0" style={{ color: project.accentColor }} />
                    <span className="truncate">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="mb-6">
              <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 block mb-2">
                Technologies
              </span>
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-zinc-800/70 text-zinc-300 border border-zinc-700/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Links & CTA */}
          <div className="flex items-center gap-3 pt-4 border-t border-zinc-800/80">
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-xs sm:text-sm transition-all shadow-sm"
                style={{
                  backgroundColor: `${project.accentColor}20`,
                  color: project.accentColor,
                  borderColor: `${project.accentColor}40`,
                  borderWidth: '1px',
                }}
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Live Demo
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-800/80 text-zinc-300 hover:text-white hover:bg-zinc-700 border border-zinc-700/60 font-medium text-xs sm:text-sm transition-all"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                Source Code
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [ref, isInView] = useInView();

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={ref} className={`mb-12 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="text-xs font-mono text-cyan-500 tracking-widest uppercase mb-3 block">
            Projects
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            What I've built
          </h2>
          <p className="text-sm text-zinc-400 mt-2 max-w-lg">
            Production-ready web applications built to solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
