import React, { useState } from 'react';

const steps = [
  {
    id: 1,
    title: 'Xác Định & Phân Tích',
    englishTitle: 'Task Definition',
    emoji: '🎯',
    color: '#3b82f6',
    gradient: 'linear-gradient(135deg, #3b82f6, #2563eb)',
    details: ['Phát hiện điểm nghẽn thực tiễn', 'Định hình Đầu vào (Input)', 'Quy chuẩn Đầu ra (Output)']
  },
  {
    id: 2,
    title: 'Thiết Kế & Lập Trình',
    englishTitle: 'Prompting & Canvas',
    emoji: '✏️',
    color: '#ec4899',
    gradient: 'linear-gradient(135deg, #ec4899, #e11d48)',
    details: ['Giao việc bằng Prompt tiêu chuẩn', 'Kích hoạt Preview (Canvas UI)', 'Tinh chỉnh lặp (Refinement)']
  },
  {
    id: 3,
    title: 'Tích Hợp Lõi AI',
    englishTitle: 'AI Integration',
    emoji: '🧠',
    color: '#8b5cf6',
    gradient: 'linear-gradient(135deg, #a855f7, #7c3aed)',
    details: ['Kết nối API của Mô hình', 'Thiết lập System Prompt', 'Đảm bảo kỷ luật ngôn từ']
  },
  {
    id: 4,
    title: 'Kiểm Thử Kép & Nghiệm Thu',
    englishTitle: 'QA & Approval',
    emoji: '🛡️',
    color: '#f59e0b',
    gradient: 'linear-gradient(135deg, #f59e0b, #d97706)',
    details: ['Kiểm tra lỗi kỹ thuật', 'Kiểm duyệt nội dung/chính trị', 'Bảo hiểm bởi Con người (Human-in-the-loop)']
  },
  {
    id: 5,
    title: 'Triển Khai & Đóng Gói',
    englishTitle: 'Deployment',
    emoji: '🚀',
    color: '#10b981',
    gradient: 'linear-gradient(135deg, #10b981, #059669)',
    details: ['Ban hành lên nền tảng dùng chung', 'Tập huấn sử dụng', 'Thu thập phản hồi để tái tối ưu']
  }
];

export default function FiveStepsFlow() {
  const [hoveredStep, setHoveredStep] = useState(null);

  return (
    <div style={{
      background: '#f8fafc',
      padding: '40px 24px',
      fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif",
      borderRadius: '16px',
      margin: '32px 0',
      border: '1px solid #e2e8f0',
      boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
    }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h2 style={{
          fontSize: '2rem',
          fontWeight: 800,
          color: '#1e293b',
          marginBottom: '12px',
          letterSpacing: '-0.02em'
        }}>
          Quy trình tinh gọn phát triển Công cụ AI (5 Bước)
        </h2>
      </div>

      {/* Vertical Flow */}
      <div style={{ maxWidth: '600px', margin: '0 auto', position: 'relative' }}>

        {/* Vertical connector line */}
        <div style={{
          position: 'absolute',
          left: '39px',
          top: '40px',
          bottom: '40px',
          width: '3px',
          background: 'linear-gradient(to bottom, #3b82f6, #ec4899, #8b5cf6, #f59e0b, #10b981)',
          borderRadius: '2px',
          zIndex: 0,
        }} />

        {steps.map((step, index) => {
          const isHovered = hoveredStep === step.id;
          return (
            <div
              key={step.id}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '20px',
                marginBottom: index === steps.length - 1 ? '0' : '12px',
                position: 'relative',
                zIndex: 1,
                cursor: 'pointer',
              }}
              onMouseEnter={() => setHoveredStep(step.id)}
              onMouseLeave={() => setHoveredStep(null)}
            >
              {/* Icon circle */}
              <div style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: step.gradient,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '28px',
                flexShrink: 0,
                boxShadow: `0 8px 20px ${step.color}40`,
                border: '4px solid #f8fafc',
                transition: 'transform 0.3s ease',
                transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                zIndex: 2,
                position: 'relative',
              }}>
                {step.emoji}
              </div>

              {/* Card */}
              <div style={{
                flex: 1,
                background: '#fff',
                borderRadius: '16px',
                padding: '20px 24px',
                border: `2px solid ${isHovered ? step.color : '#f1f5f9'}`,
                boxShadow: isHovered
                  ? `0 16px 32px ${step.color}15`
                  : '0 1px 3px rgba(0,0,0,0.04)',
                transition: 'all 0.3s ease',
                transform: isHovered ? 'translateY(-2px)' : 'none',
                position: 'relative',
                overflow: 'hidden',
              }}>
                {/* Top accent bar */}
                <div style={{
                  position: 'absolute',
                  top: 0, left: 0, right: 0,
                  height: '4px',
                  background: step.gradient,
                }} />

                {/* Step badge + title */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                  <span style={{
                    background: step.gradient,
                    color: '#fff',
                    width: '28px',
                    height: '28px',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '13px',
                    fontWeight: 800,
                    flexShrink: 0,
                  }}>
                    {step.id}
                  </span>
                  <div>
                    <h3 style={{
                      fontSize: '17px',
                      fontWeight: 700,
                      color: step.color,
                      margin: 0,
                      lineHeight: 1.3,
                    }}>
                      {step.title}
                    </h3>
                    <span style={{
                      fontSize: '10px',
                      fontWeight: 700,
                      color: '#94a3b8',
                      textTransform: 'uppercase',
                      letterSpacing: '0.12em',
                    }}>
                      {step.englishTitle}
                    </span>
                  </div>
                </div>

                {/* Details */}
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {step.details.map((detail, idx) => (
                    <li key={idx} style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      fontSize: '14px',
                      color: '#475569',
                      marginBottom: '6px',
                    }}>
                      <span style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        background: step.gradient,
                        flexShrink: 0,
                        marginTop: '7px',
                        marginRight: '10px',
                      }} />
                      <span style={{ fontWeight: 500, lineHeight: 1.5 }}>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}

        {/* Feedback loop */}
        <div style={{
          textAlign: 'center',
          marginTop: '24px',
          padding: '10px 20px',
          background: '#fff',
          borderRadius: '100px',
          border: '2px dashed #fdba74',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          color: '#ea580c',
          fontWeight: 600,
          fontSize: '13px',
          marginLeft: '50%',
          transform: 'translateX(-50%)',
          boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
          whiteSpace: 'nowrap',
        }}>
          🔄 Vòng lặp tối ưu: Từ Bước 5 ngược về Bước 1
        </div>
      </div>
    </div>
  );
}
