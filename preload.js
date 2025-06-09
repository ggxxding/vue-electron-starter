const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('versions', {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
  // 除函数之外，我们也可以暴露变量
})
contextBridge.exposeInMainWorld('electronAPI', {
  // send to main.js
  openUrl: (url) => ipcRenderer.send('open-url', url),
  // SSHConnect: (args) => ipcRenderer.invoke('ssh-connect', args),
})
