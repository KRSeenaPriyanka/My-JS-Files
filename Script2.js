function HideOrShowSubSectionFeild(executionContext) {
    var formContext = executionContext.getFormContext();
    if (formContext.getAttribute("pra_section").getValue() == 166170000) {
        formContext.getControl("reddy_subsection").setVisible(true);
    }
    else {
        formContext.getControl("reddy_subsection").setVisible(false);
    }
}
________________________________________________________________________________
function LockOrUnlockScholoreship(executionContext) {
    var formContext = executionContext.getFormContext();
    if (formContext.getAttribute("reddy_percentage").getValue() < 50) {
        formContext.getControl("reddy_applysc").setDisabled(true);
    }
    else {
        formContext.getControl("reddy_applysc").setDisabled(false);
    }
}
_______________________________________________________
function HideOrShowSubSectionFeild(executionContext) {
    var formContext = executionContext.getFormContext();
    if (formContext.getAttribute("pra_section").getValue() == 166170000) {
        formContext.getControl("reddy_subsection").setVisible(true);
    }
    else {
        formContext.getControl("reddy_subsection").setVisible(false);
    }
}
_________________________________________________________
function LockOrUnlockScholoreship(executionContext) {
    var formContext = executionContext.getFormContext();
    if (formContext.getAttribute("reddy_percentage").getValue() < 50) {
        formContext.getControl("reddy_applysc").setDisabled(true);
        formContext.getAttribute("reddy_applysc").setValue(false);
    }
    else {
        formContext.getControl("reddy_applysc").setDisabled(false);
        formContext.getAttribute("reddy_applysc").setValue(true);
    }
}
__________________________________________________________________________
function SetRequiredTuition(executionContext) {
    var formContext = executionContext.getFormContext();
    if (formContext.getAttribute("reddy_percentage").getValue() < 50) {
        formContext.getAttribute("reddy_tutions").setRequiredLevel("required");
    }
    else {
        formContext.getAttribute("reddy_tutions").setRequiredLevel("none");
    }
}
___________________________________________________________________________
function LockOrUnlockBonus(executionContext) {
    var formContext = executionContext.getFormContext();
    if (formContext.getAttribute("ch_salary").getValue() > 5000) {
        formContext.getControl("ch_bonus").setDisabled(false);
    }
    else {
        formContext.getAttribute("ch_bonus").setValue(false);
        formContext.getControl("ch_bonus").setDisabled(true);
    }
}
_________________________________________________________________________________
function IsMarried(executionContext) {
    var formContext = executionContext.getFormContext();
    if (formContext.getAttribute("ch_married").getValue() == true) {
        formContext.getControl("ch_noofkids").setVisible(true);

        var noOfKids = formContext.getAttribute("ch_noofkids").getValue();

        if (noOfKids == 1) {
            formContext.getControl("ch_iskidboyorgirl").setVisible(true);
            formContext.getControl("ch_noofboys").setVisible(false);
            formContext.getControl("ch_noofgirls").setVisible(false);
        }
        else {
            formContext.getControl("ch_iskidboyorgirl").setVisible(false);
            if (noOfKids > 0) {
                formContext.getControl("ch_noofboys").setVisible(true);
                var noOfBoys = formContext.getAttribute("ch_noofboys").getValue();
                var noOfGirls = noOfKids - noOfBoys;
                if (noOfGirls > 0) {
                    formContext.getControl("ch_noofgirls").setVisible(true);
                }
                else {
                    formContext.getControl("ch_noofgirls").setVisible(false);
                }
                formContext.getAttribute("ch_noofgirls").setValue(noOfGirls);
            }
        }

    }
    else {
        formContext.getControl("ch_noofkids").setVisible(false);
        formContext.getControl("ch_iskidboyorgirl").setVisible(false);
        formContext.getControl("ch_noofboys").setVisible(false);
        formContext.getControl("ch_noofgirls").setVisible(false);
    }
}
________________________________________________________________________________
function DisplayName(executionContext) {
    var formContext = executionContext.getFormContext();
    var name = formContext.getAttribute("ch_employee").getValue();

    // console.log(name);
    formContext.getAttribute("ch_name").setValue(name);
}
________________________________________________________________________________
    function OperateAwardOption(executionContext) {
        var formContext = executionContext.getFormContext();

        if (formContext.getAttribute("ch_award").getValue() == 1) {

            formContext.getControl("ch_award").removeOption(2);
            formContext.getControl("ch_award").removeOption(3);
            formContext.getControl("ch_faculty").setVisible(false);
            formContext.getControl("ch_employeename1").setVisible(false);
        }
        else {
            if (formContext.getAttribute("ch_award").getValue() == 2) {

                formContext.getControl("ch_award").removeOption(1);
                formContext.getControl("ch_award").removeOption(3);
                formContext.getControl("ch_student").setVisible(false);
                formContext.getControl("ch_employeename1").setVisible(false);
            }
            else {
                if (formContext.getAttribute("ch_award").getValue() == 3) {

                    formContext.getControl("ch_award").removeOption(2);
                    formContext.getControl("ch_award").removeOption(1);
                    formContext.getControl("ch_faculty").setVisible(false);
                    formContext.getControl("ch_student").setVisible(false);
                }
            }
        }
    }
