import React from 'react';
import { 
  ArrowRight, 
  Download, 
  Mail, 
  Github, 
  Linkedin, 
  MapPin, 
  Sparkles, 
  Code2, 
  GraduationCap,
  ExternalLink,
  ChevronDown
} from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export default function Hero() {
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadResume = () => {
    // Generate an accessible clean resume text or trigger download
    const resumeText = `MANPREET SINGH - RESUME
Role: Student Developer
College: Swami Vivekanand Institute of Engineering and Technology (SVIET)
Location: Chandigarh, India
Email: iammanpreet640@gmail.com
GitHub: https://github.com/mxnpreet7
LinkedIn: https://www.linkedin.com/in/manpreet-singh-7063703b2/

TECHNICAL SKILLS:
- Languages: JavaScript (ES6+), Python, Java, C++
- Frontend: React.js, Tailwind CSS, HTML5, CSS3
- Tools: Git, GitHub, VS Code, Figma

EDUCATION:
- Swami Vivekanand Institute of Engineering and Technology (SVIET), Chandigarh, India
- Bachelor of Technology / Computer Science & Engineering Studies
`;
    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Manpreet_Singh_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background Decorative Glow Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[650px] h-[500px] bg-gradient-to-tr from-indigo-600/15 via-purple-600/15 to-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-subtle"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center max-w-3xl mx-auto space-y-8">
          
          {/* Top Status & Location Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-sm backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Available for Internships & Junior Roles</span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-slate-800/80 text-slate-300 border border-slate-700/50 backdrop-blur-md">
              <MapPin className="w-3.5 h-3.5 text-rose-400" />
              <span>Chandigarh, India</span>
            </div>
          </div>

          {/* Greeting & Name */}
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-indigo-400 font-mono text-sm sm:text-base font-semibold tracking-wider uppercase">
              <Sparkles className="w-4 h-4" />
              <span>Hello World, I'm</span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-tight">
              <span className="block text-slate-100">MANPREET</span>
              <span className="text-gradient">SINGH</span>
            </h1>

            <div className="pt-2">
              <div className="inline-block px-4 py-1.5 rounded-xl bg-slate-800/90 border border-indigo-500/30 text-indigo-300 font-mono text-base sm:text-lg font-bold tracking-wider shadow-inner">
                {personalInfo.role}
              </div>
            </div>
          </div>

          {/* Short Introduction */}
          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Student developer at <span className="text-white font-medium">Swami Vivekanand Institute of Engineering and Technology</span>. Passionate about crafting modern, responsive, and intuitive web applications with <span className="text-indigo-400 font-medium">React</span>, <span className="text-cyan-400 font-medium">Tailwind CSS</span>, and <span className="text-amber-400 font-medium">JavaScript</span>.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-2">
            <button
              onClick={() => handleScrollTo('projects')}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-cyan-500 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all duration-200 hover:-translate-y-0.5"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={handleDownloadResume}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm sm:text-base font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700/80 border border-slate-700 hover:border-slate-600 transition-all duration-200 hover:-translate-y-0.5 shadow-sm"
            >
              <Download className="w-4 h-4 text-indigo-400" />
              <span>Download Resume</span>
            </button>

            <button
              onClick={() => handleScrollTo('contact')}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm sm:text-base font-semibold text-slate-300 hover:text-white bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 hover:border-indigo-500/40 transition-all duration-200 hover:-translate-y-0.5"
            >
              <Mail className="w-4 h-4 text-cyan-400" />
              <span>Contact Me</span>
            </button>
          </div>

          {/* Social Links & Tech Pill Highlights */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-6 border-t border-slate-800/80 max-w-xl mx-auto">
            {/* Social Buttons */}
            <div className="flex items-center gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-800/90 text-slate-300 hover:text-white hover:bg-slate-700 border border-slate-700/60 hover:border-indigo-500/40 transition-all duration-200 hover:-translate-y-0.5 shadow-sm"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-800/90 text-slate-300 hover:text-white hover:bg-slate-700 border border-slate-700/60 hover:border-blue-500/40 transition-all duration-200 hover:-translate-y-0.5 shadow-sm"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5 text-blue-400" />
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="p-3 rounded-xl bg-slate-800/90 text-slate-300 hover:text-white hover:bg-slate-700 border border-slate-700/60 hover:border-rose-500/40 transition-all duration-200 hover:-translate-y-0.5 shadow-sm"
                aria-label="Send Email"
              >
                <Mail className="w-5 h-5 text-rose-400" />
              </a>
            </div>

            {/* Quick Micro Badges */}
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <span className="px-2.5 py-1 rounded-md bg-slate-800 border border-slate-700/50">React</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-800 border border-slate-700/50">Tailwind</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-800 border border-slate-700/50">JavaScript</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-800 border border-slate-700/50">Python</span>
            </div>
          </div>

          {/* Scroll Down Indicator */}
          <div className="pt-4 flex justify-center">
            <button
              onClick={() => handleScrollTo('about')}
              className="text-slate-400 hover:text-indigo-400 transition-colors p-2 animate-bounce"
              aria-label="Scroll to About section"
            >
              <ChevronDown className="w-5 h-5" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
