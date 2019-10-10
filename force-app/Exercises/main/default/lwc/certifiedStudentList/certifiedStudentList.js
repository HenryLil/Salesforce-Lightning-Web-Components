import { LightningElement, api, track, wire } from "lwc";
import getCertifiedStudents from "@salesforce/apex/CertifiedStudentList.getCertifiedStudents";

export default class CertifiedStudentList extends LightningElement {
	@api certificationId = 0;
	@api certificationName = "";
	@track certifiedStudents;
    error;
    
	@wire(getCertifiedStudents, { certificationId: "$certificationId" }) wired_getCertifiedStudents(result) {
        this.certifiedStudents = [];
        if (result.data) {
        result.data.forEach(student => {
        this.certifiedStudents.push({
        certificationHeldId: student.Id,
        contactId: student.Certified_Professional__r.Id,
        name: student.Certified_Professional__r.Name,
        date: student.Date_Achieved__c,
        email: student.Certified_Professional__r.Email,
        phone: student.Certified_Professional__r.Phone
        });
        });
        } else if (result.error) {
        this.error = result.error;
        }
    }

    columnConfig = [
        {
        label: 'Name',
        fieldName: 'name',
        type: 'text'
        },
        {
        label: 'Date',
        fieldName: 'date',
        type: 'text'
        },
        {
        label: 'Email',
        fieldName: 'email',
        type: 'email'
        },
        {
        label: 'Phone',
        fieldName: 'phone',
        type: 'phone'
        }
    ];

}
