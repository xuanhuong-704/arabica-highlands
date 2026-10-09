import React, { useState } from 'react';
import { Sparkles, Send, Bot, HelpCircle, ArrowRight } from 'lucide-react';

export const AgriAiAdvisor: React.FC = () => {
  const [question, setQuestion] = useState('');
  const [conversation, setConversation] = useState<Array<{ sender: 'user' | 'ai'; text: string; time: string }>>([
    {
      sender: 'ai',
      text: 'Xin chào bà con và cán bộ khuyến nông! Tôi là Trợ lý Kỹ thuật Canh tác Cà phê Chiềng Lao. Hãy đặt bất kỳ câu hỏi nào về: Kỹ thuật ngắm thước chữ A, trồng cỏ Vetiver cản bùn, phối trộn Than sinh học Biochar, cải tạo đất chua bằng Dolomite, lắp bể bạt HDPE đỉnh đồi tự chảy, hay kỹ thuật căng tời cáp đồi dốc.',
      time: '08:00'
    }
  ]);
  const [loading, setLoading] = useState(false);

  const curatedQuestions = [
    {
      q: 'Làm sao dùng thước chữ A đóng cọc ngắm đường đồng mức trên nương dốc?',
      a: 'Cách làm: (1) Đóng 2 thanh gỗ dài 1.5m thành chữ A, thanh giằng ngang có buộc dây dọi hoặc dán ống thủy bọt nước thăng bằng. (2) Đặt chân 1 cố định, xoay chân 2 cho đến khi dây dọi rơi đúng vạch giữa (hoặc bọt nước ở tim). (3) Cắm cọc tiêu tại chân 2. (4) Nhấc chân 1 xoay tiếp về phía trước theo cách tương tự. Nối các cọc tiêu lại sẽ được đường ngang đồng mức hoàn hảo không chênh cao.'
    },
    {
      q: 'Cách phối trộn Biochar than sinh học với NPK để phân không bị trôi?',
      a: 'Quy trình: (1) Nghiền nhỏ Biochar cỡ hạt bắp. (2) Ngâm hoạt hóa Biochar với nước phân chuồng hoai mục hoặc men vi sinh 24 giờ trước để nạp dinh dưỡng. (3) Trộn theo tỷ lệ 15%–20% Biochar cùng với lượng NPK và phân hữu cơ dự định bón. (4) Bón vào rãnh vành khăn sâu 10–15cm rồi lấp kín đất dày 7cm. Biochar sẽ giữ chặt phân bón trong đất suốt 4–6 tháng.'
    },
    {
      q: 'Đất nương Chiềng Lao bị chua pH < 4.5 thì bón Dolomite và Lân nung chảy thế nào?',
      a: 'Liều lượng khuyến cáo: Bón 1.0 – 1.5 kg bột vôi Dolomite/gốc/năm chia làm 2 đợt: đợt 1 vào đầu mùa mưa (tháng 5) và đợt 2 vào cuối mùa mưa (tháng 9–10). Dùng 0.8 – 1.0 kg Phân Lân nung chảy (Văn Điển hoặc Ninh Bình) thay cho supe lân. Lân nung chảy có tính kiềm, giàu Canxi, Magie và Silic giúp giải độc nhôm sắt, nâng pH đất lên >5.2.'
    },
    {
      q: 'Cách đào bể tích nước bạt HDPE đỉnh đồi và làm hệ thống tưới tự chảy?',
      a: 'Cách làm: (1) Chọn mỏm đồi cao nhất đào hố dung tích 150–250 m³, gọt nhẵn thành vách và đáy. (2) Trải lớp cát mịn lót đáy rồi phủ bạt nhựa HDPE dày 0.75mm, chôn gờ bạt sâu 40cm quanh miệng hố. (3) Thu gom nước mưa và nước khe suối vào bể. (4) Đặt ống chính phi 42mm hoặc 50mm từ đáy bể xuôi dốc; độ chênh cao 25–40m tạo áp lực tự nhiên 2.5–4.0 bar đủ đẩy nước qua hệ thống ống nhỏ giọt mà không tốn tiền điện máy bơm.'
    },
    {
      q: 'Lắp hệ thống tời cáp sườn dốc bằng động cơ xe máy cần chú ý gì?',
      a: 'Điểm then chốt: (1) Cáp chính phải là cáp thép lụa chịu lực phi 8mm–10mm, hai đầu neo chặt vào cọc bê tông hoặc gốc cây lớn có giằng sắt. (2) Lắp cụm ròng rọc con lăn chịu tải chuyên dụng có móc giỏ tự khóa. (3) Dùng động cơ xe máy cũ hoặc đầu nổ 5.5HP qua hộp số giảm tốc để kéo cáp phụ điều khiển tốc độ. (4) QUY ĐỊNH AN TOÀN: Tuyệt đối chỉ chở vật tư phân bón và quả cà phê, NGHIÊM CẤM đu người trên giỏ tời.'
    },
    {
      q: 'Giống cà phê Arabica nào chịu nóng và chịu hạn tốt nhất ở Chiềng Lao?',
      a: 'Nên chọn các dòng giống Arabica lai mới: TN1, TN2 hoặc dòng Catimor tuyển chọn kháng rỉ sắt F1. Các giống này có bộ rễ khỏe, chịu nhiệt độ mùa hè tốt hơn giống truyền thống. Ở các vùng thấp sát mép lòng hồ (<700m) quá nóng, bà con có thể cân nhắc thử nghiệm xen giống Robusta (vối).'
    }
  ];

  const handleAsk = (queryText: string) => {
    if (!queryText.trim() || loading) return;

    const userQ = queryText.trim();
    const currentTime = new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' });
    setConversation((prev) => [...prev, { sender: 'user', text: userQ, time: currentTime }]);
    setQuestion('');
    setLoading(true);

    setTimeout(() => {
      const matched = curatedQuestions.find(
        (c) =>
          userQ.toLowerCase().includes(c.q.toLowerCase().slice(0, 15)) ||
          c.q.toLowerCase().includes(userQ.toLowerCase().slice(0, 15))
      );

      let reply = '';
      if (matched) {
        reply = matched.a;
      } else if (userQ.toLowerCase().includes('thước a') || userQ.toLowerCase().includes('đồng mức')) {
        reply = 'Kỹ thuật thước A là phương pháp đơn giản nhất giúp bà con Chiềng Lao xác định đường ngang cùng độ cao trên dốc 20°–35°. Khi trồng cây và đào bồn theo đường này, nước mưa chảy tràn sẽ bị chặn lại thành từng bậc thang ngầm, giảm 85% xói mòn.';
      } else if (userQ.toLowerCase().includes('phân') || userQ.toLowerCase().includes('biochar')) {
        reply = 'Bà con lưu ý: Tuyệt đối không rải phân NPK nổi trên mặt nương dốc trước cơn mưa lớn. Hãy đào rãnh vành khăn sâu 10–15cm mép tán, trộn 15% than sinh học Biochar rồi lấp kín đất. Đây là cách giúp tiết kiệm 30%–50% tiền mua phân bón.';
      } else if (userQ.toLowerCase().includes('tời cáp') || userQ.toLowerCase().includes('vác')) {
        reply = 'Hệ thống tời cáp 2 chiều giúp giải quyết dứt điểm nỗi nhọc nhằn leo dốc cõng phân và gùi cà phê tại Chiềng Lao. Mỗi chuyến tời chở được 80–100kg chỉ mất 2–3 phút từ chân đường lên đỉnh nương.';
      } else {
        reply = `Về vấn đề: "${userQ}" tại Chiềng Lao: Nguyên tắc cốt lõi là phải kết hợp "Trồng cây che bóng + Rạch rãnh lấp phân + Cải tạo pH bằng Dolomite + Tủ gốc mùa khô". Bà con có thể liên hệ trực tiếp Trạm Khuyến nông huyện Mường La hoặc Hợp tác xã Cà phê Chiềng Lao để được hướng dẫn thực địa chi tiết!`;
      }

      setConversation((prev) => [
        ...prev,
        { sender: 'ai', text: reply, time: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' }) }
      ]);
      setLoading(false);
    }, 450);
  };

  return (
    <div className="space-y-10 animate-in fade-in duration-200">
      
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-1.5">
          <span className="text-xs font-bold tracking-widest uppercase text-amber-700 dark:text-amber-400 flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>Tư vấn kỹ thuật số khuyến nông</span>
          </span>
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-950 dark:text-white tracking-tight">
          Trợ Lý Kỹ Thuật Khuyến Nông AI Chiềng Lao
        </h2>
        <p className="text-stone-700 dark:text-stone-300 text-xs sm:text-sm mt-1 max-w-3xl font-medium">
          Hỏi đáp trực tiếp mọi thắc mắc về kỹ thuật làm đất, ngắm thước A, trị bệnh rỉ sắt, bón phân chống trôi, lắp tời cáp và tưới tự chảy:
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Curated FAQ Selector */}
        <div className="lg:col-span-5 space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-800 dark:text-stone-200">
            <HelpCircle className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />
            <span>Câu hỏi thực địa phổ biến:</span>
          </div>

          <div className="space-y-2.5">
            {curatedQuestions.map((item, idx) => (
              <button
                key={idx}
                onClick={() => handleAsk(item.q)}
                className="btn-tactile w-full text-left p-3.5 rounded-2xl border border-stone-300 dark:border-stone-800 bg-white dark:bg-[#141f18] hover:border-emerald-600/60 hover:bg-stone-50 dark:hover:bg-stone-800 transition-all text-xs text-stone-900 dark:text-stone-100 flex items-center justify-between gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600"
              >
                <span className="font-bold group-hover:text-emerald-900 dark:group-hover:text-emerald-300 transition-colors line-clamp-2">
                  {item.q}
                </span>
                <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-emerald-600 shrink-0 transition-transform group-hover:translate-x-0.5" />
              </button>
            ))}
          </div>

          {/* Extension Office Contact Notice */}
          <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 text-xs text-emerald-950 dark:text-emerald-200 space-y-1">
            <span className="font-bold block">
              📞 Kênh hỗ trợ nông nghiệp Mường La:
            </span>
            <p className="leading-relaxed font-normal">
              Đường dây khuyến nông xã Chiềng Lao sẵn sàng tư vấn trực tiếp và cung cấp hom giống cỏ Vetiver, mầm giống cỏ lạc dại cho bà con các bản.
            </p>
          </div>
        </div>

        {/* Right Column: AI Console Box */}
        <div className="lg:col-span-7 rounded-3xl border border-stone-300 dark:border-stone-800 bg-white dark:bg-[#141f18] overflow-hidden shadow-sm flex flex-col h-[520px]">
          {/* Console Header */}
          <div className="px-5 py-4 border-b border-stone-200 dark:border-stone-800 bg-stone-100 dark:bg-stone-900/90 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-800 dark:bg-emerald-700 flex items-center justify-center text-white">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <span className="font-serif font-bold text-sm text-stone-950 dark:text-white block leading-tight">
                  Trợ Lý Canh Tác Sườn Dốc Chiềng Lao
                </span>
                <span className="text-xs text-emerald-900 dark:text-emerald-300 font-bold">
                  Cơ sở dữ liệu kỹ thuật nông học địa phương
                </span>
              </div>
            </div>
          </div>

          {/* Messages Scroll Area */}
          <div className="flex-1 p-5 overflow-y-auto space-y-4">
            {conversation.map((msg, i) => (
              <div
                key={i}
                className={`flex gap-3 text-xs sm:text-sm ${
                  msg.sender === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                {msg.sender === 'ai' && (
                  <div className="w-7 h-7 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-950 dark:text-emerald-300 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 border border-emerald-300 dark:border-emerald-800">
                    KN
                  </div>
                )}

                <div
                  className={`max-w-[85%] rounded-2xl p-4 leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-emerald-800 text-white dark:bg-emerald-700 shadow-xs'
                      : 'bg-stone-100 dark:bg-stone-800/90 text-stone-950 dark:text-white border border-stone-200 dark:border-stone-700 font-normal'
                  }`}
                >
                  <p>{msg.text}</p>
                  <span className={`block text-[10px] mt-1.5 font-medium ${msg.sender === 'user' ? 'text-emerald-200 text-right' : 'text-stone-600 dark:text-stone-400'}`}>
                    {msg.time}
                  </span>
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex gap-3 items-center text-xs text-stone-600 dark:text-stone-400">
                <div className="w-7 h-7 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-950 dark:text-emerald-300 flex items-center justify-center text-xs font-bold border border-emerald-300 dark:border-emerald-800">
                  KN
                </div>
                <div className="bg-stone-100 dark:bg-stone-800 p-3 rounded-2xl text-stone-700 dark:text-stone-300 italic flex items-center gap-1.5 border border-stone-200 dark:border-stone-700">
                  <span className="inline-block w-1.5 h-1.5 bg-stone-400 rounded-full animate-bounce" />
                  <span className="inline-block w-1.5 h-1.5 bg-stone-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                  <span className="inline-block w-1.5 h-1.5 bg-stone-400 rounded-full animate-bounce [animation-delay:0.4s]" />
                  <span className="ml-1 text-xs font-medium">Đang tra cứu giải pháp nông học Mường La...</span>
                </div>
              </div>
            )}
          </div>

          {/* Input Bar */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleAsk(question);
            }}
            className="p-3.5 border-t border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-900 flex items-center gap-2"
          >
            <input
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Nhập câu hỏi về kỹ thuật, đất chua, thước A, tời cáp..."
              className="flex-1 px-4 py-2.5 rounded-xl border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-950 text-stone-950 dark:text-white placeholder-stone-500 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600/50"
            />
            <button
              type="submit"
              disabled={!question.trim() || loading}
              className="btn-tactile h-10 px-4 rounded-xl bg-emerald-800 hover:bg-emerald-900 dark:bg-emerald-700 dark:hover:bg-emerald-600 disabled:opacity-50 text-white flex items-center justify-center text-xs font-bold focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600"
              aria-label="Gửi câu hỏi"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>

      </div>

    </div>
  );
};
