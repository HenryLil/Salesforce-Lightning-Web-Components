import { LightningElement, api, track } from "lwc";

export default class StudentTiles extends LightningElement {
	@api studentList = [];
	@track selectedStudentId = "";

	handleStudentSelected(event) {
		this.selectedStudentId = event.detail.studentId;
	}
}
