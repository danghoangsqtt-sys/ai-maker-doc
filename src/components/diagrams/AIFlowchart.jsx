import React, { useState } from 'react';

const steps = [
  {
    id: 1,
    title: 'Xác Định & Phân Tích',
    englishTitle: 'Task Definition',
    emoji: '🎯',
    color: '#3b82f6',
    gradient: 'linear-gradient(135deg, #3b82f6, #2563eb)',
    bgLight: '#eff6ff',
    details: ['Phát hiện điểm nghẽn thực tiễn', 'Định hình Đầu vào (Input)', 'Quy chuẩn Đầu ra (Output)']
  },
  {
    id: 2,
    title: 'Thiết Kế & Lập Trình',
    englishTitle: 'Prompting & Canvas',
    emoji: '✏️',
    color: '#ec4899',
    gradient: 'linear-gradient(135deg, #ec4899, #e11d48)',
    bgLight: '#fdf2f8',
    details: ['Giao việc bằng Prompt tiêu chuẩn', 'Kích hoạt Preview (Canvas UI)', 'Tinh chỉnh lặp (Refinement)']
  },
  {
    id: 3,
    title: 'Tích Hợp Lõi AI',
    englishTitle: 'AI Integration',
    emoji: '🧠',
    color: '#8b5cf6',
    gradient: 'linear-gradient(135deg, #a855f7, #7c3aed)',
    bgLight: '#f5f3ff',
    details: ['Kết nối API của Mô hình', 'Nhà thiết lập System Prompt', 'Đảm bảo kỷ luật ngôn từ']
  },
  {
    id: 4,
    title: 'Kiểm Thử Kép & Nghiệm Thu',
    englishTitle: 'QA & Approval',
    emoji: '🛡️',
    color: '#f59e0b',
    gradient: 'linear-gradient(135deg, #f59e0b, #d97706)',
    bgLight: '#fffbeb',
    details: ['Kiểm tra lỗi kỹ thuật', 'Kiểm duyệt nội dung/chính trị', 'Bảo hiểm bởi Con người (Human-in-the-loop)']
  },
  {
    id: 5,
    title: 'Triển Khai & Đóng Gói',
    englishTitle: 'Deployment',
    emoji: '🚀',
    color: '#10b981',
    gradient: 'linear-gradient(135deg, #10b981, #059669)',
    bgLight: '#ecfdf5',
    details: ['Ban hành lên nền tảng dùng chung', 'Tập huấn sử dụng', 'Thu thập phản hồi để tái tối ưu']
  }
];

