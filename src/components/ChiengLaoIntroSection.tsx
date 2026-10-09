import React, { useState } from 'react';
import { CHIENG_LAO_PROFILE, FIELD_CONDITIONS } from '../data/chiengLaoData';
import { MapPin, Waves, Compass, AlertTriangle, ShieldAlert, ChevronRight } from 'lucide-react';

export const ChiengLaoIntroSection: React.FC<{ onNavigateToSolutions: () => void }> = ({ onNavigateToSolutions }) => {
  const [activeNaturalFactor, setActiveNaturalFactor] = useState(FIELD_CONDITIONS[0].id);

  const selectedFactor = FIELD_CONDITIONS.find((f) => f.id === activeNaturalFactor) || FIELD_CONDITIONS[0];

  const currentStatusIssues = [
    {
      title: 'Đất xói mòn và chua hóa nặng',
      badge: 'Độ dốc 15°–35°',
      desc: 'Độ dốc lớn khiến tầng đất mặt giàu hữu cơ liên tục bị rửa trôi sau các trận mưa dông. Đất bị chua hóa nghiêm trọng (pH < 4,5), nghèo Lân dễ tiêu, Canxi, Magie và các vi lượng thiết yếu.',
      impact: 'Rễ còi cọc, vàng lá bó rễ, cây suy kiệt sau 3 vụ thu hoạch.'
    },
    {
      title: 'Rửa trôi phân bón do sai kỹ thuật',
      badge: 'Thất thoát 30%–50%',
      desc: 'Thói quen rải phân NPK trực tiếp lên bề mặt sườn dốc làm thất thoát 30%–50% lượng dinh dưỡng sau mỗi trận mưa, vừa làm đội chi phí sản xuất vừa gây nguy cơ phú dưỡng ô nhiễm nguồn nước lưu vực sông Đà.',
      impact: 'Tốn kém tiền bạc nhưng cây chỉ hấp thụ được chưa tới 1/2 lượng phân bón.'
    },
    {
      title: 'Thiếu nước tưới & Rủi ro thời tiết cực đoan',
      badge: 'Rụng nụ mùa hoa',
      desc: 'Đa số diện tích phụ thuộc hoàn toàn vào nước trời; sườn dốc cao gây khó khăn cho việc kéo ống dẫn nước từ lòng hồ lên đồi. Gặp hạn hán mùa khô (tháng 2–3) khiến hoa bị nghẹn, rụng nụ hàng loạt; mùa đông đối mặt rét sương muối.',
      impact: 'Năng suất bấp bênh, nhiều vụ mất trắng do khô hạn đúng thời điểm phân hóa mầm hoa.'
    },
    {
      title: 'Độc canh thiếu thảm thực vật bảo vệ',
      badge: 'Vi khí hậu bất lợi',
      desc: 'Vẫn tồn tại nhiều vườn trồng thuần giống Catimor phơi nắng trần trụi, thiếu cây che bóng (như Mắc ca, Muồng đen) và thiếu thảm cỏ giữ đất. Nắng hè chiếu thẳng làm nhiệt độ đất mặt lên tới 40°C, đốt cháy rễ tơ.',
      impact: 'Vườn cây mau già cỗi, sâu đục thân và bệnh rỉ sắt bùng phát mạnh.'
    }
  ];

  return (
    <div className="space-y-16 animate-in fade-in duration-200">
      
      {/* 1. Header Banner & Geography Profile */}
      <section className="bg-white dark:bg-[#141f18] border border-stone-300 dark:border-[#283b2e] rounded-3xl p-6 sm:p-10 shadow-sm transition-colors">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-900 dark:text-emerald-300 bg-emerald-100/90 dark:bg-emerald-950/80 px-3 py-1.5 rounded-lg border border-emerald-300 dark:border-emerald-800">
              <MapPin className="w-3.5 h-3.5" />
              <span>Địa bàn chiến lược · Xã Chiềng Lao, huyện Mường La, tỉnh Sơn La</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-950 dark:text-white leading-tight">
              Chiềng Lao – Miền Đất Sườn Dốc Ven Lòng Hồ Sông Đà
            </h2>

            <p className="text-sm sm:text-base text-stone-800 dark:text-stone-200 leading-relaxed font-normal">
              {CHIENG_LAO_PROFILE.overview}
            </p>

            {/* Quick Geo Tags */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs">
              <div className="p-3.5 rounded-xl bg-stone-100 dark:bg-stone-800/80 border border-stone-200 dark:border-stone-700 space-y-1">
                <span className="text-stone-700 dark:text-stone-300 block font-bold">Độ dốc nương rẫy:</span>
                <span className="font-black text-stone-950 dark:text-white font-mono text-sm sm:text-base">15° – 35°</span>
              </div>
              <div className="p-3.5 rounded-xl bg-stone-100 dark:bg-stone-800/80 border border-stone-200 dark:border-stone-700 space-y-1">
                <span className="text-stone-700 dark:text-stone-300 block font-bold">Độ cao vành đai:</span>
                <span className="font-black text-stone-950 dark:text-white font-mono text-sm sm:text-base">600m – 1.400m</span>
              </div>
              <div className="p-3.5 rounded-xl bg-stone-100 dark:bg-stone-800/80 border border-stone-200 dark:border-stone-700 space-y-1 col-span-2 sm:col-span-1">
                <span className="text-stone-700 dark:text-stone-300 block font-bold">Hệ sinh thái:</span>
                <span className="font-black text-stone-950 dark:text-white text-xs sm:text-sm">Ven hồ Thủy điện</span>
              </div>
            </div>
          </div>

          {/* Right Visual Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-emerald-950 via-stone-900 to-amber-950 p-6 sm:p-8 rounded-2xl text-white space-y-5 shadow-md border border-emerald-900/40">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center text-amber-300">
                <Waves className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-emerald-300 block">
                  Chuyển dịch kinh tế địa phương
                </span>
                <h3 className="font-serif text-lg font-bold text-white">Từ Cá Lồng Đến Nương Cà Phê</h3>
              </div>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-stone-100 leading-relaxed font-normal">
              <p>
                <b className="text-amber-200">Thế mạnh truyền thống:</b> Khai thác lòng hồ thủy điện Sơn La với nghề nuôi cá lồng (cá lăng, cá chiên) và trồng cây sơn tra (táo mèo).
              </p>
              <p>
                <b className="text-emerald-200">Bước chuyển mình:</b> Mở rộng cây cà phê Arabica lên sườn đồi cao vừa tạo nguồn thu nhập lớn, vừa đóng vai trò <i>lá chắn xanh</i> chống xói mòn trôi bùn đất vào lòng hồ thủy điện quốc gia.
              </p>
            </div>

            <div className="pt-2 border-t border-white/20 flex items-center justify-between">
              <span className="font-serif italic text-xs text-amber-200 font-medium">
                Arabica Highlands · Chiềng Lao
              </span>
              <button
                onClick={onNavigateToSolutions}
                className="btn-tactile px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center gap-1 shadow-sm"
              >
                <span>Xem 5 giải pháp</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 2. So Sánh Chiềng Lao với Các Vựa Cà Phê Truyền Thống */}
      <section className="space-y-6">
        <div>
          <span className="text-xs font-bold tracking-widest uppercase text-emerald-800 dark:text-emerald-300 block mb-1">
            Phân tích so sánh đặc thù
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-950 dark:text-white">
            Chiềng Lao Khác Biệt Thế Nào So Với Mai Sơn, Thuận Châu?
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 mt-1 max-w-3xl font-medium">
            Hiểu rõ những điểm khác biệt giúp nông dân Chiềng Lao không áp dụng máy móc kỹ thuật của vùng khác, mà chọn đúng phương pháp thích nghi:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {CHIENG_LAO_PROFILE.comparisonWithOtherHubs.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl border border-stone-300 dark:border-stone-800 bg-white dark:bg-[#141f18] space-y-3 shadow-2xs transition-colors"
            >
              <div className="flex items-center justify-between text-xs font-bold text-emerald-900 dark:text-emerald-300 pb-2 border-b border-stone-200 dark:border-stone-800">
                <span>{item.criteria}</span>
                <span className="font-mono text-stone-600 dark:text-stone-400">#{idx + 1}</span>
              </div>

              <div className="space-y-2 text-xs">
                <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-900/60">
                  <span className="text-[10px] font-bold uppercase text-amber-900 dark:text-amber-200 block mb-0.5">
                    Tại Chiềng Lao:
                  </span>
                  <p className="text-stone-900 dark:text-stone-100 font-medium leading-snug">{item.chiengLao}</p>
                </div>

                <div className="p-3 rounded-xl bg-stone-100 dark:bg-stone-800/80 border border-stone-200 dark:border-stone-700">
                  <span className="text-[10px] font-bold uppercase text-stone-700 dark:text-stone-300 block mb-0.5">
                    Các vựa khác (Mai Sơn, Thuận Châu):
                  </span>
                  <p className="text-stone-800 dark:text-stone-200 leading-snug">{item.otherHubs}</p>
                </div>
              </div>

              <div className="pt-1 text-xs text-emerald-900 dark:text-emerald-300 font-bold">
                ➔ {item.advantageOrChallenge}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Hiện Trạng 4 Điểm Nghẽn */}
      <section className="space-y-6">
        <div>
          <span className="text-xs font-bold tracking-widest uppercase text-rose-800 dark:text-rose-300 flex items-center gap-1.5 mb-1">
            <AlertTriangle className="w-4 h-4 text-rose-600" />
            <span>Thực trạng hiện trường</span>
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-950 dark:text-white">
            4 Thách Thức Cần Giải Quyết Để Cây Cà Phê Trụ Vững
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 mt-1 max-w-3xl font-medium">
            Nếu giữ thói quen canh tác rải phân nổi trên mặt đất và trồng trần trụi không cây che bóng, cà phê Chiềng Lao sẽ suy kiệt nhanh chóng:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {currentStatusIssues.map((issue, idx) => (
            <div
              key={issue.title}
              className="p-6 rounded-3xl border border-stone-300 dark:border-stone-800 bg-white dark:bg-[#141f18] space-y-3 shadow-2xs transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-rose-900 dark:text-rose-200 bg-rose-100 dark:bg-rose-950/80 px-2.5 py-1 rounded-lg border border-rose-300 dark:border-rose-900">
                  {issue.badge}
                </span>
                <span className="font-serif text-2xl font-black text-stone-400 dark:text-stone-600">
                  0{idx + 1}
                </span>
              </div>
              <h4 className="font-serif text-lg sm:text-xl font-bold text-stone-950 dark:text-white">
                {issue.title}
              </h4>
              <p className="text-xs sm:text-sm text-stone-800 dark:text-stone-200 leading-relaxed font-normal">
                {issue.desc}
              </p>
              <div className="pt-2 border-t border-stone-200 dark:border-stone-800 text-xs text-rose-900 dark:text-rose-300 font-semibold flex items-start gap-1.5">
                <ShieldAlert className="w-4 h-4 shrink-0 mt-0.5 text-rose-600" />
                <span>Hậu quả: {issue.impact}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Khắc Phục Theo 4 Yếu Tố Tự Nhiên (Khí hậu, Đất dốc, Nước mùa khô, Giống) */}
      <section className="space-y-6">
        <div>
          <span className="text-xs font-bold tracking-widest uppercase text-emerald-800 dark:text-emerald-300 flex items-center gap-1.5 mb-1">
            <Compass className="w-4 h-4 text-emerald-600" />
            <span>Hướng khắc phục cụ thể</span>
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-950 dark:text-white">
            Khắc Phục 4 Bất Lợi Tự Nhiên Của Vùng Đất Chiềng Lao
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 mt-1 max-w-3xl font-medium">
            Bấm chọn từng yếu tố để xem nguyên tắc kỹ thuật đồng bộ:
          </p>
        </div>

        {/* 4 Factor Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5">
          {FIELD_CONDITIONS.map((cond) => {
            const isSelected = cond.id === selectedFactor.id;
            return (
              <button
                key={cond.id}
                onClick={() => setActiveNaturalFactor(cond.id)}
                className={`btn-tactile p-4 rounded-2xl border text-left transition-all flex flex-col justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 ${
                  isSelected
                    ? 'bg-emerald-800 dark:bg-emerald-700 text-white border-emerald-950 dark:border-emerald-600 shadow-sm'
                    : 'bg-white dark:bg-[#141f18] border-stone-300 dark:border-stone-800 text-stone-900 dark:text-stone-200 hover:border-emerald-600/50'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl">{cond.icon}</span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${isSelected ? 'bg-white/20 text-white' : 'bg-stone-100 dark:bg-stone-800 text-stone-800 dark:text-stone-200'}`}>
                    {cond.severityLabel}
                  </span>
                </div>
                <span className="font-serif font-bold text-xs sm:text-sm leading-snug">
                  {cond.factor}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Factor Detail Box */}
        <div className="rounded-3xl border border-stone-300 dark:border-stone-800 bg-white dark:bg-[#141f18] p-6 sm:p-8 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            <div className="lg:col-span-5 space-y-4 lg:border-r lg:border-stone-200 dark:lg:border-stone-800 lg:pr-8">
              <div>
                <span className="text-xs font-bold text-emerald-900 dark:text-emerald-300 uppercase tracking-wider block mb-1">
                  Thực tế tại Chiềng Lao
                </span>
                <h4 className="font-serif text-xl sm:text-2xl font-bold text-stone-950 dark:text-white">
                  {selectedFactor.factor}
                </h4>
              </div>

              <div className="p-4 rounded-2xl bg-stone-100 dark:bg-stone-800/80 border border-stone-200 dark:border-stone-700 space-y-1.5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-rose-900 dark:text-rose-300 block">
                  Bất lợi thực địa:
                </span>
                <p className="text-xs sm:text-sm text-stone-900 dark:text-stone-100 leading-relaxed font-normal">
                  {selectedFactor.chiengLaoCurrent}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800/60 space-y-1.5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-900 dark:text-emerald-300 block">
                  Đặc tính sinh thái cây cà phê:
                </span>
                <p className="text-xs sm:text-sm text-stone-900 dark:text-stone-100 leading-relaxed font-normal">
                  {selectedFactor.coffeeRequirement}
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-5">
              <div>
                <span className="text-xs font-bold text-stone-700 dark:text-stone-300 uppercase tracking-wider block mb-1">
                  Nguyên tắc kỹ thuật sống còn:
                </span>
                <div className="font-serif text-lg font-bold text-emerald-900 dark:text-emerald-300 leading-snug">
                  “{selectedFactor.technicalPrinciple}”
                </div>
              </div>

              <div className="space-y-3">
                <span className="text-xs font-bold text-stone-800 dark:text-stone-200 uppercase tracking-wider block">
                  Hành động kỹ thuật bắt buộc:
                </span>

                {selectedFactor.keyActions.map((action, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-2xl bg-stone-100 dark:bg-stone-800/80 border border-stone-200 dark:border-stone-700 flex items-start gap-3.5"
                  >
                    <div className="w-6 h-6 rounded-full bg-emerald-700 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      {i + 1}
                    </div>
                    <p className="text-xs sm:text-sm text-stone-900 dark:text-stone-100 leading-relaxed font-normal">
                      {action}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <button
                  onClick={onNavigateToSolutions}
                  className="btn-tactile w-full py-3.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 dark:bg-emerald-700 text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>Chuyển sang 5 giải pháp kỹ thuật cốt lõi</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