________________________________________________________________________________

    function HideOrShowFields(executionContext) {
        var formContext = executionContext.getFormContext();

        formContext.getControl("pra_faculty").setVisible(false);
        formContext.getControl("reddy_employees").setVisible(false);
        formContext.getControl("reddy_student").setVisible(false);
        formContext.getControl("reddy_facultyid").setVisible(false);
        formContext.getControl("reddy_studentid").setVisible(false);
        formContext.getControl("reddy_employeeid").setVisible(false);

        if (formContext.getAttribute("reddy_awards").getValue() == 416140000) {
            formContext.getControl("pra_faculty").setVisible(true);
            formContext.getControl("reddy_employees").setVisible(false);
            formContext.getControl("reddy_student").setVisible(false);
            formContext.getControl("reddy_facultyid").setVisible(true);
            formContext.getControl("reddy_studentid").setVisible(false);
            formContext.getControl("reddy_employeeid").setVisible(false);
        }
        else if (formContext.getAttribute("reddy_awards").getValue() == 416140001) {
            formContext.getControl("reddy_employees").setVisible(true);
            formContext.getControl("pra_faculty").setVisible(false);
            formContext.getControl("reddy_student").setVisible(false);
            formContext.getControl("reddy_facultyid").setVisible(false);
            formContext.getControl("reddy_studentid").setVisible(false);
            formContext.getControl("reddy_employeeid").setVisible(true);
        }
        else if (formContext.getAttribute("reddy_awards").getValue() == 416140002) {
            formContext.getControl("reddy_student").setVisible(true);
            formContext.getControl("pra_faculty").setVisible(false);
            formContext.getControl("pra_faculty").setVisible(false);
            formContext.getControl("reddy_studentid").setVisible(true);
            formContext.getControl("reddy_facultyid").setVisible(false);
            formContext.getControl("reddy_employeeid").setVisible(false);
        }

    }

________________________________________________________________________________

function PopulateEmpID(executionContext) {
    var formContext = executionContext.getFormContext();

    if (formContext.getAttribute("reddy_awards").getValue() == 416140002) {
        var student = formContext.getAttribute("reddy_student").getValue();
        if (student != null) {
            var studentID = student[0].id.replace('{', '').replace('}', '');
            Xrm.WebApi.retrieveRecord("new_student", studentID, "?$select=new_studentidauto").then(successCallback, errorCallback);

            function successCallback(result) {
                // console.log(result);
                if (result != null) {
                    formContext.getAttribute("reddy_studentid").setValue(result.new_studentidauto);
                }

            }
            function errorCallback(error) {
                console.log(error);
            }

        }

    }

}

________________________________________________________________________________

function RetreiveID(executionContext) {
    var formContext = executionContext.getFormContext();

    if (formContext.getAttribute("hbz_award").getValue() == 1) {
        var studentObject = formContext.getAttribute("hbz_student").getValue();

        if (studentObject != null) {





        }


    }
}
________________________________________________________________________________

