import { JetView } from "webix-jet";
import { data } from "models/records";

var currentRowDatatableView = null;
var currentIdDatatableView = null;

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
					id: "votes", header: { text: "Votes", css: { "text-align": "right" } }, editor: "text", css: { "text-align": "right" },
					format: webix.Number.numToStr({
						groupDelimiter: ".",
						groupSize: 3
					})
				},
				{
					id: "rating", header:{ text: "Rating", css: { "text-align": "right" } }, editor: "text", css: { "text-align": "right" },
					format: webix.Number.numToStr({
						groupDelimiter: ".",
						groupSize: 3,
						decimalDelimiter: ",",
						decimalSize: 2
					})
				},
				{
					id:"date", header:{ text: "Date", css: { "text-align": "center" } }, editor: "text",
					format:webix.Date.dateToStr("%d/%m/%Y")
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