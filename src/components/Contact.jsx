import { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';
import { useInView } from '../hooks/useInView';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [ref, isInView] = useInView();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    const subject = encodeURIComponent(`Message from ${formData.name}`);
    const body = encodeURIComponent(
      `Hi Falgun,\n\n${formData.message}\n\nBest,\n${formData.name}\n${formData.email}`
    );

    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`mb-12 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="text-xs font-mono text-cyan-500 tracking-widest uppercase mb-3 block">
            Contact
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Get in touch
          </h2>
          <p className="text-sm text-zinc-500 mt-2">
            Have a project or opportunity? Send me a message.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <div className={`lg:col-span-2 space-y-4 ${isInView ? 'animate-fade-in-up delay-200' : 'opacity-0'}`}>
            {/* Email */}
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-3 p-4 rounded-xl bg-zinc-800/40 border border-zinc-700/50 card-hover group"
            >
              <div className="p-2 rounded-lg bg-zinc-700/50 text-cyan-400 group-hover:bg-cyan-500/10 transition-colors">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">Email</p>
                <p className="text-sm font-semibold text-zinc-300 group-hover:text-white transition-colors">
                  {personalInfo.email}
                </p>
              </div>
            </a>

            {/* Location */}
            <div className="flex items-center gap-3 p-4 rounded-xl bg-zinc-800/40 border border-zinc-700/50">
              <div className="p-2 rounded-lg bg-zinc-700/50 text-cyan-400">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">Location</p>
                <p className="text-sm font-semibold text-zinc-300">{personalInfo.location}</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-zinc-800/40 border border-zinc-700/50 text-zinc-400 hover:text-white hover:border-zinc-500 transition-all text-sm font-medium"
              >
                <GithubIcon className="w-4 h-4" />
                GitHub
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-zinc-800/40 border border-zinc-700/50 text-zinc-400 hover:text-white hover:border-zinc-500 transition-all text-sm font-medium"
              >
                <LinkedinIcon className="w-4 h-4" />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`lg:col-span-3 ${isInView ? 'animate-fade-in-up delay-300' : 'opacity-0'}`}>
            <div className="p-6 sm:p-8 rounded-2xl bg-zinc-800/40 border border-zinc-700/50">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <CheckCircle2 className="w-12 h-12 text-cyan-400 mx-auto" />
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">Message ready!</h4>
                    <p className="text-sm text-zinc-400">
                      Your mail app has been opened with the message.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', message: '' });
                    }}
                    className="px-4 py-2 rounded-lg bg-zinc-700 hover:bg-zinc-600 text-sm text-zinc-300 transition-colors"
                  >
                    Send another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-medium text-zinc-400 mb-1.5">
                        Name <span className="text-cyan-500">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="w-full px-4 py-3 rounded-lg bg-zinc-900/60 border border-zinc-700/60 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-500/60 transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-medium text-zinc-400 mb-1.5">
                        Email <span className="text-cyan-500">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className="w-full px-4 py-3 rounded-lg bg-zinc-900/60 border border-zinc-700/60 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-500/60 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-medium text-zinc-400 mb-1.5">
                      Message <span className="text-cyan-500">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or opportunity..."
                      className="w-full px-4 py-3 rounded-lg bg-zinc-900/60 border border-zinc-700/60 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-500/60 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white text-zinc-900 font-semibold text-sm hover:bg-zinc-200 transition-all hover:scale-[1.01] active:scale-[0.99]"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
