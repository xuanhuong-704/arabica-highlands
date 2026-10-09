import React, { useState } from 'react';
import { PILLAR_STRATEGIES } from '../data/chiengLaoData';
import { Coins, Users, BarChart3, Award, TrendingUp } from 'lucide-react';

export const StrategicPillarsSection: React.FC = () => {
  const [activePillarCategory, setActivePillarCategory] = useState<'von' | 'lao-dong' | 'nang-suat' | 'chat-luong'>('von');

  const activePillar = PILLAR_STRATEGIES.find((p) => p.category === activePillarCategory) || PILLAR_STRATEGIES[0];

  const pillarTabs = [
    { cat: 'von' as const, label: 'Nguồn Vốn Đầu Tư', icon: Coins, desc: 'Chung sức nhóm hộ & cuốn chiếu' },
    { cat: 'lao-dong' as const, label: 'Tổ Chức Lao Động', icon: Users, desc: 'Cơ giới hóa tời cáp & đổi công' },
    { cat: 'nang-suat' as const, label: 'Năng Suất Bền Vững', icon: BarChart3, desc: 'Tưới đón hoa & tỉa tán thấp' },
    { cat: 'chat-luong' as const, label: 'Cải Thiện Phẩm Chất', icon: Award, desc: 'Hái chín đỏ & Trà Cascara' },
  ];

  return (
    <div className="space-y-10 animate-in fade-in duration-200">
      
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-1.5">
          <span className="text-xs font-bold tracking-widest uppercase text-emerald-800 dark:text-emerald-400 flex items-center gap-1.5">
            <TrendingUp className="w-4 h-4 text-emerald-600" />
            <span>4 Trụ cột chiến lược phát triển</span>
          </span>
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-950 dark:text-white tracking-tight">
          Nguồn Vốn, Lao Động, Năng Suất & Nâng Cao Phẩm Chất
        </h2>
        <p className="text-stone-700 dark:text-stone-300 text-xs sm:text-sm mt-1 max-w-3xl font-medium">
          Lời giải toàn diện để người dân Chiềng Lao thoát khỏi vòng luẩn quẩn "thiếu vốn - nhọc công - năng suất bấp bênh - bị ép giá":
        </p>
      </div>

      {/* Tab selection grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {pillarTabs.map((tab) => {
          const Icon = tab.icon;
          const isSelected = activePillarCategory === tab.cat;
          return (
            <button
              key={tab.cat}
              onClick={() => setActivePillarCategory(tab.cat)}
              className={`btn-tactile p-4 rounded-2xl border text-left transition-all flex flex-col justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 ${
                isSelected
                  ? 'bg-emerald-800 dark:bg-emerald-700 text-white border-emerald-950 dark:border-emerald-500 shadow-md ring-1 ring-emerald-500/30'
                  : 'bg-white dark:bg-[#141f18] border-stone-300 dark:border-stone-800 text-stone-900 dark:text-stone-200 hover:border-emerald-600/50'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${isSelected ? 'bg-white/20 text-white' : 'bg-emerald-100 dark:bg-emerald-950 text-emerald-900 dark:text-emerald-300'}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className={`text-[10px] font-mono uppercase tracking-wider font-bold ${isSelected ? 'text-amber-200' : 'text-stone-600 dark:text-stone-400'}`}>
                  Trụ cột
                </span>
              </div>
              <div>
                <h4 className="font-serif font-bold text-sm sm:text-base leading-snug">
                  {tab.label}
                </h4>
                <p className={`text-xs mt-0.5 font-medium ${isSelected ? 'text-emerald-100' : 'text-stone-600 dark:text-stone-400'}`}>
                  {tab.desc}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Detailed Pillar Card */}
      <div className="rounded-3xl border border-stone-300 dark:border-stone-800 bg-white dark:bg-[#141f18] p-6 sm:p-10 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Strategy details & KPIs */}
          <div className="lg:col-span-5 space-y-6 lg:border-r lg:border-stone-200 dark:lg:border-stone-800 lg:pr-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-900 dark:text-emerald-300 block mb-1">
                Định hướng trọng tâm
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-950 dark:text-white mb-2">
                {activePillar.title}
              </h3>
              <p className="font-serif italic text-sm text-amber-900 dark:text-amber-300 font-bold">
                “{activePillar.subtitle}”
              </p>
            </div>

            <p className="text-xs sm:text-sm text-stone-800 dark:text-stone-200 leading-relaxed font-normal">
              {activePillar.description}
            </p>

            {/* Impact Callout */}
            <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 space-y-1.5">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-950 dark:text-emerald-200 block">
                Hiệu quả mang lại:
              </span>
              <p className="text-xs sm:text-sm font-bold text-emerald-950 dark:text-white leading-relaxed">
                {activePillar.expectedImpact}
              </p>
            </div>

            {/* KPIs Table */}
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-stone-900 dark:text-stone-200 block">
                Chỉ số định lượng (KPIs):
              </span>
              <div className="space-y-2">
                {activePillar.kpis.map((kpi) => (
                  <div key={kpi.label} className="p-3.5 rounded-xl bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-700 flex items-center justify-between text-xs">
                    <span className="text-stone-900 dark:text-stone-100 font-bold">{kpi.label}</span>
                    <span className="font-black text-emerald-900 dark:text-emerald-300 font-mono text-sm">{kpi.target}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Concrete Strategic Actions */}
          <div className="lg:col-span-7 space-y-5">
            <span className="text-xs font-bold uppercase tracking-wider text-stone-900 dark:text-white block">
              Các giải pháp cụ thể & Phương pháp triển khai:
            </span>

            <div className="space-y-3.5">
              {activePillar.strategicSolutions.map((sol, idx) => (
                <div
                  key={idx}
                  className="p-4 sm:p-5 rounded-2xl bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-700 flex items-start gap-3.5"
                >
                  <div className="w-7 h-7 rounded-xl bg-emerald-800 dark:bg-emerald-700 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <p className="text-xs sm:text-sm text-stone-950 dark:text-stone-100 leading-relaxed font-normal">
                    {sol}
                  </p>
                </div>
              ))}
            </div>

            {/* Local Cooperation Note */}
            <div className="p-4 rounded-2xl bg-stone-100 dark:bg-stone-900 border border-stone-300 dark:border-stone-700 text-xs text-stone-900 dark:text-stone-200 space-y-1">
              <span className="font-bold text-stone-950 dark:text-white block">
                🤝 Liên kết Tổ hợp tác Chiềng Lao:
              </span>
              <p className="leading-relaxed font-normal">
                Khuyến khích các hộ gia đình liền kề lập tổ 5–10 hộ để cùng hưởng chính sách hỗ trợ giống của tỉnh Sơn La và đầu tư cơ sở hạ tầng dùng chung.
              </p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};
