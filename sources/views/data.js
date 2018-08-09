import { JetView } from "webix-jet";
import { data } from "models/records";

var currentRowDatatableView = null;
var currentIdDatatableView = null;
webix.i18n.locales["es-ES"] = {   //"es-ES" - the locale name, the same as the file name
	groupDelimiter: ".",       //a mark that divides numbers with many digits into groups
	groupSize: 3,              //the number of digits in a group
	decimalDelimiter: ",",     //the decimal delimiter
	decimalSize: 2,            //the number of digits after the decimal mark

	//applied to columns with 'format:webix.i18n.dateFormatStr'
	dateFormat: "%d/%m/%Y",
	//applied to columns with 'format:webix.i18n.dateFormatStr'
	timeFormat: "%H:%i",
	//applied to columns with 'format:webix.i18n.longDateFormatStr'
	longDateFormat: "%d %F %Y",
	//applied to cols with 'format:webix.i18n.fullDateFormatStr'
	fullDateFormat: "%d.%m.%Y %H:%i",
	am: null,
	pm: null,
	//€ - currency name. Applied to cols with 'format:webix.i18n.priceFormat'
	price: "{obj} €",
	calendar: {
		monthFull: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto",
			"Septiembre", "Octubre", "Noviembre", "Diciembre"],
		monthShort: ["En", "Feb", "Mar", "Abr", "Mayo", "Jun", "Jul", "Ago", "Sep", "Oct",
			"Nov", "Dic"],
		dayFull: ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"],
		dayShort: ["Dom", "Lun", "Mar", "Mier", "Jue", "Vier", "Sab"]
	},
	hours: "Horas ",
	minutes: "Minutos",
	done: "Listo",

	controls: {
		select: "Seleccione"
	}
};
webix.i18n.setLocale("es-ES");

export default class DataView extends JetView {
	config() {
		var datatableView = {
			view: "datatable",
			id: "data:datatable",
			columns: [
				{ id: "id", adjust: true, header: "ID" },
				{ id: "title", fillspace: true, header: "Title", editor: "text" },
				{ id: "year", header: "Year", editor: "text" },
				{
					id: "votes", header: { text: "Votes2", css: { "text-align": "right" } }, editor: "text", css: { "text-align": "right" },
					format: webix.i18n.priceFormat
				},
				{
					id: "rating", header: { text: "Rating2", css: { "text-align": "right" } }, editor: "text", css: { "text-align": "right" },
					format: webix.i18n.numberFormat
				},
				{
					id: "date", header: { text: "Date2", css: { "text-align": "center" } }, editor: "text",
					format: webix.i18n.dateFormatStr
				}

			],
			editable: true,
			on: {
				"onAfterEditStart": function (id) {
					currentIdDatatableView = id.row;
					currentRowDatatableView = this.data.pull[currentIdDatatableView];
				},
				"onAfterEditStop": function (state, editor, ignoreUpdate) {
					if (state.value != state.old) {
						currentRowDatatableView = this.data.pull[currentIdDatatableView];
						console.log("Row has changed new row :", currentRowDatatableView);
					}
				}
			}

		};
		return datatableView;
	}
	init(view) {
		view.parse(data);
	}
}