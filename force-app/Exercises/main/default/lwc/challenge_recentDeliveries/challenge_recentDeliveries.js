import { LightningElement, wire } from 'lwc';
//import { getRecentDeliveries } from "@salesforce/apex/CourseDeliveries.getRecentDeliveries";

export default class Challenge_recentDeliveries extends LightningElement {
   /* @wire(getRecentDeliveries, {})
    recentDeliveries({error,data}) {
        this.recentDeliveries = [];
        if (data) {
            data.forEach(delivery => {
                this.recentDeliveries.push({
                    value: delivery.Id,
                    label: `${delivery.Location__c} on ${delivery.Start_Date__c}  ${delivery.Attendee_Count__c} students`
                
                })
            })
            
        }
    } */
}