import { CoreSolution, FieldCondition, PillarStrategy } from '../types';

export const LOCAL_TERROIR_SUMMARY = {
  brandName: 'Arabica Highlands',
  commune: 'Xã Chiềng Lao',
  district: 'Huyện Mường La',
  province: 'Tỉnh Sơn La',
  geographicContext: 'Nằm ven khu vực lòng hồ Thủy điện Sơn La, địa hình núi chia cắt mạnh với sườn dốc phổ biến 15°–35°, cao độ trải dài từ 600m đến trên 1.400m.',
  traditionalEconomy: 'Thế mạnh truyền thống tập trung vào nuôi cá lồng trên lòng hồ sông Đà, trồng cây ăn quả đồi và rừng kinh tế (sơn tra).',
  provincialCoffeeStatus: 'Sơn La là thủ phủ Arabica lớn thứ hai cả nước với diện tích hàng chục nghìn héc-ta, tập trung ở Mai Sơn, Thuận Châu, Mường Chanh. Tuy nhiên Chiềng Lao nằm ven thung lũng lòng hồ, thấp và nóng hơn, mùa hè bức xạ nhiệt phản xạ lớn, mùa hoa khô khốc kéo dài.',
  survivalPrinciple: 'GIẢM NHIỆT – GIỮ ẨM – CẢI TẠO ĐẤT – GIẢM CÔNG VẬN CHUYỂN',
  slogan: 'Giữ đất – Tích nước – Rẻ công – Đậm vị: Cà phê Chiềng Lao bền vững vươn xa.'
};

export const CHIENG_LAO_PROFILE = {
  title: 'Giới thiệu về Xã Chiềng Lao, Mường La',
  subtitle: 'Vùng cao ven lòng hồ Thủy điện Sơn La – Vùng đất tiềm năng và khát vọng phát triển cà phê bền vững',
  overview: 'Chiềng Lao là một xã vùng cao thuộc huyện Mường La, tỉnh Sơn La, nằm nép mình bên dòng sông Đà hùng vĩ và khu vực lòng hồ thủy điện Sơn La. Nơi đây là địa bàn cư trú lâu đời của đồng bào dân tộc Thái, La Ha và các dân tộc anh em tại các bản như bản Cang, bản Nậm Lầu, bản Tạ Búng... với truyền thống cần cù, gắn bó sâu sắc với núi rừng và sông nước.',
  geography: {
    location: 'Phía Tây Bắc huyện Mường La, tiếp giáp lòng hồ Thủy điện Sơn La và các tuyến giao thông liên xã Chiềng Lao – Nậm Giôn.',
    topography: 'Địa hình núi đá vôi xen kẽ đồi đất Feralit, độ dốc sườn núi phổ biến từ 15° đến 35°, chia cắt mạnh bởi các khe suối đổ ra sông Đà.',
    altitude: 'Biến thiên từ 600m (vùng mép nước lòng hồ) lên đến 1.400m (đỉnh các dãy núi cao).',
    climate: 'Khí hậu nhiệt đới gió mùa vùng cao, chịu ảnh hưởng của hiệu ứng lòng hồ: mùa hè nóng ẩm kèm bức xạ nhiệt phản xạ từ mặt nước; mùa khô (tháng 1 – 4) khô khốc kéo dài; mùa đông có gió mùa và sương muối rét buốt cục bộ ở đai cao.'
  },
  economicShift: {
    current: 'Khai thác và nuôi trồng thủy sản trên lòng hồ sông Đà (cá lồng đặc sản: cá lăng, cá chiên, cá trắm đen), kết hợp trồng cây sơn tra (táo mèo) và cây ăn quả đồi.',
    potential: 'Tận dụng dải đất sườn đồi từ độ cao 750m – 1.400m để mở rộng diện tích cà phê Arabica đặc sản gắn với bảo tồn đất dốc, chống xói mòn trôi bùn xuống hồ thủy điện, tạo chuỗi giá trị nông nghiệp bền vững cho bà con.'
  },
  comparisonWithOtherHubs: [
    {
      criteria: 'Địa hình & Độ dốc',
      chiengLao: 'Sườn dốc 15°–35°, chia cắt mạnh ven hồ sông Đà',
      otherHubs: 'Đồi lượn sóng hoặc thung lũng thoải 8°–18° (Mai Sơn, Thuận Châu)',
      advantageOrChallenge: 'Thách thức lớn về xói mòn đất và chi phí công gùi vác'
    },
    {
      criteria: 'Nhiệt độ mùa hè',
      chiengLao: 'Nóng hơn 2°C–3°C do bức xạ nhiệt phản xạ từ mặt nước lòng hồ',
      otherHubs: 'Cao nguyên mát mẻ quanh năm (cao độ >900m đồng đều)',
      advantageOrChallenge: 'Bắt buộc phải trồng cây che bóng và thảm cỏ giữ ẩm'
    },
    {
      criteria: 'Nguồn nước mùa khô',
      chiengLao: 'Lòng hồ ở sâu dưới chân dốc, đỉnh nương phụ thuộc nước trời',
      otherHubs: 'Hệ thống suối tự nhiên và mạch ngầm dồi dào hơn',
      advantageOrChallenge: 'Cần giải pháp bể bạt HDPE đỉnh đồi tưới tự chảy'
    },
    {
      criteria: 'Cơ hội phát triển',
      chiengLao: 'Đất còn nhiều tiềm năng, biên độ ngày đêm lớn ở đai cao tạo vị ngọt',
      otherHubs: 'Diện tích cà phê đã bão hòa, đất canh tác lâu năm bị chai cứng',
      advantageOrChallenge: 'Cơ hội đi tắt đón đầu với mô hình cà phê sinh thái tuần hoàn'
    }
  ]
};

