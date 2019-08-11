import { LightningElement, api } from 'lwc';

import CITY_FIELD from '@salesforce/schema/Course_Delivery__c.City__c';
import COUNTRY_FIELD	 from '@salesforce/schema/Course_Delivery__c.Country__c';

export default class challenge_CourseDeliveryForm extends LightningElement {
	@api recordId;
	@api objectApiName;
	fields = [CITY_FIELD, COUNTRY_FIELD];
	
} 