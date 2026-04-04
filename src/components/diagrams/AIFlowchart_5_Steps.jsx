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
    details: ['Tối ưu thời gian/chi phí', 'Nâng cao chất lượng đào tạo', 'Mở rộng quy mô (Scale)']
  }
];

export default function AIFlowchart5Steps() {
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
          Quy trình phát triển và ứng dụng AI trong thực tế
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
          background: 'linear-gradient(to bottom, #3b82f6, #a855f7, #6366f1, #f97316, #10b981)',
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
                borderRadius: '16px',
                background: step.gradient,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '32px',
                flexShrink: 0,
                boxShadow: `0 8px 20px ${step.shadowColor}`,
                border: '4px solid #f8fafc',
                transition: 'transform 0.3s ease',
                transform: isHovered ? 'scale(1.08)' : 'scale(1)',
                zIndex: 2,
              }}>
                {step.emoji}
              </div>

              {/* Card */}
              <div style={{
                flex: 1,
                background: '#fff',
                borderRadius: '16px',
                padding: '20px 24px',
                border: `2px solid ${isHovered ? step.shadowColor : '#f1f5f9'}`,
                boxShadow: isHovered
                  ? `0 12px 28px rgba(0,0,0,0.08)`
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
                  height: '3px',
                  background: step.gradient,
                  opacity: 0.6,
                }} />

                {/* Title row */}
                <div style={{ marginBottom: '12px' }}>
                  <h3 style={{
                    fontSize: '17px',
                    fontWeight: 700,
                    color: step.textColor,
                    margin: 0,
                    lineHeight: 1.3,
                  }}>
                    {step.title}
                  </h3>
                  <p style={{
                    fontSize: '10px',
                    color: '#94a3b8',
                    fontWeight: 700,
                    marginTop: '4px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.15em',
                    margin: '4px 0 0',
                  }}>
                    {step.englishTitle}
                  </p>
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
                      <div style={{
                        marginRight: '10px',
                        marginTop: '7px',
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        background: step.gradient,
                        flexShrink: 0,
                      }} />
                      <span style={{ lineHeight: 1.5, fontWeight: 500 }}>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}

        {/* Feedback loop label */}
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
          🔄 Dữ liệu người dùng huấn luyện lại mô hình
        </div>
      </div>
    </div>
  );
}
