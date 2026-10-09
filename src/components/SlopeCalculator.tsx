import React, { useState } from 'react';
import { Calculator, Check, TrendingDown, ShieldCheck, Download, Play, RotateCcw } from 'lucide-react';

export const SlopeCalculator: React.FC = () => {
  const [areaUnit, setAreaUnit] = useState<'ha' | 'sao'>('ha');
  const [areaValue, setAreaValue] = useState<number>(1);
  const [slopeDegree, setSlopeDegree] = useState<number>(25); // 15 to 35
  const [plantingStage, setPlantingStage] = useState<'moi' | 'kinh-doanh'>('kinh-doanh');
  const [distanceToRoad, setDistanceToRoad] = useState<'gan' | 'xa'>('xa');
  
  // Explicit calculation trigger state
  const [hasCalculated, setHasCalculated] = useState<boolean>(false);
  const [isCalculating, setIsCalculating] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  // Cached calculated results
  const [results, setResults] = useState<{
    areaHa: number;
    areaValue: number;
    areaUnit: 'ha' | 'sao';
    slopeDegree: number;
    contourMeters: number;
    vetiverSlips: number;
    fishScalePits: number;
    dolomiteKg: number;
    npkSavedKg: number;
    laborDaysSaved: number;
    estimatedAnnualSavings: number;
    contourDistance: number;
  } | null>(null);

  const handleCalculate = () => {
    setIsCalculating(true);

    setTimeout(() => {
      const areaHa = areaUnit === 'ha' ? areaValue : (areaValue * 360) / 10000;
      const contourDistance = slopeDegree > 25 ? 3.5 : slopeDegree > 20 ? 4.5 : 5.5;
      const contourMetersPerHa = Math.round(10000 / contourDistance);
      const totalContourMeters = Math.round(contourMetersPerHa * areaHa);
      const vetiverSlips = totalContourMeters * 7;
      const totalTrees = Math.round(3300 * areaHa);
      const fishScalePits = totalTrees;
      const dolomiteKg = Math.round(totalTrees * 1.2);
      const npkSavedKg = Math.round((140 + slopeDegree * 4) * areaHa);
      const distanceMultiplier = distanceToRoad === 'xa' ? 1.25 : 1.0;
      const laborDaysSaved = Math.round((15 + slopeDegree * 0.9) * areaHa * distanceMultiplier);
      const estimatedAnnualSavings = Math.round(
        laborDaysSaved * 250000 + npkSavedKg * 16000
      );

      setResults({
        areaHa,
        areaValue,
        areaUnit,
        slopeDegree,
        contourMeters: totalContourMeters,
        vetiverSlips,
        fishScalePits,
        dolomiteKg,
        npkSavedKg,
        laborDaysSaved,
        estimatedAnnualSavings,
        contourDistance,
      });

      setHasCalculated(true);
      setIsCalculating(false);
    }, 350);
  };

  const handleReset = () => {
    setHasCalculated(false);
    setResults(null);
  };

  const formatNumber = (n: number) => new Intl.NumberFormat('vi-VN').format(n);

  const handleCopySummary = () => {
    if (!results) return;
    const text = `DỰ TOÁN ĐỊNH MỨC CANH TÁC ARABICA HIGHLANDS (CHIỀNG LAO):
- Diện tích: ${results.areaValue} ${results.areaUnit === 'ha' ? 'Héc-ta' : 'sào Bắc Bộ'} (~${results.areaHa.toFixed(2)} ha)
- Độ dốc nương: ${results.slopeDegree}°
- Cỏ Vetiver cản bùn cần chuẩn bị: ${formatNumber(results.vetiverSlips)} bụi (~${formatNumber(results.contourMeters)}m đường đồng mức)
- Hố vảy cá bán nguyệt cần đào: ${formatNumber(results.fishScalePits)} hố
- Vôi Dolomite bón nâng pH: ${formatNumber(results.dolomiteKg)} kg/năm
- Phân NPK tiết kiệm ước tính: ${formatNumber(results.npkSavedKg)} kg/năm
- Ngày công gùi vác tiết kiệm nhờ tời cáp: ${formatNumber(results.laborDaysSaved)} ngày công/năm
- Giá trị tiết kiệm ước tính: ~${formatNumber(results.estimatedAnnualSavings)} đ/vụ.`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-10 animate-in fade-in duration-200">
      
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-1.5">
          <span className="text-xs font-bold tracking-widest uppercase text-emerald-800 dark:text-emerald-400 flex items-center gap-1.5">
            <Calculator className="w-4 h-4 text-emerald-600" />
            <span>Công cụ số hóa định mức sườn dốc</span>
          </span>
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-950 dark:text-white tracking-tight">
          Bộ Tính Kỹ Thuật & Chi Phí Canh Tác Sườn Dốc
        </h2>
        <p className="text-stone-700 dark:text-stone-300 text-xs sm:text-sm mt-1 max-w-3xl font-medium">
          Nhập các thông số nương rẫy thực tế của gia đình bạn ở bảng bên trái, sau đó bấm <b>"Tính toán kết quả"</b> để hệ thống hiển thị bảng dự toán chi tiết:
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Inputs Form */}
        <div className="lg:col-span-5 bg-white dark:bg-[#141f18] border border-stone-300 dark:border-stone-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xs">
          <div className="flex items-center justify-between pb-3 border-b border-stone-200 dark:border-stone-800">
            <h3 className="font-serif text-lg font-bold text-stone-950 dark:text-white">
              Nhập thông số nương rẫy
            </h3>
            {hasCalculated && (
              <button
                onClick={handleReset}
                className="text-xs font-semibold text-stone-700 dark:text-stone-300 hover:text-emerald-700 dark:hover:text-emerald-300 flex items-center gap-1"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Nhập lại</span>
              </button>
            )}
          </div>

          {/* Input 1: Area */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <label className="font-bold text-stone-900 dark:text-stone-100">
                1. Diện tích nương:
              </label>
              <div className="flex items-center p-0.5 bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-lg">
                <button
                  type="button"
                  onClick={() => { setAreaUnit('ha'); if (areaValue > 20) setAreaValue(1); }}
                  className={`px-3 py-1 text-xs font-bold rounded-md transition-colors ${areaUnit === 'ha' ? 'bg-emerald-800 text-white shadow-2xs' : 'text-stone-700 dark:text-stone-300'}`}
                >
                  Héc-ta (ha)
                </button>
                <button
                  type="button"
                  onClick={() => { setAreaUnit('sao'); if (areaValue < 5) setAreaValue(10); }}
                  className={`px-3 py-1 text-xs font-bold rounded-md transition-colors ${areaUnit === 'sao' ? 'bg-emerald-800 text-white shadow-2xs' : 'text-stone-700 dark:text-stone-300'}`}
                >
                  Sào (360m²)
                </button>
              </div>
            </div>

            <input
              type="number"
              min={0.1}
              max={areaUnit === 'ha' ? 20 : 500}
              step={areaUnit === 'ha' ? 0.1 : 1}
              value={areaValue}
              onChange={(e) => {
                setAreaValue(Math.max(0.1, parseFloat(e.target.value) || 0.1));
                setHasCalculated(false);
              }}
              className="w-full px-4 py-2.5 rounded-xl border border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-900 text-sm font-bold text-stone-950 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-600"
            />
          </div>

          {/* Input 2: Slope Angle */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <label className="font-bold text-stone-900 dark:text-stone-100">
                2. Độ dốc sườn nương:
              </label>
              <span className="font-mono font-bold text-xs text-emerald-950 dark:text-emerald-200 bg-emerald-100 dark:bg-emerald-950 px-2.5 py-0.5 rounded border border-emerald-300 dark:border-emerald-800">
                {slopeDegree}° ({slopeDegree >= 28 ? 'Dốc đứng nguy hiểm' : slopeDegree >= 20 ? 'Dốc vừa phổ biến' : 'Dốc thoải'})
              </span>
            </div>

            <input
              type="range"
              min={15}
              max={35}
              step={1}
              value={slopeDegree}
              onChange={(e) => {
                setSlopeDegree(parseInt(e.target.value));
                setHasCalculated(false);
              }}
              className="w-full accent-emerald-700 cursor-pointer"
            />

            <div className="flex justify-between text-[11px] text-stone-700 dark:text-stone-300 font-medium">
              <span>15° (Sườn thoải)</span>
              <span>25° (Phổ biến Chiềng Lao)</span>
              <span>35° (Dốc đứng)</span>
            </div>
          </div>

          {/* Input 3: Planting Stage */}
          <div className="space-y-2 text-xs">
            <label className="font-bold text-stone-900 dark:text-stone-100 block">
              3. Giai đoạn vườn cây:
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => { setPlantingStage('moi'); setHasCalculated(false); }}
                className={`p-3 rounded-xl border text-left font-bold transition-colors ${
                  plantingStage === 'moi'
                    ? 'border-emerald-700 bg-emerald-100 dark:bg-emerald-950 text-emerald-950 dark:text-emerald-200'
                    : 'border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-900 text-stone-800 dark:text-stone-300'
                }`}
              >
                Trồng mới (Năm 1–2)
              </button>
              <button
                type="button"
                onClick={() => { setPlantingStage('kinh-doanh'); setHasCalculated(false); }}
                className={`p-3 rounded-xl border text-left font-bold transition-colors ${
                  plantingStage === 'kinh-doanh'
                    ? 'border-emerald-700 bg-emerald-100 dark:bg-emerald-950 text-emerald-950 dark:text-emerald-200'
                    : 'border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-900 text-stone-800 dark:text-stone-300'
                }`}
              >
                Đang thu hoạch
              </button>
            </div>
          </div>

          {/* Input 4: Transport distance */}
          <div className="space-y-2 text-xs">
            <label className="font-bold text-stone-900 dark:text-stone-100 block">
              4. Khoảng cách vận chuyển từ đường tập kết:
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => { setDistanceToRoad('gan'); setHasCalculated(false); }}
                className={`p-3 rounded-xl border text-left font-bold transition-colors ${
                  distanceToRoad === 'gan'
                    ? 'border-emerald-700 bg-emerald-100 dark:bg-emerald-950 text-emerald-950 dark:text-emerald-200'
                    : 'border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-900 text-stone-800 dark:text-stone-300'
                }`}
              >
                Gần đường (&lt;150m)
              </button>
              <button
                type="button"
                onClick={() => { setDistanceToRoad('xa'); setHasCalculated(false); }}
                className={`p-3 rounded-xl border text-left font-bold transition-colors ${
                  distanceToRoad === 'xa'
                    ? 'border-emerald-700 bg-emerald-100 dark:bg-emerald-950 text-emerald-950 dark:text-emerald-200'
                    : 'border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-900 text-stone-800 dark:text-stone-300'
                }`}
              >
                Xa đỉnh nương (&gt;150m)
              </button>
            </div>
          </div>

          {/* PROMINENT CALCULATE BUTTON */}
          <button
            type="button"
            onClick={handleCalculate}
            disabled={isCalculating}
            className="btn-tactile w-full py-3.5 rounded-2xl bg-emerald-800 hover:bg-emerald-900 dark:bg-emerald-700 dark:hover:bg-emerald-600 text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600"
          >
            {isCalculating ? (
              <>
                <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Đang tính toán định mức...</span>
              </>
            ) : (
              <>
                <Play className="w-4 h-4 fill-white" />
                <span>⚡ Tính toán kết quả & Dự toán chi phí</span>
              </>
            )}
          </button>

        </div>

        {/* Right Column: Results Panel */}
        <div className="lg:col-span-7">
          {!hasCalculated || !results ? (
            /* Uncalculated Placeholder State */
            <div className="rounded-3xl border-2 border-dashed border-stone-300 dark:border-stone-700 bg-white/70 dark:bg-[#141f18] p-8 sm:p-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 flex items-center justify-center mx-auto text-2xl">
                <Calculator className="w-8 h-8" />
              </div>
              <div className="space-y-2 max-w-md mx-auto">
                <h4 className="font-serif text-lg sm:text-xl font-bold text-stone-950 dark:text-white">
                  Chưa có kết quả dự toán
                </h4>
                <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed font-normal">
                  Vui lòng kiểm tra các thông số diện tích và độ dốc ở bảng bên trái, sau đó bấm nút <b>"⚡ Tính toán kết quả & Dự toán chi phí"</b> để hệ thống hiển thị bảng định mức vật tư và hiệu quả kinh tế.
                </p>
              </div>
            </div>
          ) : (
            /* CALCULATED RESULTS CONTAINER */
            <div className="bg-white dark:bg-[#141f18] border border-stone-300 dark:border-stone-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm animate-in zoom-in-95 duration-200">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-stone-200 dark:border-stone-800">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-900 dark:text-emerald-300">
                    Kết quả dự toán vật tư & Hiệu quả
                  </span>
                  <h4 className="font-serif text-xl font-bold text-stone-950 dark:text-white">
                    Định Mức Cho {results.areaValue} {results.areaUnit === 'ha' ? 'Héc-ta' : 'sào'} (Độ dốc {results.slopeDegree}°)
                  </h4>
                </div>

                <button
                  onClick={handleCopySummary}
                  className="btn-tactile self-start sm:self-auto px-4 py-2 rounded-xl border border-stone-300 dark:border-stone-700 text-xs font-bold text-stone-800 dark:text-stone-200 bg-stone-50 dark:bg-stone-800 hover:bg-stone-100 flex items-center gap-1.5 shadow-2xs"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Download className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Đã sao chép!' : 'Sao chép kết quả'}</span>
                </button>
              </div>

              {/* 4 Main Output Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800/80 space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-950 dark:text-emerald-200">
                    Cỏ Vetiver cản bùn:
                  </span>
                  <div className="font-serif text-2xl font-black text-emerald-950 dark:text-white">
                    {formatNumber(results.vetiverSlips)} bụi
                  </div>
                  <p className="text-xs text-stone-800 dark:text-stone-200 font-normal">
                    Trồng trên ~{formatNumber(results.contourMeters)}m dài đường đồng mức (khoảng cách {results.contourDistance}m/đường).
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/60 border border-amber-300 dark:border-amber-800/80 space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-950 dark:text-amber-200">
                    Hố vảy cá tích nước:
                  </span>
                  <div className="font-serif text-2xl font-black text-amber-950 dark:text-white">
                    {formatNumber(results.fishScalePits)} hố
                  </div>
                  <p className="text-xs text-stone-800 dark:text-stone-200 font-normal">
                    Đào hình bán nguyệt 40x30x60cm phía dưới mép tán từng gốc cà phê.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-blue-50 dark:bg-blue-950/60 border border-blue-300 dark:border-blue-800/80 space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-950 dark:text-blue-200">
                    Vôi Dolomite nâng pH:
                  </span>
                  <div className="font-serif text-2xl font-black text-blue-950 dark:text-white">
                    {formatNumber(results.dolomiteKg)} kg/năm
                  </div>
                  <p className="text-xs text-stone-800 dark:text-stone-200 font-normal">
                    Chia bón 2 đợt (đầu mưa tháng 5 và cuối mưa tháng 9–10) để giải độc nhôm.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-rose-50 dark:bg-rose-950/60 border border-rose-300 dark:border-rose-800/80 space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-rose-950 dark:text-rose-200">
                    Phân NPK tiết kiệm được:
                  </span>
                  <div className="font-serif text-2xl font-black text-rose-950 dark:text-white">
                    {formatNumber(results.npkSavedKg)} kg/năm
                  </div>
                  <p className="text-xs text-stone-800 dark:text-stone-200 font-normal">
                    Nhờ rạch rãnh lấp đất + phối trộn Biochar, không bị mưa rửa trôi.
                  </p>
                </div>

              </div>

              {/* Economic & Labor Savings Box */}
              <div className="p-5 rounded-2xl bg-stone-100 dark:bg-stone-900 border border-stone-300 dark:border-stone-700 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-900 dark:text-emerald-300 flex items-center gap-1.5">
                    <TrendingDown className="w-4 h-4 text-emerald-600" />
                    <span>Lợi ích kinh tế & Giải phóng sức lao động:</span>
                  </span>
                  <span className="text-xs font-bold text-stone-900 dark:text-stone-100">
                    Đánh giá sau 1 mùa vụ
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-1">
                  <div>
                    <span className="text-xs text-stone-800 dark:text-stone-200 block font-bold">Tiết kiệm công gùi vác:</span>
                    <span className="font-serif text-xl sm:text-2xl font-black text-stone-950 dark:text-white">
                      {results.laborDaysSaved} ngày công
                    </span>
                    <span className="text-[11px] text-stone-700 dark:text-stone-300 block font-medium">Nhờ hệ thống tời cáp đồi dốc</span>
                  </div>

                  <div>
                    <span className="text-xs text-stone-800 dark:text-stone-200 block font-bold">Giá trị tiết kiệm ước tính:</span>
                    <span className="font-serif text-xl sm:text-2xl font-black text-emerald-800 dark:text-emerald-300">
                      ~{formatNumber(results.estimatedAnnualSavings)} đ/vụ
                    </span>
                    <span className="text-[11px] text-stone-700 dark:text-stone-300 block font-medium">Từ phân bón + ngày công gùi</span>
                  </div>
                </div>
              </div>

              {/* Endorsement Note */}
              <div className="text-xs text-stone-800 dark:text-stone-200 flex items-start gap-1.5 font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Số liệu định mức dựa trên hướng dẫn kỹ thuật trạm Khuyến nông Mường La cho sườn dốc Feralit ven lòng hồ sông Đà.</span>
              </div>

            </div>
          )}
        </div>

      </div>

    </div>
  );
};
