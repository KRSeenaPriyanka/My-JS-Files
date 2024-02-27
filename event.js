function DisplayStudent(executionContext){
    var formContext = executionContext.getFormContext();
    formContext.getControl("hbz_studentname").setVisible(false);
    var buttonStudentValue = formContext.getAttribute("hbz_studentbutton").getValue();
if(buttonStudentValue == false){
    formContext.getControl("hbz_studentname").setVisible(false);
    formContext.getAttribute("hbz_studentname").setValue(null);
}
else{
   formContext.getControl("hbz_studentname").setVisible(true);
}
}
function CountDownDays(executionContext){
var formContext = executionContext.getFormContext();
var fieldStartdate = formContext.getAttribute("hbz_startdate").getValue();
var fieldEnddate = formContext.getAttribute("hbz_enddate").getValue();
var currentDate = new Date();
var diffms = fieldStartdate - currentDate;
var diffdays = diffms/(24*60*60*1000);
if(diffdays >0){
    formContext.getAttribute("hbz_countdown").setValue(diffdays+1);
}
else{
    formContext.getAttribute("hbz_countdown").setValue(0);
}
if(fieldStartdate > fieldEnddate){
    formContext.getControl("hbz_startdate").setNotification("Start Date cannot be less than end date");
}
else{
    formContext.getControl("hbz_startdate").clearNotification();
}
}
function DisplayLocation(executionContext){
    var formContext = executionContext.getFormContext();

    var fieldCourseFormat = formContext.getAttribute("hbz_courseformat").getValue();

    if(fieldCourseFormat == 861500001){
        formContext.getControl("hbz_selectlocation").setVisible(true);
    }
    else {
        formContext.getControl("hbz_selectlocation").setVisible(false);  
        formContext.getControl("hbz_selectlocation").getAttribute().setValue(null); 

    }
}
function retrievemultiple(executionContext){
    var formContext = executionContext.getFormContext();

    var fieldstudent = formContext.getAttribute("hbz_studentid").getValue();
    var studentname =  fieldstudent[0].name;

    Xrm.WebApi.retrieveMultipleRecords('hbz_student', "?$select=hbz_email&$filter=tb_name eq " + studentname).then(
                function success(result) {
                    for (var i = 0; i < result.entities.length; i++) {
                        console.log(result.entities[i]);
                        alert("done");
                    }                    
                    // perform additional operations on retrieved records
                },
                function (error) {
                    console.log(error.message);
                    // handle error conditions
                }
            );




}
function DisplayFunctionality(executionContext){
    var formContext = executionContext.getFormContext();

    var selectedOption = formContext.getAttribute("hbz_funtionality").getValue();
    formContext.getControl("hbz_displayemail").setVisible(false);
    formContext.getControl("hbz_selectstudent").setVisible(false);

    if(selectedOption == 1){
     //create
      formContext.getAttribute("hbz_function").setValue("Create");
       CreateStudent(executionContext);

    }
    else if (selectedOption == 2){
        formContext.getAttribute("hbz_function").setValue("Update");
        formContext.getControl("hbz_selectstudent").setVisible(true);
        UpdateStudent(executionContext);
        //update
    }
    else if (selectedOption == 3){
        formContext.getAttribute("hbz_function").setValue("Retrieve Single");
        formContext.getControl("hbz_displayemail").setVisible(true);
        formContext.getControl("hbz_selectstudent").setVisible(true);
        
        // €Retrive Single
    }
    else if (selectedOption == 4){
        formContext.getAttribute("hbz_function").setValue("Retrieve Multiple");
        formContext.getControl("hbz_displayemail").setVisible(true);
        formContext.getControl("hbz_selectstudent").setVisible(true);
        //Retrive Multiple
    }
    else if (selectedOption == 5){
        //Delete
        formContext.getAttribute("hbz_function").setValue("Delete");
        formContext.getControl("hbz_selectstudent").setVisible(true); 
        var selectedStudent = formContext.getAttribute("hbz_selectstudent").getValue();
        var studentid = selectedStudent[0].id.replace("{","").replace("}","");
        Xrm.WebApi.deleteRecord("hbz_student", studentid).then(
            function success(result) {
                console.log("Account deleted");
                alert("Deleted");
                // perform operations on record deletion
            },
            function (error) {
                console.log(error.message);
                // handle error conditions
            }
        );
    }
}
function CreateStudent(executionContext){
        debugger;
        var formContext = executionContext.getFormContext();
        var name = formContext.getAttribute("hbz_nameontherecord").getValue();

        var data =
    {
        "hbz_name": name,
                
    }
    Xrm.WebApi.createRecord("hbz_student", data).then(
        function success(result) {
            console.log("Account created with ID: " + result.id);
            alert("created")
            // perform operations on record creation
        }
       
    );
}
function UpdateStudent(executionContext){

        var formContext = executionContext.getFormContext();
        
        var fieldStudentSelected = formContext.getAttribute("hbz_selectstudent").getValue();
        var fieldStudentSelectedId = fieldStudentSelected[0].id.replace("{","").replace("}","");
        var newName = formContext.getAttribute("hbz_nameontherecord").getValue();

        // define the data to update a record
        var data =
        {
           "hbz_name": newName
        }
           // update the record
        Xrm.WebApi.updateRecord("hbz_student", fieldStudentSelectedId, data).then(
           function success(result) {
               console.log("Account updated");
               alert("record updated");
    
            },
           function (error) {
               console.log(error.message);
            }
        );
}

