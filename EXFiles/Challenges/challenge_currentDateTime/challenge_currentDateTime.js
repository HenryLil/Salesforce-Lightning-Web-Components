import { LightningElement, track } from 'lwc';

export default class Challenge_dateTime extends LightningElement {
	@track currentDate = new Date();
	updateDate() {
		this.currentDate = new Date();
	}
	
	/* 
	
	Want the timer to update itself? Declare a setInterval in the connectedCallback() lifecycle event. 
	connectedCallback() {
		// eslint-disable-next-line @lwc/lwc/no-async-operation
		setInterval(() => {
			this.currentDate = new Date();
		}, 1000);
	}

	ES6 TRIVIA: 
	The following, which doesn't use an arrow function, does not cause the date/time to update on the screen
	Can you figure out why, and come up with a possible fix?

	connectedCallback() {
		// eslint-disable-next-line @lwc/lwc/no-async-operation
		setInterval( function() {
			this.currentDate = new Date();
		}, 1000);
	}
	*/
	
}