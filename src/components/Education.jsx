import React from 'react';
import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  BookOpen, 
  Award, 
  CheckCircle2,
  Building2
} from 'lucide-react';
import { educationData } from '../data/portfolio';

export default function Education() {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-slate-950/30">
      {/* Glow Effect */}
      <div className="absolute top-1/2 right-10 w-72 h-72 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & <span className="text-gradient">Learning</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            {educationData.subtitle}
          </p>
        </div>

        {/* Timeline / Card Structure */}
        <div className="max-w-3xl mx-auto">
          {educationData.timeline.map((item, index) => (
            <div
              key={index}
              className="relative glass-card glass-card-hover rounded-3xl p-6 sm:p-8 border border-slate-800 space-y-6"
            >
              {/* Top Row: Degree & Status */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800/80">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white leading-tight">
                      {item.degree}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-indigo-400 mt-0.5 flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5" />
                      <span>{item.institution}</span>
                    </p>
                  </div>
                </div>

                <div className="flex sm:flex-col items-start sm:items-end gap-1.5">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    {item.status}
                  </span>
                  <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{item.duration}</span>
                  </span>
                </div>
              </div>

              {/* Location & Details */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300 font-mono">
                  <MapPin className="w-4 h-4 text-rose-400 shrink-0" />
                  <span>{item.location}</span>
                </div>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {item.description}
                </p>

                {/* Highlights List */}
                <div className="pt-3 border-t border-slate-800/80">
                  <span className="text-xs font-mono uppercase text-slate-400 tracking-wider block mb-3">
                    Academic Focus & Coursework
                  </span>
                  <div className="space-y-2.5">
                    {item.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
