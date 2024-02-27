// JavaScript source code

function AutoPopulateAge(executionContext) {
    var formContext = executionContext.getFormContext();

    var fieldDOb = formContext.getAttribute("new_employeedob").getValue();
    var currentDate = new Date();
    if (fieldDOb != undefined && fieldDOb != null) {
        var agedays = currentDate - fieldDOb;
        var ageYears = agedays / (1000*24*60*60* 365);
        formContext.getAttribute("new_age").setValue(ageYears);

    }
   

}
