function DisplayContactType(executionContext){
    var formContext = executionContext.getFormContext();

    var contactOnFaculty = formContext.getAttribute("ch_contact").getValue();
    if (contactOnFaculty != null){
        var IdOnContact= contactOnFaculty[0].id.replace('{','').replace("}",'');
        Xrm.WebApi.retrieveRecord("contact", IdOnContact,"?$select=ch_contacttype").then(
        function success(result) {
            if(result != null)
            {
           var typeoFContact = result.reddy_type;
           if(typeoFContact != null && typeoFContact == 1)
           {
            formContext.getAttribute("ch_contacttype").setValue(1);

           }
           else if(typeoFContact != null && typeoFContact==2)
           {
            formContext.getAttribute("ch_contacttype").setValue(2);

           }
           else if(typeoFContact != null && typeoFContact==3)
           {
            formContext.getAttribute("ch_contacttype").setValue(3);
           }
           else{
               alert("nothing in the thing!!!");
           }
        }

        },
        function (error) {
            console.log(error.message);
            // handle error conditions
        }
    );
    }
}

function OnClickCertRibbonButton(primaryControl){

    var formContext = primaryControl;

    alert("your function yet to be written!!!!");
    var facultyName = formContext.getAttribute("new_name").getValue();

    formContext.getAttribute("pra_subject").setValue("CRM");
    formContext.getAttribute("new_section").setValue(2);
    }
