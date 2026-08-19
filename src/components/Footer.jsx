import React from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ArrowUp, 
  Heart, 
  Code2,
  Sparkles
} from 'lucide-react';
import { personalInfo, navLinks } from '../data/portfolio';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-slate-950 border-t border-slate-800/80 pt-16 pb-12 overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand & Bio */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center text-white shadow-md shadow-indigo-500/20">
                <span className="font-mono text-xs font-bold">MS</span>
              </div>
              <span className="font-sans font-bold text-lg text-white">
                {personalInfo.name}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              Student Developer at Swami Vivekanand Institute of Engineering and Technology. Crafting clean, responsive web solutions with modern frontend tech.
            </p>

            <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>Based in Chandigarh, India</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase text-slate-300 font-semibold tracking-wider">
              Quick Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-slate-400 hover:text-indigo-400 transition-colors py-1 inline-block"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Social Links & Back to Top */}
          <div className="md:col-span-3 flex flex-col justify-between space-y-4">
            <div>
              <h4 className="text-xs font-mono uppercase text-slate-300 font-semibold tracking-wider mb-3">
                Connect
              </h4>
              <div className="flex items-center gap-2.5">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4 text-blue-400" />
                </a>

                <a
                  href={`mailto:${personalInfo.email}`}
                  className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700 transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4 text-rose-400" />
                </a>
              </div>
            </div>

            <div>
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-all hover:-translate-y-0.5"
              >
                <span>Back to top</span>
                <ArrowUp className="w-3.5 h-3.5 text-indigo-400" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} <span className="text-slate-300 font-medium">Manpreet Singh</span>. All rights reserved.
          </p>

          <p className="flex items-center gap-1.5">
            <span>Built with</span>
            <span className="text-indigo-400 font-semibold">React</span>
            <span>&</span>
            <span className="text-cyan-400 font-semibold">Tailwind CSS</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
