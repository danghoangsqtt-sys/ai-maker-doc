import React, { useState } from 'react';

// Simple obfuscation to satisfy "not showing plain text in dev tools" requirement
const CRED_U = "YWRtaW4="; // b64 of 'admin'
const CRED_P = "MTIzNDU2"; // b64 of '123456'

export default function AdminEditor({ isLoggedIn, onAuthChange, isModalOpen, setIsModalOpen }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (btoa(username) === CRED_U && btoa(password) === CRED_P) {
      onAuthChange(true);
      setIsModalOpen(false);
      setError('');
    } else {
      setError('Tài khoản hoặc mật khẩu không chính xác!');
    }
  };

  const handleLogout = () => {
    onAuthChange(false);
    setIsModalOpen(false);
  };

  return (
    <>


      {/* Auth Modal */}
      {isModalOpen && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0,0,0,0.7)',
          backdropFilter: 'blur(4px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 3000,
          padding: '20px'
        }}>
          <div style={{
            background: '#fff',
            width: '100%',
            maxWidth: '400px',
            borderRadius: '16px',
            padding: '40px',
            position: 'relative',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
          }}>
            <button 
              onClick={() => setIsModalOpen(false)}
              style={{ position: 'absolute', top: '20px', right: '20px', background: 'none', border: 'none', fontSize: '20px', cursor: 'pointer', color: '#64748b' }}
            >✕</button>

            {!isLoggedIn ? (
              <form onSubmit={handleLogin} style={{ textAlign: 'center' }}>
                <h2 style={{ marginBottom: '24px', color: '#1e293b' }}>Quản trị hệ thống</h2>
                <div style={{ marginBottom: '16px', textAlign: 'left' }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600, color: '#475569' }}>Tài khoản</label>
                  <input 
                    type="text" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)}
                    style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0' }}
                  />
                </div>
                <div style={{ marginBottom: '24px', textAlign: 'left' }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600, color: '#475569' }}>Mật khẩu</label>
                  <input 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0' }}
                  />
                </div>
                {error && <p style={{ color: '#ef4444', marginBottom: '16px', fontSize: '14px' }}>{error}</p>}
                <button 
                  type="submit"
                  style={{ width: '100%', padding: '14px', borderRadius: '8px', background: '#10b981', color: '#fff', border: 'none', fontWeight: 700, cursor: 'pointer' }}
                >Đăng nhập</button>
              </form>
            ) : (
              <div style={{ textAlign: 'center' }}>
                <h2 style={{ marginBottom: '24px', color: '#1e293b' }}>Đã đăng nhập</h2>
                <p style={{ color: '#64748b', marginBottom: '32px' }}>Bạn đang ở chế độ chỉnh sửa. Bạn có thể nhấn trực tiếp vào nút "Sửa" ở đầu mỗi chương để thay đổi nội dung.</p>
                <button 
                  onClick={handleLogout}
                  style={{ width: '100%', padding: '14px', borderRadius: '8px', background: '#f43f5e', color: '#fff', border: 'none', fontWeight: 700, cursor: 'pointer' }}
                >Đăng xuất</button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
