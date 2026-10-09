import React from 'react';
import { LOCAL_TERROIR_SUMMARY } from '../data/chiengLaoData';
import { Calculator, Sparkles, ShieldCheck, Droplets, Mountain, Gauge, Layers, Info } from 'lucide-react';
import { MainTabType } from './HeaderNav';

interface HeroSectionProps {
  onSelectTab: (tab: MainTabType) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onSelectTab }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-12 md:pt-14 md:pb-16 border-b border-stone-200 dark:border-stone-800">
      {/* Background glow and topographic lines effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-emerald-100/30 via-transparent to-transparent dark:from-emerald-950/20 dark:via-transparent to-transparent pointer-events-none blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Top geographic & institutional tag */}
        <div className="flex flex-wrap items-center gap-2 text-xs font-bold tracking-wider text-emerald-900 dark:text-emerald-300 uppercase mb-4">
          <span className="bg-emerald-100 dark:bg-emerald-950/80 px-2.5 py-1 rounded-md border border-emerald-300 dark:border-emerald-800">
            {LOCAL_TERROIR_SUMMARY.brandName}
          </span>
          <span aria-hidden="true" className="text-stone-400">·</span>
          <span>{LOCAL_TERROIR_SUMMARY.commune}</span>
          <span aria-hidden="true" className="text-stone-400">·</span>
          <span>{LOCAL_TERROIR_SUMMARY.district}</span>
          <span aria-hidden="true" className="text-stone-400">·</span>
          <span>Sơn La</span>
          <span aria-hidden="true" className="text-stone-400">·</span>
          <span className="text-stone-700 dark:text-stone-300 font-medium">Ven lòng hồ Thủy điện Sơn La</span>
        </div>

        {/* Headline & Slogan */}
        <div className="max-w-4xl space-y-4 mb-8">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-stone-950 dark:text-white leading-[1.15]">
            Arabica Highlands – Giải Pháp Canh Tác Cà Phê Bền Vững Chiềng Lao
          </h1>

          {/* Golden Slogan */}
          <div className="p-4 sm:p-5 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800 text-amber-950 dark:text-amber-100 shadow-2xs">
            <span className="text-xs uppercase font-bold tracking-widest text-amber-800 dark:text-amber-300 block mb-1">
              Khẩu hiệu hành động xuyên suốt
            </span>
            <p className="font-serif text-lg sm:text-2xl font-black">
              “{LOCAL_TERROIR_SUMMARY.slogan}”
            </p>
          </div>

          <p className="text-sm sm:text-base md:text-lg text-stone-800 dark:text-stone-100 leading-relaxed max-w-3xl font-normal">
            Chiềng Lao có địa hình sườn dốc 15°–35° ven lòng hồ sông Đà, nền nhiệt cao hơn và khô hạn mùa hoa khốc liệt hơn các vựa Mai Sơn, Thuận Châu. Để phát triển cây cà phê thành công, nông dân bắt buộc phải áp dụng bộ giải pháp kỹ thuật đồng bộ nhằm: <b className="font-bold text-stone-950 dark:text-white">Giảm nhiệt – Giữ ẩm – Cải tạo đất chua – Tiết kiệm chi phí công lao động</b>.
          </p>
        </div>

        {/* Quick Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-2 mb-10">
          <button
            onClick={() => onSelectTab('solutions')}
            className="btn-tactile inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 dark:bg-emerald-700 dark:hover:bg-emerald-600 text-white font-bold text-xs sm:text-sm shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600"
          >
            <Layers className="w-4 h-4" />
            <span>Khám phá 5 giải pháp kỹ thuật cốt lõi</span>
          </button>

          <button
            onClick={() => onSelectTab('intro')}
            className="btn-tactile inline-flex items-center gap-2 px-5 py-3.5 rounded-xl border border-stone-300 dark:border-stone-700 bg-white dark:bg-[#141f18] text-stone-900 dark:text-white hover:bg-stone-100 dark:hover:bg-stone-800 font-bold text-xs sm:text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600"
          >
            <Info className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />
            <span>Giới thiệu về Chiềng Lao</span>
          </button>

          <button
            onClick={() => onSelectTab('calculator')}
            className="btn-tactile inline-flex items-center gap-2 px-5 py-3.5 rounded-xl border border-stone-300 dark:border-stone-700 bg-white dark:bg-[#141f18] text-stone-900 dark:text-white hover:bg-stone-100 dark:hover:bg-stone-800 font-bold text-xs sm:text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600"
          >
            <Calculator className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />
            <span>Bộ tính chi phí & vật tư</span>
          </button>

          <button
            onClick={() => onSelectTab('ai')}
            className="btn-tactile inline-flex items-center gap-2 px-5 py-3.5 rounded-xl border border-stone-300 dark:border-stone-700 bg-white dark:bg-[#141f18] text-stone-900 dark:text-white hover:bg-stone-100 dark:hover:bg-stone-800 font-bold text-xs sm:text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600"
          >
            <Sparkles className="w-4 h-4 text-amber-600 dark:text-amber-400" />
            <span>Trợ lý Khuyến nông AI</span>
          </button>
        </div>

        {/* 4 Core Pillars KPI Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-4">
          <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#141f18] border border-stone-300 dark:border-stone-800 shadow-2xs">
            <div className="flex items-center justify-between text-emerald-700 dark:text-emerald-400 mb-2">
              <Mountain className="w-5 h-5" />
              <span className="text-xs font-bold uppercase tracking-wider text-stone-800 dark:text-stone-200">Giữ đất mặt</span>
            </div>
            <div className="font-serif text-2xl sm:text-3xl font-black text-stone-950 dark:text-white">
              -80% đến 90%
            </div>
            <p className="text-xs text-stone-700 dark:text-stone-300 font-medium mt-1">
              Lượng đất xói mòn nhờ cỏ Vetiver, đường đồng mức & hố vảy cá.
            </p>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#141f18] border border-stone-300 dark:border-stone-800 shadow-2xs">
            <div className="flex items-center justify-between text-amber-600 dark:text-amber-400 mb-2">
              <Droplets className="w-5 h-5" />
              <span className="text-xs font-bold uppercase tracking-wider text-stone-800 dark:text-stone-200">Tiết kiệm NPK</span>
            </div>
            <div className="font-serif text-2xl sm:text-3xl font-black text-stone-950 dark:text-white">
              -30% đến 50%
            </div>
            <p className="text-xs text-stone-700 dark:text-stone-300 font-medium mt-1">
              Thất thoát phân bón nhờ kỹ thuật rạch rãnh lấp đất phối trộn Biochar.
            </p>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#141f18] border border-stone-300 dark:border-stone-800 shadow-2xs">
            <div className="flex items-center justify-between text-blue-600 dark:text-blue-400 mb-2">
              <Gauge className="w-5 h-5" />
              <span className="text-xs font-bold uppercase tracking-wider text-stone-800 dark:text-stone-200">pH đất chua</span>
            </div>
            <div className="font-serif text-2xl sm:text-3xl font-black text-stone-950 dark:text-white">
              Từ &lt;4.5 lên &gt;5.2
            </div>
            <p className="text-xs text-stone-700 dark:text-stone-300 font-medium mt-1">
              Hóa giải độc nhôm và giải phóng lân bằng Dolomite + Lân nung chảy.
            </p>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#141f18] border border-stone-300 dark:border-stone-800 shadow-2xs">
            <div className="flex items-center justify-between text-rose-600 dark:text-rose-400 mb-2">
              <ShieldCheck className="w-5 h-5" />
              <span className="text-xs font-bold uppercase tracking-wider text-stone-800 dark:text-stone-200">Giảm công vác</span>
            </div>
            <div className="font-serif text-2xl sm:text-3xl font-black text-stone-950 dark:text-white">
              -70% công đồi
            </div>
            <p className="text-xs text-stone-700 dark:text-stone-300 font-medium mt-1">
              Chi phí & ngày công vận chuyển nhờ lắp tời cáp sườn dốc 2 chiều.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
