import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Mountain, BookOpen, Calculator, Sparkles, Menu, X, ArrowUpRight, Compass, Layers, Users } from 'lucide-react';

export type MainTabType = 'intro' | 'solutions' | 'calculator' | 'pillars' | 'ai';

interface HeaderNavProps {
  activeTab: MainTabType;
  onSelectTab: (tab: MainTabType) => void;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({ activeTab, onSelectTab }) => {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: MainTabType; label: string; icon?: React.ReactNode }[] = [
    { id: 'intro', label: 'Giới thiệu Chiềng Lao' },
    { id: 'solutions', label: '5 Giải pháp cốt lõi' },
    { id: 'calculator', label: 'Bộ tính chi phí' },
    { id: 'pillars', label: 'Vốn & Lao động' },
    { id: 'ai', label: 'Trợ lý Khuyến nông AI' },
  ];

  const handleTabClick = (tabId: MainTabType) => {
    onSelectTab(tabId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 380, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-stone-50/90 dark:bg-[#0c130e]/90 border-b border-stone-200/80 dark:border-stone-800/80 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between">
        
        {/* Brand identity: Arabica Highlands */}
        <button
          onClick={() => { onSelectTab('intro'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 rounded-lg p-1 -ml-1 text-left"
          aria-label="Arabica Highlands - Chiềng Lao, Mường La"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-800 to-amber-900 dark:from-emerald-700 dark:to-amber-800 flex items-center justify-center text-white shadow-xs group-hover:scale-105 transition-transform duration-200">
            <Mountain className="w-5 h-5 text-amber-200" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-extrabold text-base sm:text-lg leading-tight tracking-tight text-stone-900 dark:text-stone-100 group-hover:text-emerald-800 dark:group-hover:text-emerald-400 transition-colors">
              Arabica Highlands
            </span>
            <span className="text-[11px] font-semibold tracking-wider uppercase text-emerald-800 dark:text-emerald-400">
              Chiềng Lao · Mường La · Sơn La
            </span>
          </div>
        </button>

        {/* Desktop Nav Links / Tab Switchers */}
        <nav className="hidden xl:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeTab === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleTabClick(link.id)}
                className={`px-3 py-2 text-xs font-semibold rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 ${
                  isActive
                    ? 'bg-emerald-800 text-white dark:bg-emerald-700 shadow-2xs font-bold'
                    : 'text-stone-700 dark:text-stone-300 hover:text-emerald-800 dark:hover:text-emerald-400 hover:bg-stone-100 dark:hover:bg-stone-800/60'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Right CTA Actions: Quick Calculator Button + Dark Mode Toggle + Mobile Menu Toggle */}
        <div className="flex items-center gap-2">
          {/* Quick jump to slope calculator tab */}
          <button
            onClick={() => handleTabClick('calculator')}
            className={`btn-tactile hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold border transition-colors ${
              activeTab === 'calculator'
                ? 'bg-emerald-800 text-white border-emerald-900 shadow-sm'
                : 'border-emerald-700/30 dark:border-emerald-600/40 bg-emerald-50/90 dark:bg-emerald-950/60 text-emerald-950 dark:text-emerald-200 hover:bg-emerald-100 dark:hover:bg-emerald-900'
            }`}
          >
            <Calculator className="w-3.5 h-3.5 text-emerald-700 dark:text-emerald-400" />
            <span>Tính chi phí dốc</span>
          </button>

          {/* Prominent Dark/Light Mode Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Chuyển sang Chế độ Sáng' : 'Chuyển sang Chế độ Tối'}
            title={theme === 'dark' ? 'Đang ở Chế độ Tối (Bấm để đổi sang Nền Sáng)' : 'Đang ở Chế độ Sáng (Bấm để đổi sang Nền Tối)'}
            className="btn-tactile px-3 py-2 rounded-xl flex items-center gap-2 border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100 hover:border-emerald-600 hover:text-emerald-700 dark:hover:text-emerald-300 shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600"
          >
            {theme === 'dark' ? (
              <>
                <Sun className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-xs font-bold hidden sm:inline text-amber-200">Giao diện Tối</span>
              </>
            ) : (
              <>
                <Moon className="w-4 h-4 text-emerald-800 shrink-0" />
                <span className="text-xs font-bold hidden sm:inline text-stone-800">Giao diện Sáng</span>
              </>
            )}
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Đóng menu' : 'Mở menu'}
            className="xl:hidden w-10 h-10 rounded-xl flex items-center justify-center border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-b border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-[#0c130e] px-4 py-4 space-y-2 animate-in fade-in duration-150">
          <div className="flex items-center justify-between pb-2 border-b border-stone-200 dark:border-stone-800">
            <span className="text-[11px] font-bold uppercase tracking-wider text-stone-600 dark:text-stone-400">
              Chọn chuyên mục
            </span>
            <button
              onClick={toggleTheme}
              className="text-xs font-bold flex items-center gap-1.5 px-2.5 py-1 rounded-lg border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-900 dark:text-white"
            >
              {theme === 'dark' ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5 text-emerald-700" />}
              <span>{theme === 'dark' ? 'Đổi sang Sáng' : 'Đổi sang Tối'}</span>
            </button>
          </div>
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleTabClick(link.id)}
              className={`w-full text-left px-3 py-2 text-sm font-semibold rounded-lg transition-colors ${
                activeTab === link.id
                  ? 'bg-emerald-800 text-white font-bold'
                  : 'text-stone-800 dark:text-stone-200 hover:bg-stone-200/60 dark:hover:bg-stone-800'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};
