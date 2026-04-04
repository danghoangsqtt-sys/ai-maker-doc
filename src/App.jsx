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

// Diagram Components
import FiveStepsFlow from './components/diagrams/AIFlowchart';
import AIFlowchart5Steps from './components/diagrams/AIFlowchart_5_Steps';

// Interactive Features
import InteractiveQuiz from './components/quiz/InteractiveQuiz';
import CommonMistakes from './components/diagrams/CommonMistakes';

// Features
import AdminEditor from './features/editor/AdminEditor';

const CodeRenderer = ({ inline, className, children, ...props }) => {
  const match = /language-(\w+)/.exec(className || '');
  const content = String(children).replace(/\n$/, '');

  if (!inline && match && match[1] === 'mermaid') {
    if (content.includes('NHU CẦU THỰC TẾ') && content.includes('HIỆU QUẢ') && !content.includes('BƯỚC 7')) {
      return <AIFlowchart5Steps />;
    }
    if (content.includes('Xác định nhiệm vụ') || content.includes('Triển khai thực tiễn') || content.includes('QUY TRÌNH 5 BƯỚC')) {
      return <FiveStepsFlow />;
    }
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



                {/* Common Mistakes Diagram - Chương IV */}
                {currentSection === 3 && <CommonMistakes />}

                {/* Interactive Quiz - Chương V */}
                {currentSection === 4 && <InteractiveQuiz />}

                {/* Dashboard Hero Section */}
                {currentSection === 'dashboard' && (
                  <div style={{ marginTop: '40px' }}>
                    <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 25px 50px rgba(0,0,0,0.15)' }}>
                      <img src="./cover.png" alt="Cover" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #0f172a, rgba(15,23,42,0.6), transparent)' }} />
                      <div style={{ position: 'absolute', bottom: 0, left: 0, padding: '32px', zIndex: 1 }}>
                        <div style={{ display: 'inline-block', padding: '6px 16px', borderRadius: '100px', background: 'rgba(16,185,129,0.2)', border: '1px solid rgba(52,211,153,0.3)', color: '#6ee7b7', fontSize: '13px', fontWeight: 600, marginBottom: '16px' }}>GIÁO TRÌNH ĐIỆN TỬ</div>
                        <h2 style={{ color: '#fff', fontSize: '2.5rem', fontWeight: 800, margin: '0 0 16px 0' }}>LÊ BÁ ĐĂNG HOÀNG</h2>
                        <p style={{ color: '#94a3b8', fontSize: '1.1rem', margin: 0 }}>KHOA CƠ SỞ - BỘ MÔN ĐIỆN TỬ SỐ</p>
                      </div>
                    </div>
                  </div>
                )}
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
      <AdminEditor isLoggedIn={isLoggedIn} onAuthChange={setIsLoggedIn} />
    </div>
  );
}

export default App;