function HideOnLoad(executionContext){
    var formContext = executionContext.getFormContext();

   var fieldFunction = formContext.getControl("cc_funciton");
   var fieldSelectEntity = formContext.getControl("cc_selectentity");
   var fieldSelectEvent = formContext.getControl("cc_selectevent");
   var fieldselectWorkflow = formContext.getControl("cc_selectworkflow");
   var fieldEntityName = formContext.getControl("cc_entityname");
   var fieldConfirmation = formContext.getControl("cc_confirmation");
   var fieldFunctionality1 = formContext.getControl("cc_functionality");

   fieldFunction.setVisible(false);
   fieldSelectEntity.setVisible(false);
   fieldSelectEvent.setVisible(false);
   fieldselectWorkflow.setVisible(false);
   fieldEntityName.setVisible(false);
   fieldConfirmation.setVisible(false);

   formContext.getAttribute("cc_functionality").setValue(null);
   fieldFunction.getAttribute().setValue(null);
   fieldSelectEntity.getAttribute().setValue(null);
   fieldSelectEvent.getAttribute().setValue(null);
   fieldEntityName.getAttribute().setValue(null);
   fieldConfirmation.getAttribute().setValue(false);
   formContext.getControl("cc_selectworkflow").getAttribute().setValue(null);
        
}

