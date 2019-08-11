public with sharing class CourseDeliveries {
   
   	@AuraEnabled(cacheable=true)
	public static List<Course_Delivery__c> getRecentDeliveries() {
		return [
			SELECT Id, Start_Date__c, Location__c, Attendee_Count__c, Course__r.Name
			FROM Course_Delivery__c
			WHERE Start_Date__c < TODAY
			ORDER BY Start_Date__c DESC
			LIMIT 3
		];
	}
}