export default function FiveStepsFlow() {
  const [hoveredStep, setHoveredStep] = useState(null);

  return (
    <div style={{
      background: '#f8fafc',
      padding: '48px 24px',
      fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif",
      borderRadius: '16px',
      margin: '32px 0',
      border: '1px solid #e2e8f0',
      boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
    }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '48px' }}>
        <h2 style={{
          fontSize: '2rem',
          fontWeight: 800,
          color: '#1e293b',
          marginBottom: '12px',
          letterSpacing: '-0.02em'
        }}>
          Quy trình tinh gọn phát triển Công cụ AI (5 Bước)
        </h2>
        <p style={{
          color: '#64748b',
          maxWidth: '600px',
          margin: '0 auto',
          fontSize: '1.05rem',
          lineHeight: 1.6
        }}>
        </p>
      </div>

      {/* Zigzag Timeline */}
      <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative' }}>
        
        {/* Central vertical line */}
        <div style={{
          position: 'absolute',
          left: '50%',
          top: '40px',
          bottom: '40px',
          width: '3px',
          background: 'linear-gradient(to bottom, #3b82f6, #ec4899, #8b5cf6, #f59e0b, #10b981)',
          transform: 'translateX(-50%)',
          borderRadius: '2px'
        }} />

        {steps.map((step, index) => {
          const isLeft = index % 2 === 0;
          const isHovered = hoveredStep === step.id;

          return (
            <div 
              key={step.id}
              className="flowchart-zig-item"
              style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: index === steps.length - 1 ? '0' : '20px',
                flexDirection: isLeft ? 'row' : 'row-reverse',
                position: 'relative'
              }}
              onMouseEnter={() => setHoveredStep(step.id)}
              onMouseLeave={() => setHoveredStep(null)}
            >
              {/* Card */}
              <div 
                className="flowchart-zig-card"
                style={{
                width: 'calc(50% - 48px)',
                background: '#fff',
                borderRadius: '16px',
                padding: '24px',
                border: `2px solid ${isHovered ? step.color : '#f1f5f9'}`,
                boxShadow: isHovered 
                  ? `0 20px 40px ${step.color}20, 0 0 0 1px ${step.color}15`
                  : '0 2px 8px rgba(0,0,0,0.04)',
                transition: 'all 0.3s ease',
                transform: isHovered ? 'translateY(-4px)' : 'none',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer'
              }}>
                {/* Top accent */}
                <div style={{
                  position: 'absolute',
                  top: 0, left: 0, right: 0,
                  height: '4px',
                  background: step.gradient
                }} />

                {/* Step number badge */}
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '12px'
                }}>
                  <span style={{
                    background: step.gradient,
                    color: '#fff',
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '14px',
                    fontWeight: 800
                  }}>
                    {step.id}
                  </span>
                  <span style={{
                    fontSize: '10px',
                    fontWeight: 700,
                    color: '#94a3b8',
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em'
                  }}>
                    {step.englishTitle}
                  </span>
                </div>

                {/* Title */}
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: 700,
                  color: step.color,
                  margin: '0 0 12px 0',
                  lineHeight: 1.3
                }}>
                  {step.emoji} {step.title}
                </h3>

                {/* Details */}
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {step.details.map((detail, idx) => (
                    <li key={idx} style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      fontSize: '14px',
                      color: '#475569',
                      marginBottom: '8px',
                      lineHeight: 1.5
                    }}>
                      <span style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        background: step.gradient,
                        flexShrink: 0,
                        marginTop: '7px',
                        marginRight: '10px'
                      }} />
                      <span style={{ fontWeight: 500 }}>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Center node */}
              <div 
                className="flowchart-zig-center"
                style={{
                width: '96px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
                zIndex: 2,
                flexShrink: 0
              }}>
                {/* Horizontal connector line */}
                <div 
                  className="flowchart-zig-line"
                  style={{
                  position: 'absolute',
                  top: '50%',
                  [isLeft ? 'right' : 'left']: '48px',
                  width: 'calc(50% - 4px)',
                  height: '2px',
                  background: step.color,
                  opacity: 0.3,
                  transform: 'translateY(-50%)'
                }} />
                
                {/* Circle icon */}
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: step.gradient,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '28px',
                  boxShadow: `0 8px 20px ${step.color}40`,
                  border: '4px solid #f8fafc',
                  transition: 'transform 0.3s ease',
                  transform: isHovered ? 'scale(1.15)' : 'scale(1)',
                  position: 'relative',
                  zIndex: 2
                }}>
                  {step.emoji}
                </div>
              </div>

              {/* Empty space on opposite side */}
              <div className="flowchart-zig-empty" style={{ width: 'calc(50% - 48px)' }} />
            </div>
          );
        })}

        {/* Feedback loop arrow at bottom */}
        <div style={{
          textAlign: 'center',
          marginTop: '32px',
          padding: '12px 24px',
          background: '#fff',
          borderRadius: '100px',
          border: '2px dashed #fdba74',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          color: '#ea580c',
          fontWeight: 600,
          fontSize: '14px',
          marginLeft: '50%',
          transform: 'translateX(-50%)',
          boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
        }}>
          🔄 Vòng lặp tối ưu: Từ Bước 5 ngược về Bước 1 để hoàn thiện liên tục
        </div>
      </div>
    </div>
  );
}