function ValidateFunctionality(executionContext){
    debugger;
    
   var formContext = executionContext.getFormContext();

   var fieldFunction = formContext.getControl("cc_funciton");
   var fieldSelectEntity = formContext.getControl("cc_selectentity");
   var fieldSelectEvent = formContext.getControl("cc_selectevent");
   var fieldselectWorkflow = formContext.getControl("cc_selectworkflow");
   var fieldEntityName = formContext.getControl("cc_entityname");
   var fieldConfirmation = formContext.getControl("cc_confirmation");
   var fieldFunctionality1 = formContext.getControl("cc_functionality");


    if( fieldFunctionality1 != undefined && fieldFunctionality1 != null){

        var fieldFunctionality = fieldFunctionality1.getAttribute().getValue();
        if(fieldFunctionality == 1){
            //create Function
            fieldFunction.getAttribute().setValue("Create");
            fieldFunction.setVisible(true);
            fieldSelectEntity.setVisible(true);
            fieldEntityName.setVisible(true);
            fieldConfirmation.setVisible(true);

            if(fieldSelectEntity != undefined && fieldSelectEntity != null){
                if(fieldConfirmation.getAttribute().getValue()== true){
                CreateRecordFunction(executionContext);
                }
            }
           
            
        }else if(fieldFunctionality == 2){
              //Update Function

              fieldFunction.getAttribute().setValue("Update");
              fieldFunction.setVisible(true);
              fieldSelectEntity.setVisible(true);
              fieldSelectEvent.setVisible(false);
              fieldselectWorkflow.setVisible(true);
              fieldEntityName.setVisible(true);
              fieldConfirmation.setVisible(true);

              formContext.getAttribute("cc_functionality").setValue(null);
              fieldFunction.getAttribute().setValue(null);
              fieldSelectEntity.getAttribute().setValue(null);
              fieldselectWorkflow.getAttribute().setValue(null);
              fieldEntityName.getAttribute().setValue(null);
              fieldConfirmation.getAttribute().setValue(false);

              var selectWorkflow = formContext.getAttribute("cc_selectworkflow").getValue();
              if( selectWorkflow != undefined && selectWorkflow != null ){
                    var selectworkflowid = selectWorkflow[0].id.replace("{","").replace("}","");
                     var fieldEntityName = formContext.getAttribute("cc_entityname").getValue();

                            // define the data to update a record
                           var data =
                                    {
                                    "cc_name":fieldEntityName ,
                                    "cc_status": 948120001
                                    }
                            // update the record
                            Xrm.WebApi.updateRecord("cc_eventworkflow", selectworkflowid, data).then(
                                    function success(result) {
                                        console.log("Account updated");
                                        // perform operations on record update
                                        alert("record Updated");
                                        Xrm.Page.data.refresh(true);  
                                      
                                    },
                                    function (error) {
                                        console.log(error.message);
                                        // handle error conditions
                                    }
                                );

                                }      

                
           }



           
        }else if(fieldFunctionality == 3){
            //Delete Function
            fieldFunction.getAttribute().setValue("Delete");
            fieldFunction.setVisible(true);
           fieldSelectEntity.setVisible(true);
             fieldSelectEvent.setVisible(false);
           fieldselectWorkflow.setVisible(true);
           fieldEntityName.setVisible(false);
           fieldConfirmation.setVisible(true);
           if(fieldselectWorkflow != undefined && fieldselectWorkflow != null)
           {
                 if(fieldConfirmation.getAttribute().getValue()== true)
                 {
                  DeleteRecord(executionContext);
                 }
           } 
          
        }else if(fieldFunctionality == 4){
            //Retrieve Function
        }else if(fieldFunctionality == 5){
            //Retrieve Multiple Function
        }
}
     


function CreateRecordFunction(executionContext){
debugger;
    var formContext = executionContext.getFormContext();

    var selectedEntity = formContext.getAttribute("cc_selectentity").getValue();
    var fieldEntityName = formContext.getAttribute("cc_entityname").getValue();

    if( selectedEntity != undefined && selectedEntity != null ){
        if(selectedEntity ==1 ){
            var entityName = "cc_eventworkflow";
        }
    }
if(fieldEntityName != undefined && fieldEntityName != null){
    // define the data to create new account
var data =
{
    "cc_name":fieldEntityName ,
    "cc_status": 948120001
    
}

// create account record
Xrm.WebApi.createRecord(entityName, data).then(
function success(result) {
    console.log("Account created with ID: " + result.id);
    alert("Record Created");
    Xrm.Page.data.refresh(true);   
    // perform operations on record creation
},
function (error) {
    console.log(error.message);
    // handle error conditions
}
);

}

}

function DeleteRecord(executionContext){
    var formContext = executionContext.getFormContext();
    var selectWorkflow = formContext.getAttribute("cc_selectworkflow").getValue();
    if(selectWorkflow != undefined &&  selectWorkflow != null){
       var selectworkflowid = selectWorkflow[0].id.replace("{","").replace("}","");
      Xrm.WebApi.deleteRecord("cc_eventworkflow",selectworkflowid ).then(
        function success(result) {
            console.log("Account deleted");
            alert(" Record Deleted");
            Xrm.Page.data.refresh(true);   
            // perform operations on record deletion
        },
        function (error) {
            console.log(error.message);
            // handle error conditions
        }
      );
     
    }else return null;
}


