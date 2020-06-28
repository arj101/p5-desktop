var { MenuItem } = require("electron").remote;
var { Menu } = require("electron").remote;
var { BrowserWindow } = require("electron").remote;

var title_bar = require('custom-electron-titlebar');

function createWindow() {
    let create = new BrowserWindow({ 
        width: 800, 
        height: 600,
        minHeight: 600,
        minWidth: 800,
        frame: false,
        webPreferences: {
            nodeIntegration: true
        }
    })
    create.loadFile("pages/create.html")
}

const menu = new Menu();

menu.append(new MenuItem({
    label: "Project",
    submenu: [
        {
            label: "New Project",
            click: () => createWindow()
        },
    ]
}));

let P5 = new title_bar.Titlebar({
    backgroundColor: title_bar.Color.fromHex('#fbfbfb'),
    shadow: true,
    icon: "./images/logo.svg",
    shadow: false,
});

P5.updateTitle('P5 Desktop'); 
 
P5.updateMenu(menu);