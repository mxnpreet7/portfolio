import React from 'react';
import { 
  FolderGit2, 
  Github, 
  ExternalLink, 
  Code2, 
  Layers, 
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { projectsData } from '../data/portfolio';

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-purple-500/10 text-purple-400 border border-purple-500/20">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            {projectsData.subtitle}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.projects.map((project) => (
            <div
              key={project.id}
              className="glass-card glass-card-hover rounded-3xl overflow-hidden border border-slate-800 flex flex-col justify-between group"
            >
              <div>
                {/* Project Header Banner / Visual Mockup */}
                <div className={`relative h-48 bg-gradient-to-br ${project.imageGradient} p-6 flex flex-col justify-between overflow-hidden`}>
                  {/* Subtle decorative grid/overlay */}
                  <div className="absolute inset-0 bg-black/25 backdrop-blur-[2px]"></div>
                  
                  {/* Top Bar inside banner */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-black/40 text-white/90 border border-white/10 backdrop-blur-md">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-amber-400/90 text-slate-950 shadow-sm">
                        <Sparkles className="w-3 h-3" />
                        <span>Featured</span>
                      </span>
                    )}
                  </div>

                  {/* Icon & Title inside banner */}
                  <div className="relative z-10">
                    <div className="w-10 h-10 rounded-xl bg-white/20 border border-white/30 backdrop-blur-md flex items-center justify-center text-white mb-2 shadow-inner group-hover:scale-110 transition-transform">
                      <Code2 className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold text-white tracking-tight drop-shadow-md">
                      {project.name}
                    </h3>
                  </div>
                </div>

                {/* Project Content Details */}
                <div className="p-6 space-y-4">
                  <p className="text-sm text-slate-300 leading-relaxed min-h-[72px]">
                    {project.description}
                  </p>

                  {/* Tech Stack Badges */}
                  <div className="pt-2">
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-slate-800/90 text-slate-300 border border-slate-700/60 hover:border-indigo-500/40 hover:text-indigo-300 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons: GitHub & Live Demo */}
              <div className="p-6 pt-0">
                <div className="pt-4 border-t border-slate-800/80 flex items-center gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-slate-200 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/60 hover:border-slate-600 transition-all duration-200 hover:-translate-y-0.5"
                  >
                    <Github className="w-4 h-4 text-slate-300" />
                    <span>Source Code</span>
                  </a>

                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-md shadow-indigo-600/20 hover:shadow-indigo-600/35 transition-all duration-200 hover:-translate-y-0.5"
                  >
                    <span>Live Demo</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Callout Footer */}
        <div className="mt-14 text-center">
          <a
            href="https://github.com/mxnpreet7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-indigo-500/40 text-slate-300 hover:text-white text-xs sm:text-sm font-medium transition-all hover:-translate-y-0.5 shadow-sm"
          >
            <Github className="w-4 h-4 text-indigo-400" />
            <span>Explore more repositories on GitHub @mxnpreet7</span>
            <ExternalLink className="w-3.5 h-3.5 ml-1 text-slate-500" />
          </a>
        </div>

      </div>
    </section>
  );
}