function RetrieveFields(executionContext){

    var formContext = executionContext.getFormContext();

    formContext.getControl("cc_selectevent").setVisible(false);

    var fieldFunctionality = formContext.getAttribute("cc_functionality").getValue();
    if(fieldFunctionality != undefined && fieldFunctionality != null){
        if(fieldFunctionality == 4){
        formContext.getControl("cc_funciton").setVisible(true);
        formContext.getControl("cc_selectentity").setVisible(true);
        formContext.getAttribute("cc_funciton").setValue("Retrieve");
        
        formContext.getControl("cc_selectworkflow").setVisible(true);
        formContext.getControl("cc_confirmation").setVisible(true);

        

    var fieldSelectEntity = formContext.getAttribute("cc_selectentity").getValue();
    if(fieldSelectEntity != undefined && fieldSelectEntity != null){

         formContext.getControl("cc_selectworkflow").setVisible(true)
        var fieldselectWorkflow = formContext.getAttribute("cc_selectworkflow").getValue();
        if(fieldselectWorkflow != undefined && fieldselectWorkflow != null){

            var fieldConfirmation = formContext.getAttribute("cc_confirmation").getValue();
            if(fieldConfirmation == true){
                var FieldName = fieldselectWorkflow[0].name;
            var entityId = fieldselectWorkflow[0].id.replace("{","").replace("}","");
            var entityName = fieldselectWorkflow[0].entityType; 
            console.log(FieldName +"   " + entityId + "  " + entityName);

            Xrm.WebApi.retrieveRecord(entityName, entityId, "?$select=cc_name,cc_startdate").then(
                function success(result) {
                    if(result != undefined && result != null){
                        formContext.getControl("cc_entityname").setVisible(true);
                        console.log(result.cc_startdate);
                       formContext.getAttribute("cc_entityname").setValue(result.cc_startdate.toString());
                     
                    }
                   // console.log("Retrieved values: Name: " + result.name + ", Revenue: " + result.revenue);
                    // perform operations on record retrieval
                    alert("retrieved");
                },
                function (error) {
                    console.log(error.message);
                    // handle error conditions
                }
            );

            }
            
        }

    }}
}
}


function retrieveMultipleWorkflows(executionContext){

    var formContext = executionContext.getFormContext();
    

    var fieldFunctionality = formContext.getAttribute("cc_functionality").getValue();
    if(fieldFunctionality != undefined && fieldFunctionality != null){
        formContext.getControl("cc_funciton").setVisible(true);
        if(fieldFunctionality == 5){
          formContext.getAttribute("cc_funciton").setValue("RetrieveMultiple");
          formContext.getControl("cc_selectentity").setVisible(true);
          formContext.getControl("cc_selectevent").setVisible(true);
          formContext.getControl("cc_confirmation").setVisible(true);

          var fieldSelectEntity = formContext.getAttribute("cc_selectentity").getValue();
          if(fieldSelectEntity == 1){
              var entityName = "cc_eventworkflow";
          }
          if(fieldSelectEntity != undefined && fieldSelectEntity != null){
            var fieldSelectEvent = formContext.getAttribute("cc_selectevent").getValue();
            if(fieldSelectEvent != undefined && fieldSelectEvent != null){
                formContext.getControl("cc_confirmation").setVisible(true);
                var fieldConfirmation = formContext.getAttribute("cc_confirmation").getValue();
                if(fieldConfirmation == true){
                             
                   
                    var eventId = fieldSelectEvent[0].id.replace("{","").replace("}","");
                   
                    Xrm.WebApi.retrieveMultipleRecords(entityName, "?$select=cc_name&$filter=_cc_eventid_value eq " + eventId ).then(
                        function success(result) {
                            for (var i = 0; i < result.entities.length; i++) {
                                console.log(result.entities.length);
                                var displayname = result.entities[i].cc_name;
                                console.log(result.entities[i].cc_name);
                            }  
                            var displayname = result.entities[0].cc_name;
                                formContext.getControl("cc_entityname").setVisible(true);
                                formContext.getAttribute("cc_entityname").setValue(displayname); 
                            
                            
                            // perform additional operations on retrieved records
                        },
                        function (error) {
                            console.log(error.message);
                            // handle error conditions
                        }
                    );
                }


            }
  


          }

        }}
    

    

}


