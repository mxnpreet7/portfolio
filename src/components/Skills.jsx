import React, { useState } from 'react';
import { 
  Terminal, 
  Layout, 
  Wrench, 
  Code, 
  Boxes, 
  Palette, 
  FileCode, 
  Layers, 
  GitBranch, 
  Github, 
  Laptop, 
  Figma,
  Sparkles,
  Cpu
} from 'lucide-react';
import { skillsData } from '../data/portfolio';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  const getSkillIcon = (iconName) => {
    switch (iconName) {
      case 'Terminal': return <Terminal className="w-5 h-5" />;
      case 'Layout': return <Layout className="w-5 h-5" />;
      case 'Wrench': return <Wrench className="w-5 h-5" />;
      case 'Boxes': return <Boxes className="w-5 h-5" />;
      case 'Palette': return <Palette className="w-5 h-5" />;
      case 'FileCode': return <FileCode className="w-5 h-5" />;
      case 'Layers': return <Layers className="w-5 h-5" />;
      case 'GitBranch': return <GitBranch className="w-5 h-5" />;
      case 'Github': return <Github className="w-5 h-5" />;
      case 'Laptop': return <Laptop className="w-5 h-5" />;
      case 'Figma': return <Figma className="w-5 h-5" />;
      default: return <Code className="w-5 h-5" />;
    }
  };

  const categories = skillsData.categories;
  const filteredCategories = activeTab === 'all' 
    ? categories 
    : categories.filter(c => c.name.toLowerCase().includes(activeTab.toLowerCase()));

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-slate-950/40">
      {/* Glow Effects */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            <Cpu className="w-3.5 h-3.5" />
            <span>Tech Stack</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            {skillsData.subtitle}
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                activeTab === 'all'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-700/60'
              }`}
            >
              All Skills
            </button>
            {categories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setActiveTab(cat.name)}
                className={`px-4 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                  activeTab === cat.name
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                    : 'bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-700/60'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredCategories.map((category) => (
            <div
              key={category.name}
              className="glass-card glass-card-hover rounded-3xl p-6 sm:p-7 border border-slate-800 flex flex-col justify-between space-y-6"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-2xl bg-gradient-to-br ${category.color} border flex items-center justify-center`}>
                    {getSkillIcon(category.icon)}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      {category.name}
                    </h3>
                    <span className="text-xs text-slate-400 font-mono">
                      {category.skills.length} Technologies
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-400 mb-6 leading-relaxed">
                  {category.description}
                </p>

                {/* Skills List in Category */}
                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group flex items-center justify-between p-3 rounded-xl bg-slate-800/60 hover:bg-slate-800 border border-slate-700/40 hover:border-indigo-500/30 transition-all duration-200"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-1.5 rounded-lg bg-slate-900 text-indigo-400 group-hover:text-cyan-400 group-hover:scale-110 transition-all">
                          {getSkillIcon(skill.icon)}
                        </div>
                        <div>
                          <span className="text-sm font-semibold text-slate-200 group-hover:text-white block">
                            {skill.name}
                          </span>
                          <span className="text-[11px] text-slate-400 font-mono">
                            {skill.tag}
                          </span>
                        </div>
                      </div>

                      <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded-md bg-slate-900/80 text-slate-300 border border-slate-700/50">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-mono">
                <span>Verified Stack</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
