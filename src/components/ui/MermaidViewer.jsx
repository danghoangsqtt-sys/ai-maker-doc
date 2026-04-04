import React, { useState, useEffect } from 'react';
import mermaid from 'mermaid';

export default function MermaidViewer({ chart }) {
  const [svg, setSvg] = useState('');
  const [id] = useState(() => `mermaid-${Math.random().toString(36).substring(2, 10)}`);

  useEffect(() => {
    mermaid.initialize({ startOnLoad: false, theme: 'default' });
    let isMounted = true;
    
    const renderChart = async () => {
      try {
        const { svg: resolvedSvg } = await mermaid.render(id, chart);
        if (isMounted) setSvg(resolvedSvg);
      } catch (e) {
        console.error("Mermaid error:", e);
        if (isMounted) setSvg('<div style="color:red; padding:10px;">Lỗi hiển thị lưu đồ thuật toán</div>');
      }
    };
    
    renderChart();
    
    return () => { isMounted = false; };
  }, [chart, id]);

  return (
    <div 
      className="mermaid-container" 
      dangerouslySetInnerHTML={{ __html: svg }} 
      style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        margin: '20px 0',
        background: '#f9fafb',
        padding: '20px',
        borderRadius: '8px',
        border: '1px solid #e5e7eb',
        overflowX: 'auto',
        width: '100%',
        boxSizing: 'border-box',
      }}
    />
  );
}