export const FIELD_CONDITIONS: FieldCondition[] = [
  {
    id: 'khi-hau',
    factor: 'Khí hậu & Nhiệt độ (Yếu tố quan trọng nhất)',
    icon: '☀️',
    chiengLaoCurrent: 'Nằm ở vành đai thung lũng ven lòng hồ sông Đà, mùa hè nóng gay gắt, bức xạ nhiệt phản xạ từ mặt hồ cao; mùa đông có đợt rét buốt sương muối cục bộ.',
    coffeeRequirement: 'Cà phê Arabica ưa mát (18°C–24°C), nhạy cảm với nắng gắt >32°C gây cháy chồi và rét sương muối <5°C gây cháy lá.',
    severity: 'critical',
    severityLabel: 'Trở ngại lớn nhất',
    technicalPrinciple: 'Tạo lập môi trường tiểu khí hậu tầng tán tự nhiên, che bóng tầng cao và làm mát mặt đất.',
    keyActions: [
      'Trồng xen cây che bóng tầng cao: Muồng đen, Keo dậu, Mắc ca, Mít (mật độ 100–120 cây/ha).',
      'Cắt bớt gió khô nóng từ lòng hồ thốc lên sườn đồi.',
      'Duy trì thảm cỏ lạc dại che phủ sát mặt đất để chống hấp nhiệt làm cháy rễ tơ.'
    ]
  },
  {
    id: 'dat-doc',
    factor: 'Địa hình sườn dốc & Đất chua nghèo Lân',
    icon: '⛰️',
    chiengLaoCurrent: 'Độ dốc nương rẫy từ 15° đến 35°. Đất Feralit bị rửa trôi tầng mặt nghiêm trọng, độ chua cao (pH < 4,5), độc chất Nhôm/Sắt cố định Lân.',
    coffeeRequirement: 'Cần đất tơi xốp, tầng đất dày >70cm, pH từ 5,2–6,0, hàm lượng mùn hữu cơ >3% và giàu Canxi, Magie.',
    severity: 'critical',
    severityLabel: 'Bào mòn tầng canh tác',
    technicalPrinciple: 'Khóa dòng chảy mặt, cắt dốc thành các dải đồng mức và trung hòa độ chua.',
    keyActions: [
      'Tuyệt đối không cuốc xới thẳng từ đỉnh xuống đáy; canh tác theo đường đồng mức chuẩn thước A.',
      'Trồng dải cỏ Vetiver rễ sâu 2–3m cản bùn kết hợp hố vảy cá giữ nước.',
      'Bón lót nhiều phân chuồng ủ hoai mục + phân vi sinh + bón vôi Dolomite định kỳ.'
    ]
  },
  {
    id: 'nguon-nuoc',
    factor: 'Nguồn nước tưới & Khô hạn mùa hoa',
    icon: '💧',
    chiengLaoCurrent: 'Lòng hồ ở thấp dưới chân đồi trong khi nương cà phê ở triền dốc cao. Mùa khô (tháng 1 – 4) khô khốc kéo dài, nương phụ thuộc hoàn toàn vào nước trời dẫn đến rụng hoa.',
    coffeeRequirement: 'Giai đoạn phân hóa mầm hoa và đậu quả non (tháng 2–3) bắt buộc phải có 1–2 đợt nước tưới đẫm để hoa bung đều.',
    severity: 'high',
    severityLabel: 'Quyết định tỷ lệ đậu quả',
    technicalPrinciple: 'Thu gom nước mưa đỉnh đồi tận dụng thế năng tự chảy + Tủ gốc giữ ẩm triệt để.',
    keyActions: [
      'Đào bể tích trữ nước mưa lót bạt HDPE trên các mỏm đồi cao, dẫn ống tưới nhỏ giọt tự chảy.',
      'Tủ gốc dày 10–15cm bằng rơm rạ, cỏ khô, thân chuối băm nhỏ quanh tán cây.',
      'Tận dụng nguồn nước khe suối tự nhiên dẫn về bể chứa trung gian.'
    ]
  },
  {
    id: 'giong-cay',
    factor: 'Lựa chọn cơ cấu giống thích ứng',
    icon: '🌱',
    chiengLaoCurrent: 'Trước đây đưa giống Catimor thuần cũ không che bóng dẫn đến cây suy kiệt sau 3 vụ thu hoạch do kiệt sức vì nắng.',
    coffeeRequirement: 'Cần dòng giống có tính thích nghi sinh thái rộng, chịu nóng khá hơn, kháng bệnh rỉ sắt và chịu hạn tốt.',
    severity: 'medium',
    severityLabel: 'Cần chuyển đổi giống mới',
    technicalPrinciple: 'Cơ cấu giống Arabica chọn lọc theo từng cao độ địa hình.',
    keyActions: [
      'Độ cao >850m: Trồng giống Arabica dòng mới chịu hạn và kháng rỉ sắt (TN1, TN2, Catimor chọn lọc F1).',
      'Độ cao thấp sát lòng hồ (<700m) quá nóng: Thử nghiệm diện tích nhỏ cà phê Robusta (vối) chịu nhiệt.',
      'Tuyển chọn cây giống đầu dòng có chứng nhận kiểm định, gốc ghép khỏe.'
    ]
  }
];

