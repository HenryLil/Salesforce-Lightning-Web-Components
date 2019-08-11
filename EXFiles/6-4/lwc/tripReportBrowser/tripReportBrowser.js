import { LightningElement, track } from 'lwc';
import getAll from '@salesforce/apex/TripReportBrowser.getAll';

export default class TripReportBrowser extends LightningElement {
	cols = [
		{
			fieldName:'Date__c', 
			label: 'Date',
			hiddenOnMobile:true
		},
		{
			fieldName:'Name', 
			label: 'Name'
		},
		{
			fieldName:'ReviewType__c', 
			label: 'Type'
		},
		{
			fieldName:'InstructorName', 
			label: 'Instructor'
		},
		{
			fieldName:'Rating__c', 
			label: 'Rating'
		}
	];

	@track tripReports;

	connectedCallback() {
		getAll()
		.then((result) => {
			let data = result;
			let reports=[];
			if (data) {
				data.forEach(report => {
					let instructorName = '';
					if (typeof report.Instructor__r !== 'undefined') {
						instructorName = report.Instructor__r.Name;
					} 
					let reportCopy = {
						Id: report.Id,
						Name: report.Name,
						Date__c: report.Date__c,
						Rating__c: report.Rating__c, 
						Review__c: report.Review__c, 
						ReviewType__c: report.ReviewType__c, 
						InstructorName: instructorName
					}
					reports.push(reportCopy); 
				});
				this.tripReports = reports;
			} 
		});
	}
	

}