import React from 'react';
import { 
  User, 
  GraduationCap, 
  MapPin, 
  Sparkles, 
  Code2, 
  Layers, 
  Target, 
  BookOpen,
  CheckCircle2
} from 'lucide-react';
import { aboutData, personalInfo } from '../data/portfolio';

export default function About() {
  const iconMap = {
    Code2: <Code2 className="w-6 h-6 text-indigo-400" />,
    GraduationCap: <GraduationCap className="w-6 h-6 text-cyan-400" />,
    MapPin: <MapPin className="w-6 h-6 text-rose-400" />,
    Sparkles: <Sparkles className="w-6 h-6 text-amber-400" />
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            <User className="w-3.5 h-3.5" />
            <span>Discover</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            {aboutData.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Highlight Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {aboutData.highlights.map((item, index) => (
              <div 
                key={index}
                className="glass-card glass-card-hover p-5 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-4"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center shadow-inner">
                  {iconMap[item.icon] || <Sparkles className="w-6 h-6 text-indigo-400" />}
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-1">
                    {item.label}
                  </span>
                  <p className="text-base font-bold text-white leading-snug">
                    {item.value}
                  </p>
                  {item.detail && (
                    <p className="text-xs text-slate-400 mt-1">
                      {item.detail}
                    </p>
                  )}
                </div>
              </div>
            ))}

            {/* Quick Status Box */}
            <div className="sm:col-span-2 p-5 rounded-2xl bg-gradient-to-r from-indigo-950/40 via-slate-900/60 to-slate-900/40 border border-indigo-500/20">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 mt-0.5">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">Primary Goal</h3>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    Seeking internship and junior developer opportunities where I can apply my React, JavaScript, and UI engineering skills to build real-world products.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Story */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-800/80 space-y-5 shadow-xl">
              
              <div className="flex items-center gap-2 pb-3 border-b border-slate-800">
                <BookOpen className="w-5 h-5 text-indigo-400" />
                <h3 className="text-lg font-bold text-white">Professional Journey</h3>
              </div>

              {aboutData.paragraphs.map((p, idx) => (
                <p key={idx} className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {p}
                </p>
              ))}

              {/* What I Focus On Tags */}
              <div className="pt-4 border-t border-slate-800/80">
                <span className="text-xs font-mono uppercase text-slate-400 tracking-wider block mb-3">
                  Core Engineering Values
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    "Clean, Semantic React & Component Design",
                    "Pixel-Perfect Mobile-First Layouts",
                    "Performance & Responsive Web Standards",
                    "Strong Foundations in Logic & Data Structures"
                  ].map((value, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{value}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
