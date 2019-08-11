import { LightningElement, track } from 'lwc';

const VIEW_STUDENT_BROWSER = 'students';
const VIEW_TRIP_REPORTS = 'tripreports';
const VIEW_CERTIFICATION = 'certifiedStudents';
const VIEW_POPULARITY = 'certPopularity';

export default class LayoutManager extends LightningElement {

	@track viewMode = VIEW_STUDENT_BROWSER;
	@track certificationName = '';
	@track certificationId = 0;

	handleNavItemSelected(event) {
		const selectedItemName = event.detail.itemName;
		
		if (selectedItemName === 'students') {
			this.viewMode = VIEW_STUDENT_BROWSER;
		} else if (selectedItemName === 'tripreports') {
			this.viewMode = VIEW_TRIP_REPORTS;
		} else if (selectedItemName === 'certpopularity') {
			this.viewMode = VIEW_POPULARITY;
		} else if (selectedItemName.indexOf('certification') !== -1) {
			this.viewMode = VIEW_CERTIFICATION;
			const selectedCertificationObj = selectedItemName.split('|');
			this.certificationId = selectedCertificationObj[1];
			this.certificationName = selectedCertificationObj[2];
		}
	}

	get studentBrowserView() {
		return (this.viewMode === VIEW_STUDENT_BROWSER);
	}
	get tripReportView() {
		return (this.viewMode === VIEW_TRIP_REPORTS);
	}
	get certifiedStudentsView() {
		return (this.viewMode === VIEW_CERTIFICATION);
	}
	get certPopularityView() {
		return (this.viewMode === VIEW_POPULARITY);
	}
}