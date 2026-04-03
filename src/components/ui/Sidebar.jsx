import React from 'react';

export default function Sidebar({ currentSection, setCurrentSection, isOpen, onToggle, courseData }) {
  return (
    <>
      {/* Toggle Button - always visible */}
      <button
        onClick={onToggle}
        style={{
          position: 'fixed',
          top: '12px',
          left: isOpen ? '248px' : '12px',
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
      >
        {isOpen ? '✕' : '☰'}
      </button>

      {/* Sidebar */}
      <div className="sidebar" style={{
        transform: isOpen ? 'translateX(0)' : 'translateX(-100%)',
        transition: 'transform 0.3s ease',
        position: 'fixed',
        top: 0,
        left: 0,
        height: '100vh',
        zIndex: 999,
        width: '280px'
      }}>
        <div className="sidebar-header">
          <h2 style={{ fontSize: '1.2rem', lineHeight: '1.4' }}>DHSYSTEM_<br/>BÁO CÁO CHUYÊN ĐỀ</h2>
        </div>
        <div className="sidebar-nav">
          <div 
            className={`nav-item ${currentSection === 'dashboard' ? 'active' : ''}`}
            onClick={() => { setCurrentSection('dashboard'); }}
          >
            Trang chủ
          </div>
          {courseData.modules.map((sec, index) => (
            <div
              key={sec.id}
              className={`nav-item ${currentSection === index ? 'active' : ''}`}
              onClick={() => { setCurrentSection(index); }}
            >
              {sec.title}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
