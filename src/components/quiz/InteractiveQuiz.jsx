import React, { useState } from 'react';

const quizData = [
  {
    question: "Vai trò chính của AI trong môi trường học thuật (theo tài liệu) là gì?",
    options: [
      "Thay thế hoàn toàn giảng viên",
      "Làm một bản nháp thông minh để hỗ trợ xử lý dữ liệu ban đầu",
      "Tự động ra quyết định đánh giá học viên",
      "Công cụ để tra cứu giải trí"
    ],
    answer: 1,
    explanation: "AI đóng vai trò như một trợ lý tạo bản nháp. Chuyên gia con người luôn phải là người kiểm duyệt thông tin cuối cùng."
  },
  {
    question: "Hành động nào Tuyệt Đối Không được thực hiện trên các nền tảng AI Public (ChatGPT, AI Claude...)?",
    options: [
      "Nhờ AI sửa lỗi chính tả văn bản",
      "Nhập dữ liệu kế hoạch mật, quân số, hoặc thông tin cá nhân",
      "Nhờ AI gợi ý kịch bản bài giảng",
      "Tạo mã code lập trình cơ bản"
    ],
    answer: 1,
    explanation: "Dữ liệu mật, tọa độ, thông tin cá nhân tuyệt đối không được đưa lên các dịch vụ AI đám mây nhằm đảm bảo an toàn thông tin."
  },
  {
    question: "Cấu trúc một câu lệnh (Prompt) chuẩn cho AI bao gồm bao nhiêu yếu tố cốt lõi?",
    options: ["2 yếu tố", "3 yếu tố", "4 yếu tố", "5 yếu tố"],
    answer: 2,
    explanation: "4 yếu tố bao gồm: (1) Đặt vai, (2) Giao nhiệm vụ cụ thể, (3) Quy định định dạng, (4) Giới hạn phong cách/kỷ luật."
  },
  {
    question: "Bước đầu tiên trong quy trình 7 bước xây dựng công cụ AI là gì?",
    options: [
      "Tiến hành Code ngay lập tức",
      "Chọn nền tảng AI",
      "Xác định đúng nhu cầu và nhiệm vụ cốt lõi cần giải quyết",
      "Đóng gói và triển khai"
    ],
    answer: 2,
    explanation: "Công cụ AI chỉ phát huy tác dụng khi nó giải quyết được đúng một 'vướng mắc' thực tế trong công tác."
  },
  {
    question: "Vì sao luôn phải có bước 'Kiểm duyệt và Ký duyệt' (Human in the loop)?",
    options: [
      "Vì quy định hành chính bắt buộc",
      "Vì AI có thể tạo ra hiện tượng Ảo giác (Hallucination) dẫn đến thông tin sai lệch",
      "Để AI học được cách con người làm việc",
      "Để làm tài liệu lưu trữ"
    ],
    answer: 1,
    explanation: "AI có thể sinh ra thông tin trông rất thuyết phục nhưng hoàn toàn sai sự thật (hallucination), do đó con người phải chịu trách nhiệm đối chiếu chuyên môn."
  },
  {
    question: "Đâu là lợi ích vượt trội của việc tạo ra một WebApp (Công cụ) thay vì dùng chung cửa sổ Chatbot trực tiếp?",
    options: [
      "WebApp tiết kiệm chi phí hơn",
      "Giao diện tối giản, người xử lý công việc không cần phải tự nghĩ và gõ Prompt mỗi ngày",
      "Bảo mật tuyệt đối 100%",
      "WebApp chạy nhanh hơn Chatbot"
    ],
    answer: 1,
    explanation: "Sử dụng WebApp giúp tự động hóa và đóng gói Prompt lại phía sau. Người dùng cuối chỉ cần điền biểu mẫu (form) rất trực quan."
  },
  {
    question: "Đối với tài liệu huấn luyện mang tính chất mật, phương án triển khai phần mềm AI nào là an toàn nhất?",
    options: [
      "Nền tảng miễn phí (Vercel, Github Pages)",
      "Triển khai mạng LAN gắn với Local LLM tại đơn vị/trường",
      "Chia sẻ qua Zalo/Telegram",
      "Sử dụng Google Drive"
    ],
    answer: 1,
    explanation: "Mạng LAN nội bộ kết hợp với mô hình LLM chạy cục bộ chia cắt hoàn toàn với Internet, đảm bảo dữ liệu không bị rò rỉ."
  },
  {
    question: "Ưu điểm lớn nhất khi tự động hóa công tác soạn giáo án hay làm báo cáo hành chính là gì?",
    options: [
      "Máy móc làm đẹp hơn con người",
      "Giảm thiểu gánh nặng quy trình thủ công, giải phóng thời gian để Giảng viên/Chuyên viên tập trung vào chuyên môn sâu",
      "Giúp đơn vị cắt giảm nhân sự",
      "Không cần phải kiểm tra lại"
    ],
    answer: 1,
    explanation: "Theo tài liệu, ví dụ 1 bài giáo án có thể giảm từ 4 giờ xuống còn 15 giây, giúp Giảng viên dồn lực cho kiến thức chuyên môn."
  },
  {
    question: "Yếu tố nào đóng vai trò 'chìa khóa' quyết định độ chính xác và chất lượng nội dung trích xuất từ AI?",
    options: [
      "Cấu hình máy tính",
      "Tốc độ mạng Internet",
      "Trình duyệt Web",
      "Chất lượng của Câu lệnh (Prompt Lập trình / Prompt Hệ thống)"
    ],
    answer: 3,
    explanation: "Ra lệnh (Prompt) là ngôn ngữ giao tiếp. Lệnh càng chi tiết và chặt chẽ thì AI càng làm việc hiệu quả và không đi lạc đề."
  },
  {
    question: "Theo quan điểm của hệ thống, bước Triển khai có phải là bước cuối cùng không?",
    options: [
      "Có, làm xong triển khai là kết thúc dự án",
      "Không, triển khai xong phải thu phí",
      "Không, triển khai chỉ là điểm bắt đầu cho vòng 'Thu thập phản hồi và Cải tiến liên tục'",
      "Có, nếu làm trên nền tảng mạng Internet"
    ],
    answer: 2,
    explanation: "Phần mềm tốt nhất là phần mềm sống cùng thực tiễn. Triển khai chỉ là bước đầu để nhận phản hồi người dùng và liên tục nâng cấp System Prompt."
  }
];

