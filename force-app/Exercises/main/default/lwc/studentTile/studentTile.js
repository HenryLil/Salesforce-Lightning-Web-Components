import { LightningElement, api} from 'lwc';

export default class StudentTile extends LightningElement {
    @api student = {
        Name: 'Henry Lilleberg',
        PhotoUrl: '/services/images/photo/003B0FakePictId',
    };
    @api selected = false;
    
    get tileSelected() {
        return this.selected ? "tile selected" : "tile";
    }
    studentClick() {
        alert(this.student.Name);
    }
}