function AwardsOperation(executionContext) {
    var formContext = executionContext.getFormContext();

    formContext.getControl("hbz_student").setVisible(false);
    formContext.getControl("hbz_student_hbz_id").setVisible(false);
    formContext.getControl("hbz_student").setVisible(false);
    formContext.getControl("hbz_student_hbz_id").setVisible(false);
    formContext.getControl("hbz_student").setVisible(false);
    formContext.getControl("hbz_student_hbz_id").setVisible(false);


    if (formContext.getAttribute("hbz_award").getValue() == 1) {
        formContext.getControl("hbz_student").setVisible(true);
        formContext.getControl("hbz_student_hbz_id").setVisible(true);
        formContext.getControl("hbz_employee").setVisible(false);
        formContext.getControl("hbz_employee_hbz_id").setVisible(false);
        formContext.getControl("hbz_faculty").setVisible(false);
        formContext.getControl("hbz_faculty_hbz_id").setVisible(false);
    }
    else if (formContext.getAttribute("hbz_award").getValue() == 2) {
        formContext.getControl("hbz_student").setVisible(false);
        formContext.getControl("hbz_student_hbz_id").setVisible(false);
        formContext.getControl("hbz_faculty").setVisible(true);
        formContext.getControl("hbz_faculty_hbz_id").setVisible(true);
        formContext.getControl("hbz_employee").setVisible(false);
        formContext.getControl("hbz_employee_hbz_id").setVisible(false);
    }
    else if (formContext.getAttribute("hbz_award").getValue() == 3) {
        formContext.getControl("hbz_student").setVisible(false);
        formContext.getControl("hbz_student_hbz_id").setVisible(false);
        formContext.getControl("hbz_employee").setVisible(true);
        formContext.getControl("hbz_employee_hbz_id").setVisible(true);
        formContext.getControl("hbz_faculty").setVisible(false);
        formContext.getControl("hbz_faculty_hbz_id").setVisible(false);
    }
}
________________________________________________________________________________

function RetreiveID(executionContext) {
    var formContext = executionContext.getFormContext();

    if (formContext.getAttribute("hbz_award").getValue() == 1) {
        var studentObject = formContext.getAttribute("hbz_student").getValue();

        if (studentObject != null) {
            var studentID = student[0].id.replace('{', '').replace('}', '');
            Xrm.WebApi.retrieveRecord("hbz_student", studentID, "?$select=hbz_student_hbz_id").then(successCallback, errorCallback);

            function successCallback(result) {
                // console.log(result);
                if (result != null) {
                    formContext.getAttribute("hbz_student_hbz_id").setValue(result.hbz_student_hbz_id);
                }

            }
            function errorCallback(error) {
                console.log(error);
            }

        }


    }
}
________________________________________________________________________________
// Plugins
________________________________________________________________________________
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Xrm.Sdk;

namespace PluginDemo {
    class MyFirstPlugin : IPlugin
    {
        public void Execute(IServiceProvider serviceProvider)
        {

            IPluginExecutionContext context = (IPluginExecutionContext)serviceProvider.GetService(typeof (IPluginExecutionContext));

            if (context.MessageName != "Create")
                return;

            if (context.InputParameters.Contains("Target") &&
                context.InputParameters["Target"] is Entity)
            {

                Entity entity = (Entity)context.InputParameters["Target"];

                if (entity.LogicalName != "account")
                    return;

                IOrganizationServiceFactory serviceFactory =
                    (IOrganizationServiceFactory)serviceProvider.GetService(typeof (IOrganizationServiceFactory));
                IOrganizationService service = serviceFactory.CreateOrganizationService(context.UserId);

                try {
                    // Main Plugin Logic Goes Here
                    if (context.Stage == 40) {
                        Entity updateAccount = new Entity("account");
                        updateAccount.Id = entity.Id;
                        updateAccount.Attributes["description"] = "Hello World";
                        service.Update(updateAccount);

                    };


                }

                catch (Exception ex)
                {
                    throw;
                }


            }
        }
    }
}

//same Plugin Operation for pre Operation
if (context.Stage == 20)
{
        entity.attributes.ad("description", "Hell world");
    }


//on creation of student: student is yes


//faculty and student and contact]
//faculty one contact
//student one contact       both   faculty entity svccontext and using where(f => f.contact_faculty && f.id = contactonstudent.id)
//yes update contact as both
//it
//student only update contact as student













