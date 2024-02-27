function compareDates(executionContext) {
    var formContext = executionContext.getFormContext();

    var taskStartDate = formContext.getAttribute("glmda_startdate").getvalue();
    var taskEndDate = formContext.getAttribute("glmda_enddate").getvalue();
    var LookupRelease = formContext.getAttribute("glmda_releaseid").getvalue();
    var ReleaseID = LookupRelease.id.replace("{", "").replace("}", "");
    Xrm.WebApi.retrieveRecord("glmda_projectrelease", ReleaseID, "?$select=glmda_startdate,glmda_enddate").then(
        function success(result) {
            console.log("Retrieved values: Name: " + result.name + ", Revenue: " + result.revenue);
            // perform operations on record retrieval
        },
        function (error) {
            console.log(error.message);
            // handle error conditions
        }
    );

    var releaseStartDate = result.glmda_startdate;
    var releaseEndDate = result.glmda_enddate;

    if (taskStartDate < releaseStartDate) {
        alert("Task start date cannot be less then release start date.");
    }
}
