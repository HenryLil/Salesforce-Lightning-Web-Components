import { LightningElement, api, track, wire } from 'lwc';
import { getRecord, getFieldValue, getFieldDisplayValue } from 'lightning/uiRecordApi';
import FIELD_Course_Delivery__City from '@salesforce/schema/Course_Delivery__c.City__c';
import FIELD_Course_Delivery__Country from '@salesforce/schema/Course_Delivery__c.Country__c';
const fields = [FIELD_Course_Delivery__City, FIELD_Course_Delivery__Country];

export default class deliveryDetailMap extends LightningElement {
	@api recordId;
	@track name;
	@track mapMarkers = [];
	error;
	
	@wire(getRecord, { recordId: '$recordId', fields })
	wiredMap({ error, data }) {
		if (error) {
			this.error=error;
		} else if (data) {
			// Get Map data
			const City = this._getDisplayValue(data, FIELD_Course_Delivery__City);
			const Country = this._getDisplayValue(data, FIELD_Course_Delivery__Country);
			// Transform location data into map markers
			this.mapMarkers = [{
				location: { City, Country },
				description: `Coords: ${City}, ${Country}`
			}];
		}
	}

	_getDisplayValue(data, field) {
		return getFieldDisplayValue(data, field) ? getFieldDisplayValue(data, field) : getFieldValue(data, field);
	}
}
