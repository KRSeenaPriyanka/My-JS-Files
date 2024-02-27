async function ValidateExecute(selectedItems){
var selectedItem = selectedItems[0];

const result = await Xrm.WebApi.retrieveRecord("cc_eventworkflow", selectedItem.Id, "?$select=_cc_priority_value,cc_status");
var priorityID = result["_cc_priority_value"];
var status = result["cc_status"];
if(status != undefined && status != null ){
if(status == 948120000){
    return false;
}
else{
if(priorityID != undefined && priorityID != null){
    var result1 = await Xrm.WebApi.retrieveRecord("cc_eventworkflow", priorityID, "?$select=cc_status");
var finalStatus = result1["cc_status"];
if(finalStatus!= undefined && finalStatus != null){
    if(finalStatus == 	948120000){
        return true;
    }else return false;
}

}
else{
    return true;
}
}
}
return true;
}

function onClickExecute(selectedItems){
    var selectedItem = selectedItems[0];
    var data={
        "cc_status" : 948120000
    }
    Xrm.WebApi.updateRecord("cc_eventworkflow", selectedItem.Id, data);   
    Xrm.Page.data.refresh(true); 
}

function onClickReject(selectedItems){
    var selectedItem = selectedItems[0];
    var data={
        "cc_status" : 948120002
    }
    Xrm.WebApi.updateRecord("cc_eventworkflow", selectedItem.Id, data); 
    Xrm.Page.data.refresh(true);   
}


function FilterPriority21(executionContext){
    var formContext = executionContext.getFormContext();
    var lookupPriority = formContext.getControl("cc_priority");
    var fetchXml =" <filter type='and'><condition attribute='cc_eventid' operator='eq' value='520a0d46-b94a-ec11-8f8e-6045bd733dc6' /></filter>";
     lookupPriority.addPreSearch(function () {
    lookupPriority.addCustomFilter(fetchXml);
       });

}