export const CORE_SOLUTIONS: CoreSolution[] = [
  {
    id: 'bao-ve-dat-mat',
    orderNumber: '01',
    target: 'Bảo vệ đất mặt & Chống xói mòn',
    coreTech: 'Cỏ Vetiver + Hố vảy cá + Đường đồng mức',
    headline: 'Khóa chặt 80%–90% lượng đất mặt bị xói mòn và giữ trọn lớp mùn hữu cơ',
    badge: 'Kỹ thuật nền móng',
    impactHighlight: 'Giữ lại 15–20 tấn mùn hữu cơ/ha/năm không bị trôi xuống lòng hồ thủy điện Sơn La.',
    impactMetrics: [
      { label: 'Giảm xói mòn', value: '85% – 90%' },
      { label: 'Giữ ẩm tầng rễ', value: '+35%' },
      { label: 'Chi phí đầu tư', value: 'Rất thấp (nhân giống cỏ)' }
    ],
    steps: [
      {
        stepNum: 1,
        title: 'Xác định đường ngang đồng mức bằng khung thước A',
        detail: 'Nông dân tự đóng khung thước gỗ hình chữ A (chiều cao 1.5m, thanh giằng ngang có dây dọi hoặc ống thủy bọt nước). Bắt đầu từ chân đồi đo ngắm ngang để đánh dấu các cọc tiêu cùng độ cao, tạo thành các đường cong ngang sườn dốc.',
        toolOrMaterial: 'Thước gỗ chữ A, cọc tre đánh dấu, dây dọi',
        checkNote: 'Khoảng cách giữa 2 đường đồng mức từ 4m – 6m tùy độ dốc (dốc >25° thì khoảng cách 3.5m–4m).'
      },
      {
        stepNum: 2,
        title: 'Trồng dải cỏ Vetiver tạo hàng rào sinh học cản bùn',
        detail: 'Trồng các dải cỏ Vetiver sát mép ngoài của đường đồng mức với mật độ dày (10–15 cm/bụi). Bộ rễ Vetiver ăn sâu 2m–3m thẳng đứng đan thành bức tường ngầm giữ đất, lá cỏ đan dày ngăn bùn đất bị nước cuốn trôi.',
        toolOrMaterial: 'Tép cỏ Vetiver sạch bệnh, cuốc chim',
        checkNote: 'Trồng vào đầu mùa mưa (tháng 5–6) để cỏ bén rễ nhanh trước các đợt mưa rào lớn.'
      },
      {
        stepNum: 3,
        title: 'Đào hố vảy cá (hình bán nguyệt) phía dưới gốc',
        detail: 'Đào hố hình bán nguyệt ôm lấy phía sườn dốc dưới của mỗi gốc cà phê với kích thước: rộng 40cm, sâu 30cm, dài 60cm. Đất đào được đắp thành gờ cao ở mép ngoài để gom nước mưa, lắng đọng phù sa và giúp nước ngấm từ từ vào tầng rễ sâu.',
        toolOrMaterial: 'Xẻng, cuốc chim đào đất dốc',
        checkNote: 'Hằng năm vào cuối mùa mưa, vét bùn phù sa lắng trong hố vảy cá đắp ngược lại gốc cây.'
      }
    ],
    practicalTips: [
      'Không dùng thuốc trừ cỏ diệt sạch thảm cỏ Vetiver; khi cỏ cao 1m thì cắt tỉa thân lá phủ quanh gốc cà phê.',
      'Ở những điểm tụ thủy có nguy cơ rãnh xói lở sâu, trồng bổ sung 2 hàng Vetiver hình nan quạt.'
    ],
    equipmentNeeded: ['Thước chữ A', 'Cây giống cỏ Vetiver', 'Cuốc xẻng làm bồn'],
    icon: '🛡️'
  },
  {
    id: 'tiet-kiem-phan-bon',
    orderNumber: '02',
    target: 'Tiết kiệm phân bón & Giữ dinh dưỡng',
    coreTech: 'Bón rạch rãnh lấp đất + Than sinh học Biochar',
    headline: 'Chấm dứt việc rải phân trôi xuống suối, giảm 30%–50% chi phí phân bón NPK',
    badge: 'Tiết kiệm kinh tế',
    impactHighlight: 'Phân bón được giữ kín trong đất, không bị bốc hơi do nắng hay cuốn trôi do mưa dốc.',
    impactMetrics: [
      { label: 'Giảm thất thoát phân', value: '30% – 50%' },
      { label: 'Hấp phụ dinh dưỡng', value: 'Kéo dài 4–6 tháng' },
      { label: 'Bảo vệ nguồn nước', value: '100% không rò rỉ suối' }
    ],
    steps: [
      {
        stepNum: 1,
        title: 'Rạch rãnh hình vành khăn theo mép tán cây',
        detail: 'Tuyệt đối không rải phân vung vãi lên mặt đất dốc. Dùng cuốc rạch một rãnh hình bán nguyệt (hoặc 2 hố đối ứng) ở phía trên dốc theo hình chiếu tán lá cây, độ sâu 10–15cm, rộng 15cm (nơi tập trung 80% rễ tơ hút dinh dưỡng).',
        toolOrMaterial: 'Cuốc xới nhẹ tránh đứt rễ cọc',
        checkNote: 'Tránh đào quá sát gốc cây gây tổn thương cổ rễ.'
      },
      {
        stepNum: 2,
        title: 'Phối trộn NPK + Vi sinh với Than sinh học Biochar',
        detail: 'Trộn phân khoáng NPK và phân hữu cơ vi sinh với Than sinh học Biochar (sản xuất từ củi khô hoặc vỏ cà phê ủ yếm khí) theo tỷ lệ 10%–20% Biochar. Biochar có cấu trúc xốp vi mô hoạt động như miếng bọt biển giữ chặt ion N, P, K và nước.',
        toolOrMaterial: 'Than sinh học Biochar nghiền nhỏ, phân hữu cơ, NPK',
        checkNote: 'Biochar cần được hoạt hóa trước với nước phân chuồng loãng 24h để nạp sẵn vi sinh.'
      },
      {
        stepNum: 3,
        title: 'Đưa hỗn hợp vào rãnh và lấp đất kín',
        detail: 'Rải đều hỗn hợp phân đã phối trộn vào lòng rãnh, sau đó cào đất mịn lấp kín hoàn toàn dày 5–7cm rồi nén nhẹ để tránh bị nước mưa xói bay.',
        toolOrMaterial: 'Cào đất, dầm tay',
        checkNote: 'Bón khi đất có độ ẩm hoặc trước cơn mưa vừa (không bón đón đầu trận mưa bão lớn).'
      },
      {
        stepNum: 4,
        title: 'Tủ gốc bằng rơm rạ hoặc vỏ cà phê mục',
        detail: 'Phủ một lớp vật liệu hữu cơ dày 10cm lên trên mặt rãnh và quanh gốc (cách gốc cây 10cm) để che chắn ánh nắng mặt trời làm chết hệ vi sinh vật có ích.',
        toolOrMaterial: 'Vỏ trấu cà phê ủ mục, rơm, thân cỏ khô',
        checkNote: 'Không để vật liệu tủ chạm sát cổ rễ để tránh nấm bệnh xâm nhập.'
      }
    ],
    practicalTips: [
      'Tận dụng triệt để vỏ quả cà phê sau sơ chế để ủ cùng men Trichoderma làm phân hữu cơ tại chỗ.',
      'Chia nhỏ lượng phân thành 3–4 lần bón trong mùa mưa thay vì bón dồn 1 lần.'
    ],
    equipmentNeeded: ['Thùng trộn phân', 'Biochar hoạt hóa', 'Cuốc rạch rãnh'],
    icon: '🌱'
  },
  {
    id: 'khac-phuc-dat-chua',
    orderNumber: '03',
    target: 'Khắc phục đất chua & Kích thích rễ',
    coreTech: 'Dolomite + Lân nung chảy + Nấm Mycorrhiza',
    headline: 'Nâng pH đất từ <4,5 lên >5,2, hóa giải độc nhôm và giải phóng Lân khó tiêu',
    badge: 'Cải tạo thổ nhưỡng',
    impactHighlight: 'Rễ cà phê bung dài gấp đôi, rễ tơ hút dinh dưỡng mạnh mẽ, chấm dứt hiện tượng vàng lá bó rễ.',
    impactMetrics: [
      { label: 'Nâng độ pH đất', value: 'Từ <4.5 lên >5.2' },
      { label: 'Bổ sung Ca & Mg', value: 'Tăng 60% độ phì' },
      { label: 'Diện tích rễ hữu hiệu', value: '+120% nhờ nấm cộng sinh' }
    ],
    steps: [
      {
        stepNum: 1,
        title: 'Rải đều Dolomite/vôi nung quanh tán cây',
        detail: 'Rải đều bột Dolomite (chứa Canxi cacbonat và Magie cacbonat) với liều lượng 1,0 – 1,5 kg/gốc/năm quanh vùng rễ tán cây. Thực hiện 2 đợt: đợt 1 vào đầu mùa mưa (tháng 5) và đợt 2 vào cuối mùa mưa (tháng 9–10).',
        toolOrMaterial: 'Vôi Dolomite nông nghiệp, găng tay bảo hộ',
        checkNote: 'Bón vôi cách đợt bón đạm và lân ít nhất 15 ngày để tránh thất thoát đạm.'
      },
      {
        stepNum: 2,
        title: 'Thay thế Supe Lân bằng Phân Lân nung chảy',
        detail: 'Đất Chiềng Lao bị chua và có nhiều ion Nhôm (Al3+), Sắt (Fe3+) tự do cố định chặt Lân. Sử dụng Phân Lân nung chảy Văn Điển/Ninh Bình (tính kiềm nhẹ, giàu Canxi 28–34%, Magie 15–18%, Silic 24–30%) để vừa cung cấp Lân bền vững vừa trung hòa độ chua.',
        toolOrMaterial: 'Phân lân nung chảy FMP',
        checkNote: 'Lân nung chảy không tan trong nước mà tan trong axit do rễ tiết ra, không bị rửa trôi.'
      },
      {
        stepNum: 3,
        title: 'Cấy nấm rễ nội cộng sinh Mycorrhiza',
        detail: 'Trộn 10–20g chế phẩm bào tử nấm rễ Mycorrhiza cùng với phân hữu cơ bón lót sâu vào vùng rễ đang phát triển. Sợi nấm Mycorrhiza sẽ ký sinh cộng sinh vào rễ cà phê, mở rộng mạng lưới hút nước và tiết enzyme phosphatase hòa tan Lân khó tiêu.',
        toolOrMaterial: 'Chế phẩm nấm rễ Mycorrhiza sinh học',
        checkNote: 'Không dùng thuốc diệt nấm hóa học tưới vào gốc sau khi cấy Mycorrhiza.'
      }
    ],
    practicalTips: [
      'Định kỳ 6 tháng kiểm tra pH đất bằng máy đo cầm tay hoặc quỳ tím nông nghiệp tại 5 điểm trong vườn.',
      'Khi pH vượt trên 5.5, giảm lượng Dolomite xuống 0.5 kg/gốc/năm để duy trì cân bằng.'
    ],
    equipmentNeeded: ['Bột vôi Dolomite', 'Lân nung chảy FMP', 'Men Mycorrhiza', 'Bút đo pH đất'],
    icon: '🧪'
  },
  {
    id: 'chong-suong-han',
    orderNumber: '04',
    target: 'Chống sương muối, nắng nóng & Khắc phục hạn',
    coreTech: 'Trồng xen Muồng/Mắc ca + Tưới tự chảy đỉnh đồi',
    headline: 'Giảm 2–3°C hại sương muối, giảm 20–30% bức xạ nắng hè và tự chủ nước tưới không tốn tiền điện',
    badge: 'Ứng phó biến đổi khí hậu',
    impactHighlight: 'Bảo vệ hoa không bị rụng do khô khốc mùa hoa và chống cháy lá khi sương muối tràn về lòng hồ.',
    impactMetrics: [
      { label: 'Hạ nhiệt độ hè', value: '2°C – 4°C' },
      { label: 'Cản sương muối đông', value: 'Giảm 70% tổn thương lá' },
      { label: 'Chi phí năng lượng tưới', value: '0 đồng (trọng lực tự chảy)' }
    ],
    steps: [
      {
        stepNum: 1,
        title: 'Trồng xen cây che bóng Muồng đen hoặc Mắc ca',
        detail: 'Trồng xen cây Muồng đen (Cassia siamea) hoặc cây Mắc ca dọc theo các đường đồng mức với mật độ 100–120 cây/ha (khoảng cách 10m x 10m). Muồng đen là cây họ đậu cố định đạm, tán thưa lọc bớt 30% ánh nắng chói chang mùa hè và cản gió lạnh sương muối buốt giá mùa đông.',
        toolOrMaterial: 'Cây giống Muồng đen / Mắc ca ghép',
        checkNote: 'Tỉa cành thông thoáng ở độ cao 3.5m–4m cách tán cà phê để không che kín hoàn toàn ánh sáng.'
      },
      {
        stepNum: 2,
        title: 'Trồng thảm Cỏ lạc dại (Arachis pintoi) che phủ đất',
        detail: 'Cắm hom cỏ lạc dại phủ kín các khoảng trống giữa các hàng cà phê. Cỏ lạc dại bám sát mặt đất, chịu bóng tốt, cố định đạm khí trời và tạo ra một lớp thảm xanh giữ ẩm, ngăn cỏ dại hung dữ phát triển.',
        toolOrMaterial: 'Hom giống cỏ lạc dại',
        checkNote: 'Cắt dọn cỏ quanh gốc bán kính 30cm để tránh rễ cỏ tranh giành phân với cà phê non.'
      },
      {
        stepNum: 3,
        title: 'Đào bể tích nước mưa lót bạt HDPE đỉnh đồi & Tưới tự chảy',
        detail: 'Chọn vị trí đỉnh đồi cao nhất đào hố dung tích 150–300 m³ lót bạt nhựa chống thấm HDPE. Thu gom nước mưa mùa hè và nước từ mó suối trên cao về bể. Dùng chênh lệch độ cao (chênh cao 20–50m tạo áp suất tự nhiên 2–5 bar) lắp đường ống dẫn nước tự chảy tưới nhỏ giọt hoặc phun mưa đến từng gốc.',
        toolOrMaterial: 'Bạt chống thấm HDPE 0.75mm, ống nhựa PE, đầu tưới nhỏ giọt',
        checkNote: 'Lắp lưới lọc đĩa ở đầu nguồn để cặn bẩn không làm tắc các mắt nhỏ giọt.'
      }
    ],
    practicalTips: [
      'Mắc ca vừa che bóng vừa cho thu hoạch hạt giá trị kinh tế cao sau 4–5 năm, tăng thu nhập trên cùng đơn vị diện tích.',
      'Che lưới đen mặt bể nước đỉnh đồi để ngăn rêu tảo phát triển làm nghẹt ống tưới.'
    ],
    equipmentNeeded: ['Bạt HDPE', 'Hệ thống ống tưới tự chảy PE', 'Cây giống che bóng'],
    icon: '🌧️'
  },
  {
    id: 'tiet-kiem-chi-phi-lao-dong',
    orderNumber: '05',
    target: 'Tiết kiệm chi phí lao động & Cơ giới hóa sườn dốc',
    coreTech: 'Hệ thống tời cáp sườn dốc 2 chiều',
    headline: 'Giảm 70% công vận chuyển vác đồi dốc, giải phóng sức lao động phụ nữ và thanh niên',
    badge: 'Đột phá cơ giới hóa',
    impactHighlight: 'Vận chuyển 1 bao phân bón 50kg hoặc 1 tạ cà phê từ chân đồi lên đỉnh nương chỉ mất 2 phút thay vì cõng bộ 45 phút.',
    impactMetrics: [
      { label: 'Giảm công gùi vác', value: '70% – 80%' },
      { label: 'Thời gian vận chuyển', value: 'Nhanh gấp 15 lần' },
      { label: 'Thời gian thu hồi vốn', value: '1 mùa thu hoạch' }
    ],
    steps: [
      {
        stepNum: 1,
        title: 'Căng đường dây cáp thép chịu lực cố định',
        detail: 'Dựng trụ sắt kiên cố ở đỉnh nương và chân đồi (nơi tiếp giáp đường xe tải hoặc bến thuyền sông Đà). Căng sợi cáp thép chịu lực chuyên dụng phi 8mm – 10mm với tăng đơ kéo căng cố định có độ võng an toàn.',
        toolOrMaterial: 'Cáp thép lụa chịu lực phi 8–10mm, tăng đơ, neo bê tông',
        checkNote: 'Chôn cọc neo sâu ít nhất 1.2m và đổ bê tông giằng chắc chắn tại 2 đầu cáp.'
      },
      {
        stepNum: 2,
        title: 'Lắp giàn con lăn cáp treo móc giỏ chứa hàng',
        detail: 'Sử dụng cụm con lăn chịu tải chạy dọc theo dây cáp chính. Gắn móc an toàn chịu lực treo các thùng tôn hoặc giỏ sắt có chốt khóa an toàn để chứa phân bón, ống nước hoặc quả cà phê tươi thu hoạch.',
        toolOrMaterial: 'Cụm con lăn ròng rọc chịu lực, giỏ chứa tải 80–120 kg',
        checkNote: 'Luôn kiểm tra chốt an toàn và bôi trơn con lăn trước mỗi ca vận hành.'
      },
      {
        stepNum: 3,
        title: 'Gắn động cơ nổ hoặc tời điện kéo cáp 2 chiều',
        detail: 'Lắp một động cơ xe máy cũ hoặc đầu nổ xăng nhỏ 5.5HP kết hợp hộp số giảm tốc và tang cuốn cáp kéo sợi cáp phụ dẫn động. Điều khiển tời kéo giỏ hàng chạy ngược dốc lên hoặc hãm phanh trôi xuống có kiểm soát tốc độ.',
        toolOrMaterial: 'Đầu nổ 5.5HP / động cơ xe máy cải tiến, tang cuốn cáp, phanh cơ',
        checkNote: 'Quy định nghiêm ngặt: Tuyệt đối chỉ chở vật tư và nông sản, nghiêm cấm người ngồi đu dây cáp.'
      }
    ],
    practicalTips: [
      'Các hộ liền kề trong cùng bản (như bản Cang, bản Nậm Lầu) nên góp vốn làm chung 1 tuyến cáp tời trục chính để giảm chi phí đầu tư bình quân.',
      'Vào vụ thu hái, quả chín hái đến đâu được chuyển xuống đường trong ngày giúp không bị lên men thối chua.'
    ],
    equipmentNeeded: ['Dây cáp thép phi 8–10mm', 'Đầu nổ máy kéo', 'Cụm ròng rọc con lăn'],
    icon: '🚠'
  }
];

