import { LightningElement, track } from 'lwc';

export default class StudentBrowser extends LightningElement {
    @track studentList = [];

    constructor() {
        super();
        const studentNames = ['Rad', 'Stuart', 'Andres', 'Rahul', "Amit", "Simon"];
        studentNames.forEach((studentName, index) => {
          this.studentList.push(
            {
              'sobjectType' : 'Contact',
              'Name' : studentName,
              'PhotoUrl': '/services/images/photo/003B0FakePictId',
              'Id' : index
            }
          );
        })
      }
      
}