import { JetView } from "webix-jet";
import { data } from "models/records";

var currentRowDatatableView = null;
var currentIdDatatableView = null;

export default class DataView extends JetView {
	config() {
		var datatableView = {
			view: "datatable",
			id: "data:datatable",
			autoConfig: true,
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