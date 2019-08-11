import { LightningElement, wire } from 'lwc';
import getContacts from '@salesforce/apex/Contacts.getContacts';


export default class Challenge_contactList extends LightningElement {

	@wire(getContacts) contacts;

	columnConfig = [
		{
			label: 'Name',
			fieldName: 'Name',
			type: 'text'
		},
		{
			label: 'Email',
			fieldName: 'Email',
			type: 'email'
		},
		{
			label: 'Phone',
			fieldName: 'Phone',
			type: 'phone'
		}
	];

	
}