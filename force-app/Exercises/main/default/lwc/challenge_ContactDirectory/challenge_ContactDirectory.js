import { LightningElement, track, wire, api } from "lwc";
import getContacts from "@salesforce/apex/Contacts.getContacts";
const columns = [{ label: "Name", fieldName: "Name" }, { label: "Email", fieldName: "Email", type: "email" }, { label: "Phone", fieldName: "Phone", type: "phone" }];
export default class Challenge_ContactDirectory extends LightningElement {
	@track contacts = [];
	@track columns = columns;
	error;
	@api firstLetter = "";
	@wire(getContacts, { firstLetter: "$firstLetter" })
	myContacts({ error, data }) {
		if (data) {
			this.contacts = data;
			this.error = undefined;
		} else if (error) {
			this.error = error;
			this.data = undefined;
		}
	}
	alphabets = "abcdefghijklmnopqrstuvwxyz".split("");
	@track items = [];

	connectedCallback() {
		for (let i = 0; i < this.alphabets.length; i++) {
			this.items.push({
				id: i,
				label: this.alphabets[i],
				value: this.alphabets[i]
			});
		}
	}
	handleMenuSelect(event) {
		this.firstLetter = event.detail.value;
	}
}
