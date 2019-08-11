public with sharing class TripReportBrowser {
	@AuraEnabled
	public static List < TripReport__c > getAll() {
		return [
			SELECT Id, Name, Date__c, Rating__c, Review__c, ReviewType__c, Instructor__r.Name
			FROM TripReport__c
			ORDER BY Date__c DESC
		];
	}
}
