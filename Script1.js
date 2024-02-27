function updateContactVerified(executionContext) {
    var formContext = executionContext.getFormContext();

    var fieldcontactVerified = formContext.getControl("new_contactverified");
    var uniqueIdParam;

    if (formContext.data.attributes.parameter_verificationcode != null && formContext.data.attributes.parameter_verificationcode != undefined) {
        uniqueIdParam = formContext.data.attributes.parameter_verificationcode;
    }
    if (uniqueIdParam != undefined && uniqueIdParam != null) {
        formContext.getAttribute("new_contactverified").setValue("Yes");
    }
}
function setContactVerified(executionContext) {
    var formContext = executionContext.getFormContext();

    var fieldcontactVerified = formContext.getControl("cnu_contactuniquecode").getValue();
    var yesorNo = formContext.getControl("new_contactverified").getValue();

    if (yesorNo == "No" && (fieldcontactVerified == undefined || fieldcontactVerified == null) ) {
        var formatedid = formContext.data.entity.getId().replace('{', '').replace('}', '');
        formContext.getAttribute("new_contactverified").setValue("Yes");
        formContext.getAttribute("cnu_contactuniquecode").setValue(formatedid);
        }
    
}




function updateContactVerified(executionContext) {
    var formContext = executionContext.getFormContext();

    var fieldcontactVerified = formContext.getControl("new_contactverified");
    var uniqueIdParam;

    if (formContext.data.attributes.parameter_verificationcode != null && formContext.data.attributes.parameter_verificationcode != undefined) {
        uniqueIdParam = formContext.data.attributes.parameter_verificationcode;
    }
    if (uniqueIdParam != undefined && uniqueIdParam != null) {
        formContext.getAttribute("new_contactverified").setValue("Yes");
    }
}
function setContactVerified(executionContext) {
    var formContext = executionContext.getFormContext();

    var fieldcontactVerified = formContext.getControl("cnu_contactuniquecode");
    var yesorNo = formContext.getControl("new_contactverified").getValue();

    if (fieldcontactVerified != undefined && fieldcontactVerified != null) {
        var formatedid = formContext.data.entity.getId().replace('{', '').replace('}', '');
        if (fieldcontactVerified.getValue() == formatedid.toLowerCase() && yesorNo !== "Yes") {
            formContext.getAttribute("new_contactverified").setValue("Yes");
        }
    }
}