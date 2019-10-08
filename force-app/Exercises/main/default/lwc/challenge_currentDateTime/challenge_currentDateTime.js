import { LightningElement, track, api } from 'lwc';

export default class Challenge_currentDateTime extends LightningElement {
    @track timestamp = new Date();
    connectedCallback() {
        // eslint-disable-next-line @lwc/lwc/no-async-operation
        setInterval(() => {this.refresh()}, 100);
    }

    @api
    refresh() {
        this.timestamp = new Date();
    }
    
}