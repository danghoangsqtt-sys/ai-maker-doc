import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import 'github-markdown-css/github-markdown.css';
import './index.css';

// Content & Data Utilities
import { parseCourseData, mergeCourseData } from './content/dataUtils';
import rawDataString from './content/raw_data.md?raw';

// UI Components
import Sidebar from './components/ui/Sidebar';
import MermaidViewer from './components/ui/MermaidViewer';
import ThemeBanner from './components/ui/ThemeBanner';

import InteractiveQuiz from './components/quiz/InteractiveQuiz';

// Features
import AdminEditor from './features/editor/AdminEditor';

const CodeRenderer = ({ inline, className, children, ...props }) => {
  const match = /language-(\w+)/.exec(className || '');
  const content = String(children).replace(/\n$/, '');

  if (!inline && match && match[1] === 'mermaid') {
    return <MermaidViewer chart={content} />;
  }

  return (
    <code className={className} {...props}>
      {children}
    </code>
  );
};

function MainContent({ currentSection, data, isLoggedIn, onEdit, isEditing, onSave, onCancel, onChange }) {
  return (
    <div className="main-content" style={{ display: 'flex', flexDirection: 'column', height: '100vh', background: '#f8fafc' }}>
      <ThemeBanner />

      <div className="content-body" style={{ flex: 1, overflowY: 'auto', width: '100%', padding: '32px', background: 'transparent' }}>
        <div style={{ background: '#fff', borderRadius: '8px', padding: '40px', position: 'relative', minHeight: '80%' }}>
          
          {/* Section Header with Edit Button */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', borderBottom: '1px solid #f1f5f9', paddingBottom: '16px' }}>
            <h1 style={{ color: '#0f172a', margin: 0, fontSize: '1.8rem', fontWeight: 800 }}>
              {currentSection === 'dashboard' ? "TRANG CHỦ" : data.title}
            </h1>
            
            {isLoggedIn && !isEditing && (
              <button 
                onClick={onEdit}
                style={{ padding: '8px 16px', borderRadius: '8px', background: '#f1f5f9', border: '1px solid #e2e8f0', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 600, color: '#475569' }}
              >
                <span>✏️</span> Chỉnh sửa phần này
              </button>
            )}

            {isEditing && (
              <div style={{ display: 'flex', gap: '12px' }}>
                <button 
                  onClick={onCancel}
                  style={{ padding: '8px 16px', borderRadius: '8px', background: '#fff', border: '1px solid #e2e8f0', cursor: 'pointer', fontWeight: 600, color: '#64748b' }}
                >Hủy</button>
                <button 
                  onClick={onSave}
                  style={{ padding: '8px 24px', borderRadius: '8px', background: '#10b981', border: 'none', color: '#fff', cursor: 'pointer', fontWeight: 700, boxShadow: '0 4px 12px rgba(16,185,129,0.2)' }}
                >Lưu</button>
              </div>
            )}
          </div>

          <div className="markdown-body" style={{ color: 'var(--text-main)', fontFamily: "'Inter', system-ui, sans-serif", fontSize: '16px', lineHeight: 1.8 }}>
            
            {/* Dashboard Hero Section at the Top */}
            {currentSection === 'dashboard' && (
              <div style={{ marginBottom: '32px' }}>
                <div style={{ 
                  position: 'relative', 
                  width: '100%', 
                  height: '240px', 
                  borderRadius: '16px', 
                  overflow: 'hidden', 
                  boxShadow: '0 20px 40px rgba(0,0,0,0.1)' 
                }}>
                  <img src="./cover.png" alt="Cover" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  {/* Subtle dark gradient for better integration */}
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15,23,42,0.4), transparent)' }} />
                </div>
              </div>
            )}

            {isEditing ? (
              <textarea 
                value={data.theory}
                onChange={(e) => onChange(e.target.value)}
                style={{
                  width: '100%',
                  minHeight: '500px',
                  padding: '20px',
                  borderRadius: '12px',
                  border: '2px solid #3b82f6',
                  fontFamily: 'monospace',
                  fontSize: '15px',
                  lineHeight: '1.6',
                  outline: 'none',
                  background: '#fcfdff'
                }}
              />
            ) : (
              <>
                <ReactMarkdown 
                  remarkPlugins={[remarkGfm]} 
                  rehypePlugins={[rehypeRaw]}
                  components={{ code: CodeRenderer }}
                >
                  {data.theory}
                </ReactMarkdown>

                {/* Interactive Quiz - Chương V */}
                {currentSection === 4 && <InteractiveQuiz />}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [currentSection, setCurrentSection] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth > 768);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
  const [courseData, setCourseData] = useState(() => parseCourseData(rawDataString));

  const handleSaveSection = async () => {
    const fullMd = mergeCourseData(courseData);
    if (window.electronAPI && window.electronAPI.saveContent) {
      const result = await window.electronAPI.saveContent(fullMd);
      if (result.success) {
        alert("Đã lưu thay đổi thành công!");
        setIsEditing(false);
      } else {
        alert("Lỗi khi lưu: " + result.error);
      }
    } else {
      alert("Tính năng lưu chỉ hoạt động trong ứng dụng Electron.");
      setIsEditing(false);
    }
  };

  const handleTextChange = (newVal) => {
    if (currentSection === 'dashboard') {
      setCourseData({
        ...courseData,
        dashboard: { ...courseData.dashboard, theory: newVal }
      });
    } else {
      const newModules = [...courseData.modules];
      newModules[currentSection].theory = newVal;
      setCourseData({ ...courseData, modules: newModules });
    }
  };

  if (!courseData) return <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Đang tải dữ liệu...</div>;

  const data = currentSection === 'dashboard' ? courseData.dashboard : courseData.modules[currentSection];

  return (
    <div style={{ display: 'flex', height: '100vh', width: '100vw', overflow: 'hidden' }}>
      <Sidebar 
        currentSection={currentSection} 
        setCurrentSection={setCurrentSection}
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen(!sidebarOpen)}
        courseData={courseData}
        onSettingsClick={() => setIsSettingsModalOpen(true)}
        isLoggedIn={isLoggedIn}
      />
      <div 
        id="main-wrapper" 
        className={sidebarOpen ? 'sidebar-open' : ''} 
        style={{ 
        flex: 1, 
        transition: 'margin-left 0.3s ease',
        overflow: 'hidden',
        display: 'flex'
      }}>
        <MainContent 
          currentSection={currentSection} 
          data={data} 
          isLoggedIn={isLoggedIn}
          isEditing={isEditing}
          onEdit={() => setIsEditing(true)}
          onCancel={() => {
            // Re-parse from raw setup to undo (or we could store backup)
            // For now, just cancel edit mode
            setIsEditing(false);
          }}
          onSave={handleSaveSection}
          onChange={handleTextChange}
        />
      </div>
      
      {/* Admin Auth Feature */}
      <AdminEditor isLoggedIn={isLoggedIn} onAuthChange={setIsLoggedIn} isModalOpen={isSettingsModalOpen} setIsModalOpen={setIsSettingsModalOpen} />
    </div>
  );
}

export default App;
