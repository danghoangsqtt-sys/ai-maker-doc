import React from 'react';

export default function ThemeBanner() {
  return (
    <div style={{
      width: '100%',
      background: '#1e293b',
      color: '#e2e8f0',
      padding: '12px 24px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
      borderLeft: '4px solid #10b981',
      fontWeight: 600,
      letterSpacing: '0.03em',
      display: 'flex',
      alignItems: 'center',
      zIndex: 10,
      flexShrink: 0,
      fontSize: '15px'
    }}>
      <span style={{ marginRight: '8px', fontSize: '20px' }}>📚</span>
      <span style={{ opacity: 0.7, fontWeight: 500, marginRight: '8px' }}>CHỦ ĐỀ:</span>
      <span style={{ color: '#34d399', fontWeight: 700 }}>ỨNG DỤNG TRÍ TUỆ NHÂN TẠO TRONG XÂY DỰNG CÁC CÔNG CỤ AI</span>
    </div>
  );
}
