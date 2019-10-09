import { LightningElement, track, wire } from "lwc";
import { registerListener } from "c/pubsub";
import { CurrentPageReference } from "lightning/navigation";
import { getRecord, getFieldValue, getFieldDisplayValue } from "lightning/uiRecordApi";
import FIELD_Name from "@salesforce/schema/Contact.Name";
import FIELD_Description from "@salesforce/schema/Contact.Description";
import FIELD_Email from "@salesforce/schema/Contact.Email";
import FIELD_Phone from "@salesforce/schema/Contact.Phone";

const fields = [FIELD_Name, FIELD_Description, FIELD_Name, FIELD_Phone];

export default class StudentDetail extends LightningElement {
	@track studentId;
	@wire(CurrentPageReference) pageRef;
	@wire(getRecord, { recordId: "$studentId", fields }) wiredStudent;

	connectedCallback() {
		registerListener("studentChange", this.handleStudentChange, this);
	}

	handleStudentChange(event) {
		this.studentId = event.studentId;
	}

	get name() {
		return this._getDisplayValue(this.wiredStudent.data, FIELD_Name);
	}
	get description() {
		return this._getDisplayValue(this.wiredStudent.data, FIELD_Description);
	}
	get phone() {
		return this._getDisplayValue(this.wiredStudent.data, FIELD_Phone);
	}
	get email() {
		return this._getDisplayValue(this.wiredStudent.data, FIELD_Email);
	}
	_getDisplayValue(data, field) {
		return getFieldDisplayValue(data, field) ? getFieldDisplayValue(data, field) : getFieldValue(data, field);
	}
}
