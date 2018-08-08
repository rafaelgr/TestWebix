import {JetApp, EmptyRouter, HashRouter, plugins } from "webix-jet";

export default class MyApp extends JetApp{
	constructor(config){
		const defaults = {
			id 		: "TEMPLATEAPP",
			version : VERSION,
			router 	: BUILD_AS_MODULE ? EmptyRouter : HashRouter,
			debug 	: !PRODUCTION,
			start 	: "/top2/start",
			name : "ARIADNA WEBIX TEMPLATE"
		};

		super({ ...defaults, ...config });
	}
}

if (!BUILD_AS_MODULE){

	webix.ready(() =>  {
		var app = new MyApp();
		app.use(plugins.Locale);
		app.render();
	} );
}