import { LightningElement } from "lwc";
import getCertPopularity from "@salesforce/apex/CertPopularity.getCertPopularity";
import { loadScript } from "lightning/platformResourceLoader";
import chartjs from "@salesforce/resourceUrl/chart";

const CHART_CONFIG = {
	dom_selector: "canvas.certBarChart",
	type: "bar",
	color: "rgb(255, 99, 132)",
	options: {
		responsive: true,
		legend: { display: false },
		title: { display: false },
		animation: {
			animateScale: true
		}
	}
};
export default class CertPopularity extends LightningElement {
    error;
    _chart;
    _chartjsInitiallized=false;
    renderedCallback() {
        if (this._chartjsInitiallized) {
            return;
        }
        this._chartjsInitiallized=true;
        loadScript(this, chartjs)
        .then(getCertPopularity)
        .then ((result) => {
            console.log('Data returned from Apex', result);
            //todo:
        })
        .catch(error => {
            this.error =error;
        });
    }
}
