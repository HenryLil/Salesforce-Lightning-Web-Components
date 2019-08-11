import { LightningElement, wire } from 'lwc';
import getRecentDeliveries from '@salesforce/apex/CourseDeliveries.getRecentDeliveries';

export default class Challenge_upcomingDeliveries extends LightningElement {
	@wire(getRecentDeliveries) deliveries;

}