import React, { useState } from 'react';

const steps = [
  {
    id: 1,
    title: 'Nhu Cầu Thực Tế',
    englishTitle: 'REAL-WORLD NEEDS',
    emoji: '💡',
    gradient: 'linear-gradient(135deg, #3b82f6, #2563eb)',
    shadowColor: 'rgba(59,130,246,0.3)',
    textColor: '#1d4ed8',
    details: ['Phân tích bài toán', 'Xác định "điểm đau" (Pain points)', 'Thu thập dữ liệu thô']
  },
  {
    id: 2,
    title: 'Mô Hình AI',
    englishTitle: 'AI MODEL',
    emoji: '🧠',
    gradient: 'linear-gradient(135deg, #a855f7, #7c3aed)',
    shadowColor: 'rgba(168,85,247,0.3)',
    textColor: '#6d28d9',
    details: ['Tiền xử lý dữ liệu', 'Huấn luyện (Training)', 'Đánh giá & Tối ưu (Fine-tuning)']
  },
  {
    id: 3,
    title: 'Công Cụ / Sản Phẩm',
    englishTitle: 'TOOL / PRODUCT',
    emoji: '🖥️',
    gradient: 'linear-gradient(135deg, #6366f1, #4338ca)',
    shadowColor: 'rgba(99,102,241,0.3)',
    textColor: '#4338ca',
    details: ['Đóng gói API/SDK', 'Thiết kế UI/UX', 'Triển khai hạ tầng (Deployment)']
  },
  {
    id: 4,
    title: 'Người Sử Dụng',
    englishTitle: 'END USERS',
    emoji: '👥',
    gradient: 'linear-gradient(135deg, #f97316, #ea580c)',
    shadowColor: 'rgba(249,115,22,0.3)',
    textColor: '#c2410c',
    details: ['Trải nghiệm thực tế', 'Tương tác với hệ thống', 'Phát sinh dữ liệu mới']
  },
  {
    id: 5,
    title: 'Hiệu Quả',
    englishTitle: 'IMPACT / ROI',
    emoji: '📈',
    gradient: 'linear-gradient(135deg, #10b981, #059669)',
    shadowColor: 'rgba(16,185,129,0.3)',
    textColor: '#047857',
    details: ['Tối ưu thời gian/chi phí', 'Tăng trưởng doanh thu', 'Mở rộng quy mô (Scale)']
  }
];

