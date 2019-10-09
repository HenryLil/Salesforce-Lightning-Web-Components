import { LightningElement, wire, track } from "lwc";
import getStudents from "@salesforce/apex/StudentBrowser.getStudents";
import { fireEvent } from "c/pubsub";
import { CurrentPageReference } from "lightning/navigation";

export default class StudentBrowser extends LightningElement {
	@track selectedDeliveryId = "";
	@track selectedInstructorId = "";
	@wire(getStudents, { instructorId: "$selectedInstructorId", courseDeliveryId: "$selectedDeliveryId" }) students;
	@wire(CurrentPageReference) pageRef;

	handleFilterChange(event) {
		this.selectedDeliveryId = event.detail.deliveryId;
		this.selectedInstructorId = event.detail.instructorId;
	}
	
	handleStudentSelected(event) {
		const studentId = event.detail.studentId;
		this.updateSelectedStudent(studentId);
	}

	updateSelectedStudent(studentId) {
		fireEvent(this.pageRef, 'studentChange', {studentId});
	}
}
