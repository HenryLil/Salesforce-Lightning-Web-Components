public with sharing class ApexUtilities {
    
    @Auraenabled(cacheable=true)
    public static Integer getDaysUntilExpiration(){
        Datetime expDate = Datetime.newinstance(getOrgExpDate());
        Date currentDate = System.today();
        return currentDate.daysBetween(Date.valueof(expDate));
    }
    @AuraEnabled(cacheable=true)
    public static Long getOrgExpDate(){
        Datetime orgExp = [SELECT TrialExpirationDate FROM Organization LIMIT 1][0].TrialExpirationDate;
        
        return orgExp.getTime();
        
    }
}