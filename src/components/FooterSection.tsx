import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { ArrowUp, Sun, Moon, Monitor, Mountain, Phone, MapPin, Mail } from 'lucide-react';
import { ThemeMode } from '../types';
import { MainTabType } from './HeaderNav';

interface FooterSectionProps {
  onSelectTab?: (tab: MainTabType) => void;
}

export const FooterSection: React.FC<FooterSectionProps> = ({ onSelectTab }) => {
  const { themeMode, setThemeMode } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const themeOptions: { mode: ThemeMode; label: string; icon: React.ReactNode }[] = [
    { mode: 'light', label: 'Sáng', icon: <Sun className="w-3.5 h-3.5" /> },
    { mode: 'dark', label: 'Tối', icon: <Moon className="w-3.5 h-3.5" /> },
    { mode: 'system', label: 'Tự động', icon: <Monitor className="w-3.5 h-3.5" /> },
  ];

  const handleTabClick = (tab: MainTabType) => {
    if (onSelectTab) {
      onSelectTab(tab);
      window.scrollTo({ top: 380, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-stone-950 text-stone-400 py-12 border-t border-stone-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Main Footer Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-stone-900">
          
          {/* Brand & Slogan */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-800 flex items-center justify-center text-white">
                <Mountain className="w-4 h-4 text-amber-200" />
              </div>
              <div>
                <span className="font-serif font-bold text-sm text-stone-200 block">
                  Arabica Highlands
                </span>
                <span className="text-[11px] text-emerald-400 font-medium">
                  Chiềng Lao · Mường La · Sơn La
                </span>
              </div>
            </div>

            <p className="font-serif italic text-amber-200/90 text-sm font-semibold">
              “Giữ đất – Tích nước – Rẻ công – Đậm vị: Cà phê Chiềng Lao bền vững vươn xa.”
            </p>

            <p className="text-stone-400 text-xs leading-relaxed max-w-md font-light">
              Nền tảng số hóa giải pháp kỹ thuật nông học chuyển giao cho đồng bào và các tổ hợp tác trồng cà phê trên sườn dốc lưu vực hồ thủy điện Sơn La.
            </p>
          </div>

          {/* Quick Section Links */}
          <div className="md:col-span-3 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-stone-300 block mb-2">
              Chuyên mục kỹ thuật
            </span>
            <ul className="space-y-1.5 text-stone-400">
              <li>
                <button onClick={() => handleTabClick('intro')} className="hover:text-emerald-400 transition-colors text-left">
                  Giới thiệu Chiềng Lao & Hiện trạng
                </button>
              </li>
              <li>
                <button onClick={() => handleTabClick('solutions')} className="hover:text-emerald-400 transition-colors text-left">
                  5 Giải pháp cốt lõi từng bước
                </button>
              </li>
              <li>
                <button onClick={() => handleTabClick('calculator')} className="hover:text-emerald-400 transition-colors text-left">
                  Bộ tính chi phí sườn dốc
                </button>
              </li>
              <li>
                <button onClick={() => handleTabClick('pillars')} className="hover:text-emerald-400 transition-colors text-left">
                  Nguồn vốn, lao động, năng suất
                </button>
              </li>
              <li>
                <button onClick={() => handleTabClick('ai')} className="hover:text-emerald-400 transition-colors text-left">
                  Trợ lý Khuyến nông AI
                </button>
              </li>
            </ul>
          </div>

          {/* Local Contacts & Extension Office */}
          <div className="md:col-span-4 space-y-2.5">
            <span className="text-xs font-bold uppercase tracking-wider text-stone-300 block mb-2">
              Liên hệ thực địa & Khuyến nông
            </span>
            <div className="space-y-2 text-stone-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Xã Chiềng Lao, huyện Mường La, tỉnh Sơn La</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Đường dây tư vấn kỹ thuật: <a href="tel:0373339099" className="font-bold text-white hover:underline">0373 339 099</a></span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>hop-tac-xa@chienglao.sonla.gov.vn</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom controls: 3-State Theme Mode & Scroll to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-stone-400 text-center sm:text-left">
            © 2026 Arabica Highlands — Đồng hành cùng nông dân bảo vệ đất dốc lưu vực sông Đà.
          </p>

          <div className="flex items-center gap-3">
            {/* 3-State Theme Switcher */}
            <div className="flex items-center p-1 bg-stone-900 border border-stone-800 rounded-xl" role="group" aria-label="Lựa chọn giao diện">
              {themeOptions.map((opt) => (
                <button
                  key={opt.mode}
                  onClick={() => setThemeMode(opt.mode)}
                  className={`btn-tactile px-2.5 py-1.5 rounded-lg flex items-center gap-1.5 text-[11px] font-medium transition-colors ${
                    themeMode === opt.mode
                      ? 'bg-stone-800 text-stone-100 shadow-2xs'
                      : 'text-stone-400 hover:text-stone-200'
                  }`}
                  title={`Giao diện ${opt.label}`}
                >
                  {opt.icon}
                  <span>{opt.label}</span>
                </button>
              ))}
            </div>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="btn-tactile p-2 rounded-xl bg-stone-900 hover:bg-stone-800 border border-stone-800 text-stone-300 hover:text-white transition-colors"
              title="Lên đầu trang"
              aria-label="Lên đầu trang"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
