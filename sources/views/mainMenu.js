import { JetView, plugins } from "webix-jet";
import {menudata} from "models/menu_options";

export default class MainMenu extends JetView {
    config() {
        var mainMenu = {
            view: "sidebar",
            width: 200,
            id: "main:menu",
            activeTitle: true, select: true,
            data: menudata
        };
        return mainMenu;
    }
    init() {
        this.use(plugins.Menu, "main:menu");
    }
}