function StudentCountInContact(executionContext){

    var formContext = executionContext.getFormContext();
    
         Xrm.WebApi.retrieveMultipleRecords("new_student","?$select=ch_contact&$filter=_ch_contact_value=5531d753-95af-e711-a94e-000d3a11e605").then(
         function success(result) {
             if(result != null )
         
                 //console.log(result.value.length);
                 formContext.getAttribute("ch_count").setValue(result.value.length);
             },                  
             
         
         function (error) {
             console.log(error.message);
             
         }
     );}


