function StudentCountInContact(executionContext){
    var formContext = executionContext.getFormContext();

    var contactLookup = formContext.getAttribute("ch_contactlookup").getValue(); 

    if(contactLookup != null){

        var contactID = contactLookup[0].id.replace( '{','' ).replace('}','');
        Xrm.WebApi.retrieveMultipleRecords("ch_studentlookup","?$select=_ch_contactlookup_value&$filter=_ch_contactlookup_value eq " + contactID).then(
            function success(result) {
                if(result != null )
                     {
                           //console.log(result.value.length);
                    //formContext.getAttribute("ch_count").setValue(result.entities.length);
                    formContext.getAttribute("ch_count").setValue(result.entities.length);
                    var data =
                    {
                        "ch_numberofstudents" : result.entities.length
                    }
                    // update the record
                    Xrm.WebApi.updateRecord("contact", contactID, data).then(
                    function success() {
                        console.log("Account updated");
                        // perform operations on record update
                    },
                    function (error) {
                        console.log(error.message);
                        // handle error conditions
                    }
                    );
                      }
                      
                     },              
                
            
            function (error) {
                console.log(error.message);
                
            }
        );

    }
    
          

        }


/* function UpdateStudentCount(executionContext){
    
     var formContext = executionContext.getFormContext();
    //var count = formContext.getAttribute("ch_count").getValue();

    Xrm.WebApi.retrieveRecord("ch_studentlookup", "ch_studentlookupid", "?$select=ch_count").then(
        function success(result) {
            numberOfStudents = 5;
            // perform operations on record retrieval
        },
        function (error) {
            console.log(error.message);
            // handle error conditions
        }
    );

var data =
{
    "ch_numberofstudents" : numberOfStudents
}
// update the record
Xrm.WebApi.updateRecord("contact", "862c7f0c-41d4-eb11-bacc-002248210631", data).then(
function success() {
    console.log("Account updated");
    // perform operations on record update
},
function (error) {
    console.log(error.message);
    // handle error conditions
}
);

}
}*/

function AccountsNoOfRecordsDisplay(executionContext){

 var formContext= executionContext.getFormContext();

    Xrm.WebApi.retrieveMultipleRecords("Account","?$select=name").then(
        function success(result) {
            if(result != null )
                 
                      
                formContext.getAttribute("ch_noofrecords").setValue(result.entities.length);
               /* var data =
                {
                    "ch_numberofstudents" : result.entities.length
                }
                // update the record
                Xrm.WebApi.updateRecord("contact", "862c7f0c-41d4-eb11-bacc-002248210631", data).then(
                function success() {
                    console.log("Account updated");
                    // perform operations on record update
                },
                function (error) {
                    console.log(error.message);
                    // handle error conditions
                }
                );
                  }
                  else alert(" there is no record in this entity")
                 },              
*/
                },    
        
        function (error) {
            console.log(error.message);
            
        }
    );
    }