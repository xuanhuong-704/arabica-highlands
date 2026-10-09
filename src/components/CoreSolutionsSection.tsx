import React, { useState } from 'react';
import { CORE_SOLUTIONS } from '../data/chiengLaoData';
import { Check, ChevronLeft, ChevronRight, Layers, Wrench, Sparkles, AlertCircle } from 'lucide-react';

export const CoreSolutionsSection: React.FC = () => {
  const [activeSolutionId, setActiveSolutionId] = useState<string>(CORE_SOLUTIONS[0].id);
  const [activeStepBySolution, setActiveStepBySolution] = useState<{ [key: string]: number }>({
    [CORE_SOLUTIONS[0].id]: 1,
    [CORE_SOLUTIONS[1].id]: 1,
    [CORE_SOLUTIONS[2].id]: 1,
    [CORE_SOLUTIONS[3].id]: 1,
    [CORE_SOLUTIONS[4].id]: 1,
  });
  const [completedSteps, setCompletedSteps] = useState<{ [key: string]: boolean }>({});

  const activeSolution = CORE_SOLUTIONS.find((s) => s.id === activeSolutionId) || CORE_SOLUTIONS[0];
  const activeStepNum = activeStepBySolution[activeSolution.id] || 1;
  const activeStep = activeSolution.steps.find((st) => st.stepNum === activeStepNum) || activeSolution.steps[0];

  const setStepForCurrent = (stepNum: number) => {
    setActiveStepBySolution((prev) => ({
      ...prev,
      [activeSolution.id]: stepNum,
    }));
  };

  const toggleStepDone = (solutionId: string, stepNum: number) => {
    const key = `${solutionId}-step-${stepNum}`;
    setCompletedSteps((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const currentDoneCount = activeSolution.steps.filter(
    (st) => completedSteps[`${activeSolution.id}-step-${st.stepNum}`]
  ).length;

  const isCurrentStepDone = !!completedSteps[`${activeSolution.id}-step-${activeStep.stepNum}`];

  return (
    <div className="space-y-10 animate-in fade-in duration-200">
      
      {/* Section Header */}
      <div>
        <div className="flex items-center gap-2 mb-1.5">
          <span className="text-xs font-bold tracking-widest uppercase text-emerald-800 dark:text-emerald-400 flex items-center gap-1.5">
            <Layers className="w-4 h-4 text-emerald-600" />
            <span>Kỹ thuật nông học sườn dốc</span>
          </span>
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-950 dark:text-white tracking-tight">
          5 Giải Pháp Kỹ Thuật Cốt Lõi Tại Chiềng Lao
        </h2>
        <p className="text-stone-700 dark:text-stone-300 text-xs sm:text-sm mt-1 max-w-3xl font-medium">
          Chọn từng giải pháp bên dưới, sau đó bấm vào từng <b>Tab Bước Nhỏ</b> để xem hướng dẫn thực địa và đánh dấu tiến độ:
        </p>
      </div>

      {/* 5 Master Solution Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
        {CORE_SOLUTIONS.map((sol) => {
          const isSelected = sol.id === activeSolution.id;
          return (
            <button
              key={sol.id}
              onClick={() => setActiveSolutionId(sol.id)}
              className={`btn-tactile p-3.5 rounded-2xl border text-left transition-all flex flex-col justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 ${
                isSelected
                  ? 'bg-emerald-800 dark:bg-emerald-700 text-white border-emerald-950 dark:border-emerald-500 shadow-md ring-1 ring-emerald-500/30'
                  : 'bg-white dark:bg-[#141f18] border-stone-300 dark:border-stone-800 text-stone-900 dark:text-stone-200 hover:border-emerald-600/50'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xl">{sol.icon}</span>
                <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded ${isSelected ? 'bg-white/20 text-white' : 'bg-stone-100 dark:bg-stone-800 text-stone-800 dark:text-stone-300'}`}>
                  GP 0{sol.orderNumber}
                </span>
              </div>
              <div>
                <span className={`text-[10px] font-bold uppercase tracking-wider block mb-0.5 ${isSelected ? 'text-amber-200' : 'text-emerald-800 dark:text-emerald-400'}`}>
                  {sol.target}
                </span>
                <span className="font-serif font-bold text-xs line-clamp-2 leading-snug">
                  {sol.coreTech}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Main Solution Box */}
      <div className="rounded-3xl border border-stone-300 dark:border-stone-800 bg-white dark:bg-[#141f18] p-6 sm:p-8 shadow-sm space-y-8">
        
        {/* Solution Top Overview Banner */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-stone-200 dark:border-stone-800">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-xs font-bold text-emerald-900 dark:text-emerald-200 bg-emerald-100 dark:bg-emerald-950/80 px-2.5 py-1 rounded-md border border-emerald-300 dark:border-emerald-800">
                Giải pháp #{activeSolution.orderNumber} · {activeSolution.target}
              </span>
              <span className="text-xs font-bold text-amber-900 dark:text-amber-200 bg-amber-100 dark:bg-amber-950/60 px-2.5 py-0.5 rounded border border-amber-300 dark:border-amber-900">
                {activeSolution.badge}
              </span>
            </div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-950 dark:text-white">
              {activeSolution.coreTech}
            </h3>
            <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 mt-1 max-w-2xl font-normal">
              {activeSolution.headline}
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="flex flex-wrap items-center gap-2">
            {activeSolution.impactMetrics.map((m) => (
              <div key={m.label} className="p-3 rounded-xl bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-center min-w-[110px]">
                <span className="text-[10px] text-stone-700 dark:text-stone-300 block uppercase font-bold">{m.label}</span>
                <span className="font-serif font-black text-xs sm:text-sm text-emerald-900 dark:text-emerald-300">{m.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* SUB-TABS: Step-by-Step Small Tabs */}
        <div className="space-y-4">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-stone-900 dark:text-white">
              Các bước thực hiện (Chọn từng Tab để xem hướng dẫn chi tiết):
            </span>
            <span className="text-xs text-stone-700 dark:text-stone-300 font-medium">
              Tiến độ: <b>{currentDoneCount}/{activeSolution.steps.length} bước xong</b>
            </span>
          </div>

          {/* Step Sub-Tabs Bar */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {activeSolution.steps.map((st) => {
              const isTabActive = st.stepNum === activeStepNum;
              const isStepDone = !!completedSteps[`${activeSolution.id}-step-${st.stepNum}`];
              return (
                <button
                  key={st.stepNum}
                  onClick={() => setStepForCurrent(st.stepNum)}
                  className={`btn-tactile px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 shrink-0 border transition-all ${
                    isTabActive
                      ? 'bg-emerald-800 text-white border-emerald-950 shadow-sm'
                      : 'bg-stone-100 dark:bg-stone-800 text-stone-900 dark:text-stone-100 border-stone-300 dark:border-stone-700 hover:bg-stone-200 dark:hover:bg-stone-700'
                  }`}
                >
                  <span className={`w-5 h-5 rounded-md flex items-center justify-center text-[10px] font-bold ${
                    isStepDone
                      ? 'bg-emerald-500 text-white'
                      : isTabActive ? 'bg-white/25 text-white' : 'bg-stone-300 dark:bg-stone-600 text-stone-900 dark:text-white'
                  }`}>
                    {isStepDone ? '✓' : st.stepNum}
                  </span>
                  <span>Bước {st.stepNum}: {st.title}</span>
                </button>
              );
            })}
          </div>

          {/* ACTIVE SUB-TAB CONTENT CARD */}
          <div className="p-6 rounded-2xl border border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-900 space-y-5 animate-in fade-in duration-150">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-stone-200 dark:border-stone-700">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-900 dark:text-emerald-300">
                    Bước {activeStep.stepNum} / {activeSolution.steps.length}
                  </span>
                  {activeStep.toolOrMaterial && (
                    <span className="text-xs font-semibold text-stone-900 dark:text-stone-100 bg-white dark:bg-stone-800 px-2.5 py-0.5 rounded border border-stone-300 dark:border-stone-600">
                      Vật tư: {activeStep.toolOrMaterial}
                    </span>
                  )}
                </div>
                <h4 className="font-serif text-lg sm:text-xl font-bold text-stone-950 dark:text-white">
                  {activeStep.title}
                </h4>
              </div>

              {/* Toggle Done Button for Current Step */}
              <button
                type="button"
                onClick={() => toggleStepDone(activeSolution.id, activeStep.stepNum)}
                className={`btn-tactile px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 self-start sm:self-auto transition-colors ${
                  isCurrentStepDone
                    ? 'bg-emerald-700 text-white shadow-xs'
                    : 'bg-white dark:bg-stone-800 border border-stone-300 dark:border-stone-600 text-stone-900 dark:text-white hover:bg-stone-100'
                }`}
              >
                <Check className={`w-4 h-4 ${isCurrentStepDone ? 'text-white' : 'text-stone-500'}`} />
                <span>{isCurrentStepDone ? 'Đã hoàn thành bước này ✓' : 'Đánh dấu đã hoàn thành'}</span>
              </button>
            </div>

            {/* Step Detail Explanation */}
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-stone-900 dark:text-stone-200 block">
                Cách làm cụ thể (Quy trình chuẩn hiện trường):
              </span>
              <p className="text-xs sm:text-sm text-stone-950 dark:text-stone-100 leading-relaxed font-normal">
                {activeStep.detail}
              </p>
            </div>

            {/* Check Note & Warning */}
            {activeStep.checkNote && (
              <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/70 border border-amber-300 dark:border-amber-800 text-xs text-amber-950 dark:text-amber-100 flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block mb-0.5 text-amber-950 dark:text-amber-200">Lưu ý kỹ thuật quan trọng:</span>
                  <span className="font-medium leading-relaxed">{activeStep.checkNote}</span>
                </div>
              </div>
            )}

            {/* Sub-Tab Navigation Next/Previous */}
            <div className="pt-2 flex items-center justify-between">
              <button
                onClick={() => setStepForCurrent(Math.max(1, activeStepNum - 1))}
                disabled={activeStepNum <= 1}
                className="btn-tactile px-4 py-2 rounded-xl border border-stone-300 dark:border-stone-700 text-xs font-bold text-stone-800 dark:text-stone-200 bg-white dark:bg-stone-800 hover:bg-stone-100 disabled:opacity-40 flex items-center gap-1"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Bước trước</span>
              </button>

              <span className="text-xs font-bold text-stone-800 dark:text-stone-200">
                Bước {activeStepNum} / {activeSolution.steps.length}
              </span>

              <button
                onClick={() => setStepForCurrent(Math.min(activeSolution.steps.length, activeStepNum + 1))}
                disabled={activeStepNum >= activeSolution.steps.length}
                className="btn-tactile px-4 py-2 rounded-xl bg-emerald-800 hover:bg-emerald-900 dark:bg-emerald-700 text-white text-xs font-bold disabled:opacity-40 flex items-center gap-1 shadow-xs"
              >
                <span>Bước tiếp theo</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

        {/* Practical Field Tips & Equipment Required Footer */}
        <div className="pt-4 border-t border-stone-200 dark:border-stone-800 grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="p-4 rounded-2xl bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-700 space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-900 dark:text-emerald-300">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>Mẹo thực hành từ cán bộ khuyến nông:</span>
            </div>
            <ul className="space-y-1.5 text-xs text-stone-900 dark:text-stone-100 font-normal">
              {activeSolution.practicalTips.map((tip, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-emerald-600 dark:text-emerald-400 font-black">•</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-4 rounded-2xl bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-700 space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-900 dark:text-stone-100">
              <Wrench className="w-4 h-4 text-stone-600 dark:text-stone-300" />
              <span>Dụng cụ & Vật tư cần có:</span>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {activeSolution.equipmentNeeded.map((eq) => (
                <span
                  key={eq}
                  className="text-xs px-2.5 py-1 rounded-lg bg-white dark:bg-stone-800 border border-stone-300 dark:border-stone-600 text-stone-900 dark:text-white font-semibold"
                >
                  {eq}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};
