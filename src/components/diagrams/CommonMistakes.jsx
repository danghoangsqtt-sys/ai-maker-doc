import React, { useState } from 'react';

const mistakes = [
  {
    id: 1,
    title: 'Bỏ quên "Con Người" trong Lưu đồ',
    subtitle: 'NO HUMAN-IN-THE-LOOP',
    emoji: '🚫',
    accentColor: '#ef4444',
    gradient: 'linear-gradient(135deg, #ef4444, #dc2626)',
    bgLight: '#fef2f2',
    wrongFlow: [
      { icon: '📥', label: 'Dữ liệu vào' },
      { icon: '🤖', label: 'AI xử lý' },
      { icon: '💾', label: 'Lưu thẳng lên hệ thống', danger: true },
    ],
    rightFlow: [
      { icon: '📥', label: 'Dữ liệu vào' },
      { icon: '🤖', label: 'AI xử lý' },
      { icon: '👤', label: 'Con người kiểm duyệt', highlight: true },
      { icon: '✅', label: 'Phê duyệt → Lưu trữ' },
    ],
    wrongLabel: 'AI tự động đẩy dữ liệu lên hệ thống mà không ai kiểm tra',
    rightLabel: 'Luôn có bước "Ký duyệt" của chuyên gia trước khi lưu',
    tip: 'Hãy yêu cầu AI code: "Sau khi AI trả kết quả, phải hiện một Textbox để người dùng xem lại. Chỉ khi bấm nút Ký Duyệt thì quy trình mới kết thúc."'
  },
  {
    id: 2,
    title: 'Quên mất Giao diện (UI)',
    subtitle: 'NO USER INTERFACE',
    emoji: '🖥️',
    accentColor: '#f59e0b',
    gradient: 'linear-gradient(135deg, #f59e0b, #d97706)',
    bgLight: '#fffbeb',
    wrongFlow: [
      { icon: '⌨️', label: 'Gõ lệnh Terminal' },
      { icon: '🤖', label: 'API trả JSON thô' },
      { icon: '😵', label: 'Người dùng hoang mang', danger: true },
    ],
    rightFlow: [
      { icon: '📝', label: 'Form nhập liệu đẹp' },
      { icon: '🤖', label: 'AI xử lý ngầm' },
      { icon: '📊', label: 'Hiển thị kết quả trực quan', highlight: true },
    ],
    wrongLabel: '"Viết code kết nối API tóm tắt văn bản" — Không ai biết dùng!',
    rightLabel: '"Thiết kế WebApp có Header, Form nhập, và khu vực hiển thị kết quả"',
    tip: 'Luôn mô tả giao diện chi tiết trong Prompt: Layout, màu sắc, vị trí các nút bấm. Đừng ép người dùng cuối phải nhìn màn hình đen sì.'
  },
  {
    id: 3,
    title: 'Không xử lý Lỗi đường truyền',
    subtitle: 'NO ERROR HANDLING',
    emoji: '⚠️',
    accentColor: '#8b5cf6',
    gradient: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
    bgLight: '#f5f3ff',
    wrongFlow: [
      { icon: '👆', label: 'Bấm nút Gửi' },
      { icon: '⏳', label: 'Chờ 15 giây...' },
      { icon: '👆👆👆', label: 'Bấm lại liên tục → Treo máy!', danger: true },
    ],
    rightFlow: [
      { icon: '👆', label: 'Bấm nút Gửi' },
      { icon: '🔄', label: 'Hiển thị Loading + Khóa nút', highlight: true },
      { icon: '✅', label: 'Trả kết quả hoặc báo lỗi rõ ràng' },
    ],
    wrongLabel: 'Không có trạng thái tải → Người dùng bấm liên tục → Sập ứng dụng',
    rightLabel: 'Có Loading spinner + Vô hiệu hóa nút + Cảnh báo khi timeout',
    tip: '"Thêm tính năng bắt lỗi: Nhấn nút phải hiện vòng xoay Loading và vô hiệu hóa nút tạm thời. Nếu kết nối thất bại sau 10s, hiển thị cảnh báo đỏ."'
  }
];

