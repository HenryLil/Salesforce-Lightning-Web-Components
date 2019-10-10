import { LightningElement,wire,track } from 'lwc';
import getDaysUntilExpiration from "@salesforce/apex/ApexUtilities.getDaysUntilExpiration";

export default class TimeUntillOrgExp extends LightningElement {
    @track orgExpirationUntil
    @wire(getDaysUntilExpiration) orgExpOn({error,data}){
        if(data) {
            this.orgExpirationUntil = data;
            this.error = undefined;
        } else if (error) {
            this.error = error;
            this.orgExpirationUntil = undefined;
        }
    }
}