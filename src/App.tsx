/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { HeaderNav, MainTabType } from './components/HeaderNav';
import { HeroSection } from './components/HeroSection';
import { ChiengLaoIntroSection } from './components/ChiengLaoIntroSection';
import { CoreSolutionsSection } from './components/CoreSolutionsSection';
import { SlopeCalculator } from './components/SlopeCalculator';
import { StrategicPillarsSection } from './components/StrategicPillarsSection';
import { AgriAiAdvisor } from './components/AgriAiAdvisor';
import { FooterSection } from './components/FooterSection';
import { MapPin, Layers, Calculator, BarChart3, Sparkles } from 'lucide-react';

function AppContent() {
  const [activeTab, setActiveTab] = useState<MainTabType>('intro');

  const mainTabs: { id: MainTabType; label: string; icon: React.ReactNode; badge?: string }[] = [
    { id: 'intro', label: '1. Giới thiệu Chiềng Lao', icon: <MapPin className="w-4 h-4" /> },
    { id: 'solutions', label: '2. 5 Giải pháp cốt lõi (Có sub-tab từng bước)', icon: <Layers className="w-4 h-4" />, badge: 'Trọng tâm' },
    { id: 'calculator', label: '3. Bộ tính chi phí sườn dốc (Nhập số mới tính)', icon: <Calculator className="w-4 h-4" /> },
    { id: 'pillars', label: '4. Vốn, Lao động & Năng suất', icon: <BarChart3 className="w-4 h-4" /> },
    { id: 'ai', label: '5. Trợ lý Khuyến nông AI', icon: <Sparkles className="w-4 h-4" /> },
  ];

  const handleSelectTabWithScroll = (tabId: MainTabType) => {
    setActiveTab(tabId);
    const element = document.getElementById('tab-content-anchor');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#faf8f5] dark:bg-[#0c130e] text-stone-900 dark:text-stone-100 transition-colors duration-250">
      
      {/* Sticky Top Navigation */}
      <HeaderNav activeTab={activeTab} onSelectTab={handleSelectTabWithScroll} />

      {/* Hero Section with Official Slogan and Regional Context */}
      <HeroSection onSelectTab={handleSelectTabWithScroll} />

      {/* MASTER TAB SWITCHER BAR (Sticky below hero for fast section switching) */}
      <div className="sticky top-18 z-30 w-full backdrop-blur-md bg-stone-50/95 dark:bg-[#0c130e]/95 border-b border-stone-300 dark:border-stone-800 py-3 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-none py-0.5">
            {mainTabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleSelectTabWithScroll(tab.id)}
                  className={`btn-tactile px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 shrink-0 border transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 ${
                    isActive
                      ? 'bg-emerald-800 text-white dark:bg-emerald-700 border-emerald-950 dark:border-emerald-500 shadow-md ring-1 ring-emerald-500/30'
                      : 'bg-white dark:bg-[#141f18] text-stone-900 dark:text-stone-100 border-stone-300 dark:border-stone-700 hover:border-emerald-600 hover:bg-stone-100 dark:hover:bg-stone-800'
                  }`}
                >
                  <span className={isActive ? 'text-amber-200' : 'text-emerald-700 dark:text-emerald-400'}>
                    {tab.icon}
                  </span>
                  <span>{tab.label}</span>
                  {tab.badge && (
                    <span className={`text-[10px] font-black px-1.5 py-0.2 rounded ${isActive ? 'bg-amber-300 text-stone-950' : 'bg-emerald-100 dark:bg-emerald-950 text-emerald-900 dark:text-emerald-300'}`}>
                      {tab.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div id="tab-content-anchor" className="scroll-mt-32" />

      {/* Main Tabbed Content Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-10 md:py-14">
        {activeTab === 'intro' && (
          <ChiengLaoIntroSection onNavigateToSolutions={() => handleSelectTabWithScroll('solutions')} />
        )}

        {activeTab === 'solutions' && (
          <CoreSolutionsSection />
        )}

        {activeTab === 'calculator' && (
          <SlopeCalculator />
        )}

        {activeTab === 'pillars' && (
          <StrategicPillarsSection />
        )}

        {activeTab === 'ai' && (
          <AgriAiAdvisor />
        )}
      </main>

      {/* Footer */}
      <FooterSection onSelectTab={handleSelectTabWithScroll} />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
