var { MenuItem } = require("electron").remote;
var { Menu } = require("electron").remote;

var title_bar = require('custom-electron-titlebar');

const menu = new Menu();

menu.append(new MenuItem({
    label: "",
}));

let P5Create = new title_bar.Titlebar({
    backgroundColor: title_bar.Color.fromHex('#fbfbfb'),
    shadow: true,
    icon: "../images/logo.svg",
    shadow: false,
    maximizable: false,
});

P5Create.updateTitle('Creating New Project'); 
P5Create.updateMenu(menu);