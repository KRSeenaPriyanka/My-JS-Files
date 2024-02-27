function OnLoad(executionContext){
    constants.formContext = executionContext.getFormContext();

}
function IsTutionNeeded(){
    formContext = constants.formContext;
    if(formContext.getAttribute("reddy_percentage").getValue()<=50){
        formContext.getAttribute("reddy_tutions").setRequiredLevel("required");
    }
    else {formContext.getAttribute("reddy_tutions").setRequiredLevel("none");}
}
function StudentCountInContact(){
    formContext = constants.formContext;
    var contactLookUp = formContext.getAttribute("ch_contact").getValue();
if(contactLookUp != null){
    contactId = contactLookUp[0].id.replace('{','').replace('}','');
    Xrm.WebApi.retrieveMultipleRecords("new_student","?$select=_ch_studentfromstudententityid_value&$filter=_ch_studentfromstudententityid_value eq " + contactId).then(
        function success(result) {

            if(result != null){
                var data = {
                    "ch_numberofstudents" : result.entities.length
                }
            }
            Xrm.WebApi.updateRecord("contact" ,contactId,data).then(
                function success(){
                        console.log("Record Updated");
                },
                function (error){
                    console.log(error.message);
                }
            )
           
        },
        function (error) {
            console.log(error.message);
           
        }


    );

}
}