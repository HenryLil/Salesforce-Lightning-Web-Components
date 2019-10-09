import getRecentDeliveries from "@salesforce/apex/CourseDeliveries.getRecentDeliveries";
import { LightningElement, wire, track } from 'lwc';

export default class Challenge_recentDeliveries extends LightningElement {
    @track deliveries;
    @wire(getRecentDeliveries)
    recentDeliveries({error,data}) {
        this.deliveries = [];
        if (data) {
            this.deliveries = data;
            this.error = undefined;
        }else if (error){
            this.error = error;
            this.deliveries = undefined;
        }
    }
}