function FlowDiagram({ steps, isWrong }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '4px',
      flexWrap: 'wrap',
      padding: '16px 8px'
    }}>
      {steps.map((step, idx) => (
        <React.Fragment key={idx}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '6px',
            minWidth: '80px',
            maxWidth: '100px',
          }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '22px',
              background: step.danger
                ? 'linear-gradient(135deg, #fee2e2, #fecaca)'
                : step.highlight
                  ? 'linear-gradient(135deg, #dcfce7, #bbf7d0)'
                  : '#f8fafc',
              border: step.danger
                ? '2px solid #fca5a5'
                : step.highlight
                  ? '2px solid #86efac'
                  : '2px solid #e2e8f0',
              boxShadow: step.danger
                ? '0 4px 12px rgba(239,68,68,0.15)'
                : step.highlight
                  ? '0 4px 12px rgba(34,197,94,0.15)'
                  : '0 2px 4px rgba(0,0,0,0.04)',
              transition: 'transform 0.2s ease',
            }}>
              {step.icon}
            </div>
            <span style={{
              fontSize: '11px',
              fontWeight: 600,
              color: step.danger ? '#dc2626' : step.highlight ? '#16a34a' : '#64748b',
              textAlign: 'center',
              lineHeight: 1.3,
            }}>
              {step.label}
            </span>
          </div>
          {idx < steps.length - 1 && (
            <div style={{
              fontSize: '16px',
              color: isWrong ? '#fca5a5' : '#86efac',
              fontWeight: 700,
              flexShrink: 0,
            }}>→</div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

export default function CommonMistakes() {
  const [expandedId, setExpandedId] = useState(null);

  return (
    <div style={{
      fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif",
      margin: '40px 0',
    }}>
      {/* Header */}
      <div style={{
        textAlign: 'center',
        marginBottom: '40px',
      }}>
        <h2 style={{
          fontSize: '2rem',
          fontWeight: 800,
          color: '#1e293b',
          marginBottom: '12px',
          letterSpacing: '-0.02em'
        }}>
          🛡️ Sơ đồ minh họa 3 Lỗi Sai Cần Tránh
        </h2>
        <p style={{
          color: '#64748b',
          maxWidth: '600px',
          margin: '0 auto',
          fontSize: '1.05rem',
          lineHeight: 1.6
        }}>
          So sánh trực quan giữa cách làm <span style={{ color: '#ef4444', fontWeight: 700 }}>SAI</span> và cách làm <span style={{ color: '#22c55e', fontWeight: 700 }}>ĐÚNG</span> khi thiết kế công cụ AI
        </p>
      </div>

      {/* Mistake Cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {mistakes.map((mistake) => {
          const isExpanded = expandedId === mistake.id;
          return (
            <div
              key={mistake.id}
              onClick={() => setExpandedId(isExpanded ? null : mistake.id)}
              style={{
                background: '#fff',
                borderRadius: '20px',
                border: `2px solid ${isExpanded ? mistake.accentColor : '#f1f5f9'}`,
                boxShadow: isExpanded
                  ? `0 20px 40px ${mistake.accentColor}15, 0 0 0 1px ${mistake.accentColor}10`
                  : '0 2px 8px rgba(0,0,0,0.04)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                overflow: 'hidden',
              }}
            >
              {/* Card Header */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                padding: '24px 28px',
              }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '16px',
                  background: mistake.gradient,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '26px',
                  flexShrink: 0,
                  boxShadow: `0 8px 20px ${mistake.accentColor}30`,
                }}>
                  {mistake.emoji}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{
                    fontSize: '10px',
                    fontWeight: 700,
                    color: '#94a3b8',
                    textTransform: 'uppercase',
                    letterSpacing: '0.15em',
                    marginBottom: '4px'
                  }}>
                    Lỗi {mistake.id} · {mistake.subtitle}
                  </div>
                  <h3 style={{
                    fontSize: '18px',
                    fontWeight: 700,
                    color: '#1e293b',
                    margin: 0,
                  }}>
                    {mistake.title}
                  </h3>
                </div>
                <div style={{
                  fontSize: '20px',
                  color: '#94a3b8',
                  transition: 'transform 0.3s ease',
                  transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                }}>
                  ▼
                </div>
              </div>

              {/* Expanded Content */}
              <div style={{
                maxHeight: isExpanded ? '800px' : '0',
                opacity: isExpanded ? 1 : 0,
                overflow: 'hidden',
                transition: 'max-height 0.4s ease, opacity 0.3s ease',
              }}>
                <div style={{
                  padding: '0 28px 28px',
                }}>
                  {/* Comparison Grid */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '16px',
                    marginBottom: '20px',
                  }} className="mistakes-grid">
                    {/* WRONG */}
                    <div style={{
                      background: '#fef2f2',
                      borderRadius: '16px',
                      padding: '20px',
                      border: '1px solid #fecaca',
                    }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        marginBottom: '12px',
                      }}>
                        <span style={{
                          background: '#ef4444',
                          color: '#fff',
                          padding: '2px 10px',
                          borderRadius: '100px',
                          fontSize: '12px',
                          fontWeight: 700,
                        }}>❌ SAI</span>
                      </div>
                      <FlowDiagram steps={mistake.wrongFlow} isWrong={true} />
                      <p style={{
                        fontSize: '13px',
                        color: '#991b1b',
                        margin: '12px 0 0',
                        lineHeight: 1.5,
                        fontWeight: 500,
                        fontStyle: 'italic',
                      }}>{mistake.wrongLabel}</p>
                    </div>

                    {/* RIGHT */}
                    <div style={{
                      background: '#f0fdf4',
                      borderRadius: '16px',
                      padding: '20px',
                      border: '1px solid #bbf7d0',
                    }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        marginBottom: '12px',
                      }}>
                        <span style={{
                          background: '#22c55e',
                          color: '#fff',
                          padding: '2px 10px',
                          borderRadius: '100px',
                          fontSize: '12px',
                          fontWeight: 700,
                        }}>✅ ĐÚNG</span>
                      </div>
                      <FlowDiagram steps={mistake.rightFlow} isWrong={false} />
                      <p style={{
                        fontSize: '13px',
                        color: '#166534',
                        margin: '12px 0 0',
                        lineHeight: 1.5,
                        fontWeight: 500,
                        fontStyle: 'italic',
                      }}>{mistake.rightLabel}</p>
                    </div>
                  </div>

                  {/* Tip Box */}
                  <div style={{
                    background: mistake.bgLight,
                    borderRadius: '12px',
                    padding: '16px 20px',
                    borderLeft: `4px solid ${mistake.accentColor}`,
                    display: 'flex',
                    gap: '12px',
                    alignItems: 'flex-start',
                  }}>
                    <span style={{ fontSize: '20px', flexShrink: 0 }}>💡</span>
                    <div>
                      <div style={{
                        fontSize: '12px',
                        fontWeight: 700,
                        color: mistake.accentColor,
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        marginBottom: '4px',
                      }}>Prompt khắc phục</div>
                      <p style={{
                        fontSize: '14px',
                        color: '#475569',
                        margin: 0,
                        lineHeight: 1.6,
                        fontStyle: 'italic',
                      }}>
                        {mistake.tip}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Summary Footer */}
      <div style={{
        textAlign: 'center',
        marginTop: '32px',
        padding: '20px 24px',
        background: '#f8fafc',
        borderRadius: '16px',
        border: '2px dashed #cbd5e1',
      }}>
        <p style={{
          margin: 0,
          fontSize: '15px',
          color: '#475569',
          fontWeight: 600,
          lineHeight: 1.6,
        }}>
          🏗️ Tư duy thiết kế chuẩn: <span style={{ color: '#1e293b' }}>Đầu vào (UI)</span> →  
          <span style={{ color: '#1e293b' }}> Xử lý (Logic + AI)</span> →  
          <span style={{ color: '#1e293b' }}> Con người kiểm duyệt</span> →  
          <span style={{ color: '#1e293b' }}> Bắt lỗi mạng</span> →  
          <span style={{ color: '#22c55e', fontWeight: 700 }}> Sản phẩm hoàn chỉnh ✅</span>
        </p>
      </div>
    </div>
  );
}
