import { ArrowRight, Download, MapPin } from 'lucide-react';
import TypingHeading from './TypingHeading';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Radial gradient glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/[0.04] rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-violet-500/[0.04] rounded-full blur-[100px]" />

        {/* Floating geometric shapes */}
        <div className="animate-float absolute top-32 right-[15%] w-20 h-20 border border-zinc-600/15 rounded-2xl rotate-12" />
        <div className="animate-float-slow absolute top-[60%] right-[10%] w-14 h-14 border border-zinc-600/15 rounded-full" />
        <div className="animate-float-slower absolute top-[40%] left-[5%] w-10 h-10 border border-zinc-600/20 rounded-lg rotate-45" />

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '64px 64px',
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
        {/* Status badge */}
        <div className="animate-fade-in-up flex items-center gap-3 mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-800/80 border border-zinc-700/60 text-xs font-medium text-zinc-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Open to opportunities
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-800/80 border border-zinc-700/60 text-xs font-medium text-zinc-400">
            <MapPin className="w-3 h-3" />
            {personalInfo.location}
          </div>
        </div>

        {/* Main content */}
        <div className="max-w-3xl">
          <p className="animate-fade-in-up delay-100 text-sm font-mono tracking-wider text-zinc-500 uppercase mb-3">
            Hi, I'm
          </p>

          <h1 className="animate-fade-in-up delay-200 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tight mb-4 leading-[0.95]">
            {personalInfo.name}
          </h1>

          {/* Dynamic typing */}
          <div className="animate-fade-in-up delay-300 mb-8">
            <TypingHeading titles={personalInfo.typingTitles} />
          </div>

          {/* Description */}
          <p className="animate-fade-in-up delay-400 text-base sm:text-lg text-zinc-400 leading-relaxed mb-10 max-w-xl">
            {personalInfo.about}
          </p>

          {/* CTAs */}
          <div className="animate-fade-in-up delay-500 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-zinc-900 font-semibold text-sm hover:bg-zinc-200 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              View Projects
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-zinc-800 text-white border border-zinc-700 font-semibold text-sm hover:bg-zinc-700 hover:border-zinc-600 transition-all"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="animate-fade-in-up delay-600 absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-[10px] font-mono text-zinc-600 tracking-widest uppercase">Scroll</span>
          <div className="w-5 h-8 rounded-full border-2 border-zinc-600 flex justify-center pt-1.5">
            <div className="w-1 h-2 rounded-full bg-zinc-500 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
