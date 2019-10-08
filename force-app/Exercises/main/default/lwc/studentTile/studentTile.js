import { LightningElement, api } from "lwc";

export default class StudentTile extends LightningElement {
    @api selectedStudentId="";
	@api student = {
		Name: "Henry Lilleberg",
		PhotoUrl: "/services/images/photo/003B0FakePictId"
	};

	get tileSelected() {
		return (this.selectedStudentId===this.student.Id) ? "tile selected" : "tile";
	}
	studentClick() {
		const evt = new CustomEvent("studentselected", {
			detail: { studentId: this.student.Id }
		});
		this.dispatchEvent(evt);
	}
}
