public with sharing class ApexUtilities {
    
    @Auraenabled(cacheable=true)
    public static Integer getDaysUntilExpiration(){
        Datetime expDate = getOrgExpDate();
        Date currentDate = System.today();
        return currentDate.daysBetween(Date.valueof(expDate));
    }
    @AuraEnabled(cacheable=true)
    public static Datetime getOrgExpDate(){
        
        return [SELECT TrialExpirationDate FROM Organization LIMIT 1][0].TrialExpirationDate;
        
    }
}