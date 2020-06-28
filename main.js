const electron = require("electron");

const { app, BrowserWindow } = require('electron')

function createWindow () {
  let win = new BrowserWindow({
    width: 900,
    height: 800,
    minHeight: 650,
    minWidth: 600,
    frame: false,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true
    }
  })
  win.loadFile('index.html');
  win.setMenu(null);
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })
  
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })