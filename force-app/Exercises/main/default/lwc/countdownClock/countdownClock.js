import { LightningElement,wire,track } from 'lwc';
import getOrgExpDate from "@salesforce/apex/ApexUtilities.getOrgExpDate";

export default class TimeUntillOrgExp extends LightningElement {
    expDate;
    @track days
    @track hours
    @track minutes
    @track seconds
    now = new Date().getTime();
    connectedCallback() {
        // eslint-disable-next-line @lwc/lwc/no-async-operation
        setInterval(() => {this.calculateDistance()}, 1000);
    }

    @wire(getOrgExpDate) orgExpOn({error,data}){
        if(data) {
            this.expDate = data;
            this.error = undefined;
        } else if (error) {
            this.error = error;
            this.expDate = undefined;
            debugger;
        }
    }

    calculateDistance() {
        var distance = this.expDate-this.now;
        this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
        this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
    }
    
    
}