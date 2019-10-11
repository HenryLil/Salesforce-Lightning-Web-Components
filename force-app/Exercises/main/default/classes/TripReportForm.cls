public with sharing class TripReportForm {
	
	@AuraEnabled(cacheable=true)
	public static List < String > getReviewTypes() {
		List < String > options = new list < String > ();
		Schema.DescribeFieldResult fieldResult = TripReport__c.ReviewType__c.getDescribe();
		List < Schema.PicklistEntry > ple = fieldResult.getPicklistValues();
		for (Schema.PicklistEntry f: ple) {
			options.add(f.getLabel());
		}
		return options;
	}
	
}
