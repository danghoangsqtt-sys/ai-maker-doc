import React from 'react';

export default function Sidebar({ currentSection, setCurrentSection, isOpen, onToggle, courseData, onSettingsClick, isLoggedIn }) {
  return (
    <>
      {/* Toggle Button - always visible */}
      <button
        onClick={onToggle}
        style={{
          position: 'fixed',
          top: '12px',
          left: isOpen ? 'var(--toggle-left-open, 248px)' : '12px',
          zIndex: 1000,
          background: '#223f2d',
          color: '#fff',
          border: 'none',
          borderRadius: '8px',
          width: '36px',
          height: '36px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '18px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
          transition: 'left 0.3s ease'
        }}
        className="sidebar-toggle-btn"
      >
        {isOpen ? '✕' : '☰'}
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="sidebar-overlay"
          onClick={onToggle}
        />
      )}

      {/* Sidebar */}
      <div className="sidebar" style={{
        transform: isOpen ? 'translateX(0)' : 'translateX(-100%)',
        transition: 'transform 0.3s ease',
        position: 'fixed',
        top: 0,
        left: 0,
        height: '100vh',
        zIndex: 999
      }}>
        <div className="sidebar-header">
          <h2 style={{ lineHeight: '1.4' }}>DHSYSTEM_<br/>BÁO CÁO CHUYÊN ĐỀ</h2>
        </div>
        <div className="sidebar-nav">
          <div 
            className={`nav-item ${currentSection === 'dashboard' ? 'active' : ''}`}
            onClick={() => { 
              setCurrentSection('dashboard'); 
              if (window.innerWidth <= 768) onToggle();
            }}
          >
            Trang chủ
          </div>
          {courseData.modules.map((sec, index) => (
            <div
              key={sec.id}
              className={`nav-item ${currentSection === index ? 'active' : ''}`}
              onClick={() => { 
                setCurrentSection(index); 
                if (window.innerWidth <= 768) onToggle();
              }}
            >
              {sec.title}
            </div>
          ))}
        </div>
        
        {/* Settings Button at bottom of sidebar */}
        <div style={{
          padding: '12px 16px',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          marginTop: 'auto',
        }}>
          <div
            onClick={() => {
              onSettingsClick();
              if (window.innerWidth <= 768) onToggle();
            }}
            style={{
              padding: '10px 16px',
              borderRadius: '8px',
              background: isLoggedIn ? 'rgba(59, 130, 246, 0.2)' : 'rgba(255, 255, 255, 0.05)',
              border: isLoggedIn ? '1px solid rgba(59, 130, 246, 0.3)' : '1px solid rgba(255, 255, 255, 0.1)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              transition: 'all 0.2s',
              color: '#fff',
              fontSize: '0.9rem',
              fontWeight: 500,
            }}
          >
            <span style={{ fontSize: '16px' }}>{isLoggedIn ? '👤' : '⚙️'}</span>
            <span>{isLoggedIn ? 'Đã đăng nhập (Admin)' : 'Cài đặt'}</span>
          </div>
        </div>
      </div>
    </>
  );
}
