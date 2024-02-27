function MakeFiscalYear(executionContext){

var formContext = executionContext.getFormContext();

var valyear = formContext.getAttribute("ceera_year").getValue();
var valvalidfrom = formContext.getAttribute("ceera_validfrom").getValue();
var valvalidto = formContext.getAttribute("ceera_validto").getValue();

if (valyear != valvalidfrom.getFullYear()&& valyear !=valvalidto.getFullYear()){
Xrm.Utility.alertDialog("One of the dates should Contain Year Value; would you like to continue anyway",function(){}
    

);
}

}