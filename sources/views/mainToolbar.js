import { JetView, plugins } from "webix-jet";

export default class MainToolbar extends JetView {
    config() {
		var mainToolBar = {
			view: "toolbar",
			height: 50,
			elements: [
				{
					view: "button", type: "icon", icon: "bars", width: 37, align: "left",
					click: function () {
						$$("main:menu").toggle();
					}
				},
				{ view: "label", label: "<a href='http://ariadnasw.com'><img src='assets/img/gdes_logo.png' height='35' /></a>", width: 200},
				{
					view: "label", label: this.app.config.name
				}
			]

        };
        return mainToolBar;
    }
    init() {

    }
}