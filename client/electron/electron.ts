var { app, BrowserWindow, screen, ipcMain, globalShortcut } = require("electron");
var { execFile } = require("child_process");

import WebsiteResource from './WebsiteResource';
import LocalApplicationResource from './LocalApplicationResource';

var path = require("path");

const WindowSize = { SMALL: 0.4, MEDIUM: 0.72, LARGE: 0.9 }
let monitorWidth : Number, monitorHeight : Number;

let mainWindow, webWindow;

app.on('ready', () => {
    // Keyboard Listeners

    let mainScreen = screen.getPrimaryDisplay(), dimensions = mainScreen.size;
    let icon = path.join(__dirname, './src/assets/images/logo.png');

    monitorWidth = dimensions.width, monitorHeight = dimensions.height;

    mainWindow = getMainWindow(monitorWidth, monitorHeight);
    webWindow = getWebWindow(monitorWidth, monitorHeight);

    webWindow.on('close', (event) => {
        event.preventDefault();
        webWindow.hide();
        mainWindow.focus();
    });

    startApplication();
});

function startApplication() {
    // mainWindow.loadFile('./dist/index.html');
    mainWindow.loadURL('https://localhost:8080');
    webWindow.hide();
}

function openWebsite(resource: WebsiteResource) {
    if (!webWindow) {
        console.log("WEB WINDOW DESTROYED.");
    } else {
        webWindow.loadURL(resource.getURL());
        webWindow.show();
    }
}

function launchApplication(resource: LocalApplicationResource) {
    execFile(resource.getPath(), function(error, data) {
        if (error) {
            throw error;
        }
        console.log(data);
    });
}

function getMainWindow(width, height) {
    return new BrowserWindow({
        x: 100,
        y: 100,
        frame: false,
        width: width * WindowSize.LARGE,
        height: height * WindowSize.LARGE,
        webPreferences: {
            nodeIntegration: true,
            preload: './preload.js'
        }
    });
}

function getWebWindow(width, height) {
    return new BrowserWindow({
        x: mainWindow.x,
        y: mainWindow.y,
        frame: false,
        width: width * WindowSize.LARGE,
        height: height * WindowSize.MEDIUM,
    });
}