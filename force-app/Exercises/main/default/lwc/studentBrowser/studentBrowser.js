import { LightningElement, wire, track } from "lwc";
import getStudents from "@salesforce/apex/StudentBrowser.getStudents";

export default class StudentBrowser extends LightningElement {
	@track selectedDeliveryId = "";
	@track selectedInstructorId = "";
	@wire(getStudents, { instructorId: "$selectedInstructorId", courseDeliveryId: "$selectedDeliveryId" }) students;

	handleFilterChange(event) {
		this.selectedDeliveryId = event.detail.deliveryId;
		this.selectedInstructorId = event.detail.instructorId;
	}
}