export const PILLAR_STRATEGIES: PillarStrategy[] = [
  {
    id: 'nguon-von',
    category: 'von',
    title: 'Giải Pháp Nguồn Vốn & Đầu Tư Thông Minh',
    subtitle: 'Đầu tư cuốn chiếu – Chung sức nhóm hộ – Thu hồi vốn nhanh',
    description: 'Bà con Chiềng Lao phần lớn nguồn lực vốn tự có mỏng, đầu tư trồng cà phê cần tránh dàn trải lãng phí. Tập trung vốn vào các hạ tầng dùng chung có hiệu quả ngay lập tức.',
    strategicSolutions: [
      'Mô hình chung vốn nhóm hộ (Tổ hợp tác 5–10 hộ): Cùng đóng góp mua chung bạt lót HDPE làm bể nước đỉnh đồi và lắp hệ thống tời cáp chung tuyến sườn dốc.',
      'Tiếp cận nguồn vốn vay ưu đãi: Vay vốn Ngân hàng Chính sách xã hội chương trình phát triển nông nghiệp bền vững miền núi và liên kết hợp tác xã.',
      'Đầu tư cuốn chiếu: Năm 1 làm đồng mức, cỏ Vetiver và cải tạo đất; Năm 2 hoàn thiện tời cáp và tưới tự chảy từ nguồn thu cá lồng và cây ăn quả.',
      'Hạch toán kinh tế rõ ràng: Chi phí lắp tời cáp (~15–20 triệu đ/tuyến) chia cho 5 hộ chỉ 3–4 triệu đ/hộ nhưng tiết kiệm ngay 8–10 triệu đ tiền thuê công gùi vác mỗi vụ.'
    ],
    expectedImpact: 'Giảm 45% chi phí đầu tư ban đầu bình quân hộ, không phải vay lãi nóng tư nhân.',
    kpis: [
      { label: 'Thời gian hoàn vốn tời cáp', target: '1 – 1.5 vụ cà phê' },
      { label: 'Chi phí giảm/hộ nhờ làm chung', target: '35% – 50%' }
    ]
  },
  {
    id: 'lao-dong',
    category: 'lao-dong',
    title: 'Tổ Chức Lao Động & Giải Phóng Sức Người',
    subtitle: 'Cơ giới hóa đồi dốc – Đổi công tương trợ – Giảm nhọc nhằn',
    description: 'Địa hình sườn dốc 25°–35° là nguyên nhân khiến nông dân kiệt sức, thanh niên bỏ nương đi làm xa. Cần đổi mới phương thức tổ chức lao động.',
    strategicSolutions: [
      'Xóa bỏ hủ tục gùi vác đồi dốc: Đưa tời cáp vào hoạt động giải phóng hoàn toàn đôi vai phụ nữ và người lớn tuổi trong việc mang vác phân bón và quả tươi.',
      'Tổ chức nhóm đổi công chuyên trách: Thành lập các tổ làm đất đo thước A, tổ thu hái chọn lọc, tổ vận hành tời cáp luân phiên giữa các gia đình trong bản.',
      'Tập huấn thực hành cầm tay chỉ việc: Hướng dẫn kỹ thuật bón phân rãnh và ủ men Biochar tại thực địa thay vì lý thuyết suông.',
      'Định giá công lao động dựa trên chất lượng: Trả công thu hái theo tỷ lệ quả chín đỏ (>95%) cao hơn 20% so với hái xô để khuyến khích bà con hái cẩn thận.'
    ],
    expectedImpact: 'Tăng 300% năng suất lao động vận chuyển, giữ chân thanh niên bản địa tham gia nông nghiệp công nghệ cao.',
    kpis: [
      { label: 'Giảm thời gian vận chuyển/ha', target: 'Từ 35 ngày công xuống 10 ngày' },
      { label: 'Tỷ lệ quả chín khi hái', target: '> 95%' }
    ]
  },
  {
    id: 'nang-suat',
    category: 'nang-suat',
    title: 'Ổn Định Năng Suất Trong Điều Kiện Khắc Nghiệt',
    subtitle: 'Không rụng hoa mùa hạn – Không xót rễ mùa mưa – Năng suất vững bền',
    description: 'Năng suất cà phê tại Chiềng Lao từng trồi sụt thất thường do thời tiết khô hạn và đất nghèo kiệt. Mục tiêu là đạt năng suất ổn định 2.5 – 3.2 tấn nhân/ha.',
    strategicSolutions: [
      'Tưới đón hoa đúng chu kỳ: Sử dụng hệ thống tự chảy tưới đẫm 2 lần vào tháng 2 và tháng 3 giúp hoa bung đều đồng loạt, hạn chế hoa chanh rụng nụ.',
      'Bảo vệ bộ rễ tơ bằng Biochar và hữu cơ: Đất không bị nén chặt, rễ cây ăn sâu và lan rộng giúp hút nước trong mùa khô hạn kéo dài.',
      'Tỉa cành tạo tán đa thân thấp: Cắt ngọn ở độ cao 1.6m – 1.8m giúp cây giữ trọng tâm vững chãi trước gió bão lòng hồ, cành quả tập trung ở tầng thấp dễ hái.',
      'Bổ sung vi lượng Bo, Kẽm, Canxi: Phun qua lá vào giai đoạn nụ hoa và đậu quả non để cuống quả dai chắc, giảm rụng quả sinh lý.'
    ],
    expectedImpact: 'Năng suất đạt 12–15 tấn quả tươi/ha (tương đương 2.5–3.0 tấn cà phê nhân chất lượng cao/ha).',
    kpis: [
      { label: 'Tỷ lệ đậu quả sau thụ phấn', target: '> 75%' },
      { label: 'Độ ổn định năng suất hàng năm', target: 'Biên độ chênh lệch < 15%' }
    ]
  },
  {
    id: 'chat-luong',
    category: 'chat-luong',
    title: 'Cải Thiện Phẩm Chất & Định Vị Cà Phê Đặc Sản',
    subtitle: 'Hái chọn lọc – Lên men kiểm soát – Tận dụng vỏ Cascara',
    description: 'Để bù đắp bất lợi về năng suất số lượng so với vùng bằng phẳng, cà phê Chiềng Lao phải đi theo con đường chất lượng cao, đậm đà vị ngọt bản địa.',
    strategicSolutions: [
      'Thu hái 100% quả chín mọng: Độ đường Brix đạt >18%, không hái quả xanh non làm chát khét nước cà phê.',
      'Sơ chế ướt lên men vi sinh có kiểm soát: Tận dụng nguồn nước sạch từ khe núi hoặc bồn lọc lắng, lên men yếm khí 24–36 giờ để tạo nốt hương hoa quả tươi sáng.',
      'Kinh tế tuần hoàn từ vỏ cà phê Cascara: Thu gom vỏ quả chín phơi trên giàn cao làm trà Cascara xuất khẩu, tăng thêm 25% doanh thu trên mỗi tấn quả.',
      'Xây dựng nhãn hiệu "Arabica Highlands - Sườn dốc Chiềng Lao, Mường La": Truy xuất nguồn gốc nương rẫy bền vững không phá rừng, không xói mòn đất.'
    ],
    expectedImpact: 'Giá bán cà phê nhân cao hơn thị trường thông thường từ 15.000 – 25.000 đ/kg.',
    kpis: [
      { label: 'Điểm thử nếm Cupping (SCA)', target: '> 82 điểm (Specialty)' },
      { label: 'Giá trị gia tăng từ vỏ Cascara', target: '+20% – 30% doanh thu' }
    ]
  }
];
