const { app, BrowserWindow, ipcMain } = require('electron')
require('dotenv').config()

const createWindow = () => {
    const win = new BrowserWindow({
        width: parseInt(process.env.BROWSER_WINDOW_WITH),
        height: parseInt(process.env.BROWSER_WINDOW_HEIGHT),
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        }
    })

    win.loadURL(`file://${__dirname}/src/pages/user/index.html`)

    if (process.env.APP_ENV === 'development') {
        win.webContents.openDevTools()
    }

}

app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})