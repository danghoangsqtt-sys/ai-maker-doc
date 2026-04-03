const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  saveContent: (content) => ipcRenderer.invoke('save-content', content)
});
