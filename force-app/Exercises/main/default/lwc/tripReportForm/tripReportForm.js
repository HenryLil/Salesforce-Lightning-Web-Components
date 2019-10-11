import { LightningElement } from 'lwc';
import Utils from 'c/utils'

export default class TripReportForm extends LightningElement {
    doSuccess() {
        Utils.showToast(
            this,
            'Transaction Complete',
            'Your Trip Report was Saved'
        );
    }
}