export default function InteractiveQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleSelect = (index) => {
    if (!isSubmitted) setSelectedAnswer(index);
  };

  const handleSubmit = () => {
    if (selectedAnswer === null) return;
    setIsSubmitted(true);
    if (selectedAnswer === quizData[currentQuestion].answer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion + 1 < quizData.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setIsSubmitted(false);
    } else {
      setShowResult(true);
    }
  };

  const currentQ = quizData[currentQuestion];

  if (showResult) {
    const isPass = score >= 8;
    return (
      <div style={{ background: '#fff', borderRadius: '16px', padding: '40px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', maxWidth: '800px', margin: '40px auto', textAlign: 'center' }}>
        <div style={{ fontSize: '64px', marginBottom: '20px' }}>{isPass ? '🏆' : '📚'}</div>
        <h2 style={{ color: isPass ? '#10b981' : '#f59e0b', fontSize: '2rem', marginBottom: '10px' }}>
          {isPass ? 'XUẤT SẮC! HOÀN THÀNH KHÓA HUẤN LUYỆN' : 'HOÀN THÀNH BÀI KIỂM TRA'}
        </h2>
        <p style={{ fontSize: '1.2rem', color: '#64748b', marginBottom: '30px' }}>
          Điểm số của đồng chí: <strong style={{ color: '#0f172a', fontSize: '1.5rem' }}>{score} / 10</strong>
        </p>

        <div style={{ background: '#f8fafc', padding: '24px', borderRadius: '12px', textAlign: 'left', border: '1px solid #e2e8f0', marginBottom: '30px' }}>
          <h4 style={{ color: '#0f172a', marginTop: 0, borderBottom: '2px solid #3b82f6', paddingBottom: '10px', display: 'inline-block' }}>TỔNG KẾT NỘI DUNG KHÓA HỌC</h4>
          <ul style={{ color: '#475569', lineHeight: 1.8, margin: 0, paddingLeft: '20px' }}>
            <li><strong>Mục đích:</strong> AI sinh ra để làm trợ lý, không phải để thay thế trách nhiệm của cán bộ.</li>
            <li><strong>Phương pháp:</strong> Nắm vững 4 yếu tố cấu thành Prompt và Quy trình 7 bước triển khai AI.</li>
            <li><strong>Nguyên tắc thép:</strong> Con người luôn quyết định cuối cùng, tuyệt đối không đưa tài liệu mật lên mạng ảo.</li>
            <li><strong>Đích đến:</strong> Tự động hóa thủ tục, cá nhân hóa học tập, giúp giải phóng sức lao động để tập trung cho chuyên môn sâu.</li>
          </ul>
        </div>

        <button 
          onClick={() => { setShowResult(false); setCurrentQuestion(0); setScore(0); setSelectedAnswer(null); setIsSubmitted(false); }}
          style={{ padding: '12px 24px', background: '#3b82f6', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 600, fontSize: '1rem' }}
        >
          Làm lại bài kiểm tra
        </button>
      </div>
    );
  }

  return (
    <div style={{ background: '#fff', borderRadius: '16px', padding: '40px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', maxWidth: '800px', margin: '40px auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <h3 style={{ color: '#0f172a', margin: 0, fontSize: '1.5rem' }}>BÀI TẬP TRẮC NGHIỆM ĐÁNH GIÁ</h3>
        <div style={{ background: '#f1f5f9', padding: '6px 16px', borderRadius: '100px', color: '#475569', fontWeight: 600 }}>
          Câu {currentQuestion + 1} / {quizData.length}
        </div>
      </div>

      <div style={{ background: '#f8fafc', padding: '24px', borderRadius: '12px', borderLeft: '4px solid #3b82f6', marginBottom: '24px' }}>
        <p style={{ margin: 0, fontSize: '1.1rem', color: '#1e293b', fontWeight: 500, lineHeight: 1.6 }}>{currentQ.question}</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
        {currentQ.options.map((opt, idx) => {
          const isSelected = selectedAnswer === idx;
          const isCorrect = idx === currentQ.answer;
          
          let bgColor = '#fff';
          let borderColor = '#e2e8f0';
          let textColor = '#475569';

          if (isSubmitted) {
            if (isCorrect) {
              bgColor = '#ecfdf5';
              borderColor = '#10b981';
              textColor = '#065f46';
            } else if (isSelected) {
              bgColor = '#fef2f2';
              borderColor = '#ef4444';
              textColor = '#991b1b';
            }
          } else if (isSelected) {
            bgColor = '#eff6ff';
            borderColor = '#3b82f6';
            textColor = '#1e3a8a';
          }

          return (
            <div 
              key={idx}
              onClick={() => handleSelect(idx)}
              style={{
                padding: '16px 20px',
                borderRadius: '8px',
                border: `2px solid ${borderColor}`,
                background: bgColor,
                color: textColor,
                cursor: isSubmitted ? 'default' : 'pointer',
                transition: 'all 0.2s',
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <div style={{ 
                minWidth: '24px', height: '24px', borderRadius: '50%', border: `2px solid ${borderColor}`, marginRight: '16px', 
                background: isSelected ? borderColor : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}>
                {isSelected && <div style={{ width: '10px', height: '10px', background: '#fff', borderRadius: '50%' }} />}
              </div>
              <span style={{ fontSize: '1.05rem' }}>{opt}</span>
            </div>
          );
        })}
      </div>

      {isSubmitted && (
        <div style={{ background: selectedAnswer === currentQ.answer ? '#ecfdf5' : '#fef2f2', padding: '20px', borderRadius: '8px', marginBottom: '24px' }}>
          <strong style={{ color: selectedAnswer === currentQ.answer ? '#10b981' : '#ef4444', display: 'block', marginBottom: '8px' }}>
            {selectedAnswer === currentQ.answer ? '✅ THÚ VỊ ĐẤY! ĐỒNG CHÍ ĐÃ CHỌN ĐÚNG.' : '❌ SAI RỒI! HÃY XEM GỢI Ý.'}
          </strong>
          <span style={{ color: '#475569' }}>{currentQ.explanation}</span>
        </div>
      )}

      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        {!isSubmitted ? (
          <button 
            disabled={selectedAnswer === null}
            onClick={handleSubmit}
            style={{ padding: '12px 32px', background: selectedAnswer !== null ? '#3b82f6' : '#cbd5e1', color: '#fff', border: 'none', borderRadius: '8px', cursor: selectedAnswer !== null ? 'pointer' : 'not-allowed', fontWeight: 600 }}
          >
            Kiểm tra
          </button>
        ) : (
          <button 
            onClick={handleNext}
            style={{ padding: '12px 32px', background: '#10b981', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 600 }}
          >
            {currentQuestion + 1 === quizData.length ? 'Xem Kết Quả' : 'Câu tiếp theo'}
          </button>
        )}
      </div>
    </div>
  );
}