export default function AIFlowchart5Steps() {
  const [hoveredStep, setHoveredStep] = useState(null);

  return (
    <div style={{
      background: '#f8fafc',
      padding: '40px 24px 72px 24px',
      fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif",
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '16px',
      margin: '32px 0',
      border: '1px solid #e2e8f0',
      boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
      position: 'relative'
    }}>
      <div style={{ maxWidth: '1200px', width: '100%' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: 800,
            color: '#1e293b',
            marginBottom: '12px',
            letterSpacing: '-0.02em'
          }}>
            Quy trình phát triển và ứng dụng AI trong thực tế
          </h2>
          <p style={{
            color: '#64748b',
            maxWidth: '600px',
            margin: '0 auto',
            fontSize: '1.1rem',
            lineHeight: 1.6
          }}>
            
          </p>
        </div>

        {/* Pipeline */}
        <div style={{ position: 'relative', width: '100%' }}>
          
          {/* Horizontal connector */}
          <div className="flowchart-5-line" style={{
            position: 'absolute',
            top: '40px',
            left: '10%',
            right: '10%',
            height: '3px',
            background: '#e2e8f0',
            zIndex: 0
          }} />

          <div className="flowchart-5-container" style={{ display: 'flex', position: 'relative', zIndex: 1 }}>
            {steps.map((step) => {
              const isHovered = hoveredStep === step.id;
              
              return (
                <div 
                  key={step.id}
                  className="flowchart-5-step"
                  style={{
                    padding: '0 12px',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={() => setHoveredStep(step.id)}
                  onMouseLeave={() => setHoveredStep(null)}
                >
                  {/* Icon */}
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative', zIndex: 1 }}>
                    <div style={{
                      width: '80px',
                      height: '80px',
                      borderRadius: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: step.gradient,
                      boxShadow: `0 10px 25px ${step.shadowColor}`,
                      border: '4px solid #f8fafc',
                      transition: 'transform 0.3s ease',
                      transform: isHovered ? 'scale(1.1) translateY(-8px)' : 'scale(1)',
                      fontSize: '32px'
                    }}>
                      {step.emoji}
                    </div>
                    
                    <div style={{ textAlign: 'center', marginTop: '16px', marginBottom: '12px', height: '56px' }}>
                      <h3 style={{
                        fontSize: '16px',
                        fontWeight: 700,
                        color: step.textColor,
                        lineHeight: 1.3,
                        margin: 0
                      }}>
                        {step.title}
                      </h3>
                      <p style={{
                        fontSize: '10px',
                        color: '#94a3b8',
                        fontWeight: 700,
                        marginTop: '6px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.15em'
                      }}>
                        {step.englishTitle}
                      </p>
                    </div>
                  </div>

                  {/* Detail Card */}
                  <div style={{
                    flex: 1,
                    background: '#fff',
                    padding: '20px',
                    borderRadius: '16px',
                    border: `1px solid ${isHovered ? step.shadowColor : '#f1f5f9'}`,
                    boxShadow: isHovered ? `0 20px 40px rgba(0,0,0,0.08)` : '0 1px 3px rgba(0,0,0,0.04)',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    overflow: 'hidden',
                    marginTop: '8px',
                    transform: isHovered ? 'translateY(-4px)' : 'none'
                  }}>
                    <div style={{
                      position: 'absolute',
                      top: 0, left: 0, right: 0,
                      height: '3px',
                      background: step.gradient,
                      opacity: 0.6
                    }} />
                    
                    <ul style={{ listStyle: 'none', padding: 0, margin: '8px 0 0 0' }}>
                      {step.details.map((detail, idx) => (
                        <li key={idx} style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          fontSize: '14px',
                          color: '#475569',
                          marginBottom: '10px'
                        }}>
                          <div style={{
                            marginRight: '10px',
                            marginTop: '6px',
                            width: '6px',
                            height: '6px',
                            borderRadius: '50%',
                            background: step.gradient,
                            flexShrink: 0
                          }} />
                          <span style={{ lineHeight: 1.5, fontWeight: 500 }}>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Feedback Loop */}
          <div className="flowchart-5-feedback" style={{
            position: 'absolute',
            bottom: '-48px',
            left: '30%',
            right: '30%',
            height: '40px',
            pointerEvents: 'none',
            zIndex: 0
          }}>
            <div className="flowchart-5-feedback-box" style={{
              width: '100%',
              height: '100%',
              borderBottom: '3px dashed #fdba74',
              borderLeft: '3px dashed #fdba74',
              borderRight: '3px dashed #fdba74',
              borderRadius: '0 0 24px 24px',
              position: 'relative'
            }}>
              {/* Arrow up */}
              <div className="feedback-arrow" style={{
                position: 'absolute',
                top: '-8px',
                left: '-10px',
                fontSize: '18px',
                color: '#fb923c'
              }}>▲</div>

              {/* Label */}
              <div className="feedback-label" style={{
                position: 'absolute',
                bottom: '-14px',
                left: '50%',
                transform: 'translateX(-50%)',
                background: '#f8fafc',
                padding: '4px 16px',
                display: 'flex',
                alignItems: 'center',
                color: '#ea580c',
                fontWeight: 600,
                fontSize: '13px',
                borderRadius: '100px',
                border: '1px solid #fed7aa',
                boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                whiteSpace: 'nowrap'
              }}>
                🔄 Dữ liệu người dùng huấn luyện lại mô hình
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
