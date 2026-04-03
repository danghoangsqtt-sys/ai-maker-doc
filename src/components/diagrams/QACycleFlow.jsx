import React, { useState } from 'react';

const steps = [
  {
    id: 1,
    title: 'Input Thử Nghiệm',
    englishTitle: 'TEST INPUT',
    emoji: '🧪',
    color: '#3b82f6',
    gradient: 'linear-gradient(135deg, #3b82f6, #2563eb)',
    bgLight: '#eff6ff',
    details: ['Xây dựng bộ Test Cases', 'Mô phỏng các Edge cases', 'Truyền tham số đầu vào (Variables)']
  },
  {
    id: 2,
    title: 'AI Trả Kết Quả',
    englishTitle: 'AI OUTPUT',
    emoji: '🤖',
    color: '#8b5cf6',
    gradient: 'linear-gradient(135deg, #a855f7, #7c3aed)',
    bgLight: '#f5f3ff',
    details: ['Nhận phản hồi thô (Raw output)', 'Đo lường thời gian (Latency)', 'Ghi nhận Log hệ thống']
  },
  {
    id: 3,
    title: 'Kiểm Tra, Đánh Giá',
    englishTitle: 'QA EVALUATION',
    emoji: '📋',
    color: '#f59e0b',
    gradient: 'linear-gradient(135deg, #f59e0b, #d97706)',
    bgLight: '#fffbeb',
    details: ['Đối chiếu Expected Output', 'Kiểm tra tính an toàn (Safety)', 'Chấm điểm độ chính xác (Accuracy)']
  },
  {
    id: 4,
    title: 'Sửa Lại Prompt',
    englishTitle: 'PROMPT TUNING',
    emoji: '🔧',
    color: '#f43f5e',
    gradient: 'linear-gradient(135deg, #f43f5e, #e11d48)',
    bgLight: '#fff1f2',
    details: ['Tối ưu hóa lại ngữ cảnh', 'Loại bỏ hiện tượng ảo giác', 'Điều chỉnh Temperature/Top-P']
  }
];

export default function QACycleFlow() {
  const [hoveredStep, setHoveredStep] = useState(null);

  return (
    <div style={{
      background: '#f8fafc',
      padding: '48px 24px 72px 24px',
      fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif",
      borderRadius: '16px',
      margin: '32px 0',
      border: '1px solid #e2e8f0',
      boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
      position: 'relative'
    }}>
      <div style={{ maxWidth: '1000px', width: '100%', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: 800,
            color: '#1e293b',
            marginBottom: '12px',
            letterSpacing: '-0.02em'
          }}>
            Quy trình kiểm duyệt chất lượng (QA)
          </h2>
          <p style={{
            color: '#64748b',
            maxWidth: '600px',
            margin: '0 auto',
            fontSize: '1.05rem',
            lineHeight: 1.6
          }}>
            Vòng lặp khép kín giúp kiểm soát chất lượng đầu ra của AI, đảm bảo tính ổn định và chống lại hiện tượng ảo giác (Hallucination).
          </p>
        </div>

        {/* 4-Step Pipeline */}
        <div style={{ position: 'relative', width: '100%' }}>
          
          {/* Horizontal connector */}
          <div style={{
            position: 'absolute',
            top: '40px',
            left: '12.5%',
            right: '12.5%',
            height: '3px',
            background: '#e2e8f0',
            zIndex: 0
          }} />

          <div style={{ display: 'flex', flexDirection: 'row', width: '100%', position: 'relative', zIndex: 1 }}>
            {steps.map((step) => {
              const isHovered = hoveredStep === step.id;
              
              return (
                <div 
                  key={step.id}
                  style={{
                    width: '25%',
                    padding: '0 10px',
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
                      boxShadow: `0 10px 25px ${step.color}40`,
                      border: '4px solid #f8fafc',
                      transition: 'transform 0.3s ease',
                      transform: isHovered ? 'scale(1.12) translateY(-8px)' : 'scale(1)',
                      fontSize: '32px'
                    }}>
                      {step.emoji}
                    </div>
                    
                    <div style={{ textAlign: 'center', marginTop: '16px', marginBottom: '12px', minHeight: '56px' }}>
                      <h3 style={{
                        fontSize: '16px',
                        fontWeight: 700,
                        color: step.color,
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
                    border: `2px solid ${isHovered ? step.color + '40' : '#f1f5f9'}`,
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

          {/* Feedback Loop: Bước 4 → Bước 1 */}
          <div style={{
            position: 'absolute',
            bottom: '-48px',
            left: '12.5%',
            right: '12.5%',
            height: '40px',
            pointerEvents: 'none',
            zIndex: 0
          }}>
            <div style={{
              width: '100%',
              height: '100%',
              borderBottom: '3px dashed #fda4af',
              borderLeft: '3px dashed #fda4af',
              borderRight: '3px dashed #fda4af',
              borderRadius: '0 0 24px 24px',
              position: 'relative'
            }}>
              {/* Arrow up to step 1 */}
              <div style={{
                position: 'absolute',
                top: '-8px',
                left: '-10px',
                fontSize: '18px',
                color: '#f43f5e'
              }}>▲</div>

              {/* Label */}
              <div style={{
                position: 'absolute',
                bottom: '-14px',
                left: '50%',
                transform: 'translateX(-50%)',
                background: '#f8fafc',
                padding: '6px 20px',
                display: 'flex',
                alignItems: 'center',
                color: '#e11d48',
                fontWeight: 600,
                fontSize: '13px',
                borderRadius: '100px',
                border: '1px solid #fecdd3',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                whiteSpace: 'nowrap',
                gap: '8px'
              }}>
                🔄 Chu trình Tối ưu hóa (Optimization Loop)
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
