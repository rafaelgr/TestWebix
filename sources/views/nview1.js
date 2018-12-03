import { JetView } from "webix-jet";
import {devConfig} from "../config/config";

export default class Nview1 extends JetView {
    config() {
        return {
            rows: [
                {
                    template: "Row 1"
                },
                {
                    template: "Row 2",
                    cols: [
                        { template: "Col 1" },
                        { template: "Col 2" },
                        { template: "Col 3" }
                    ]
                },
                {
                    template: "Row 3"
                }
            ]
        }
    }
    init() {
        if (!PRODUCTION) {
            alert(devConfig)
        } else {
            alert("We are in production");
        }
    }
}