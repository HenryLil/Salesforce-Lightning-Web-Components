import { LightningElement, track } from 'lwc';

export default class TripReports extends LightningElement {
	@track mode = 'browse';

	get browseMode() {
		return (this.mode==='browse');
	}
	get addOrEditMode() {
		return (this.mode==='add' || this.mode==='edit');
	}

}