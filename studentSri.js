function MultipleRecords(executionContext) {
    var formContext = executionContext.getFormContext();

    Xrm.WebApi.retrieveMultipleRecords("new_student", "?$select=_reddy_accounts_value&$filter=_reddy_accounts_value eq a56b3f4b-1be7-e611-8101-e0071b6af231").then(successCallback, errorCallback);

    function successCallback(result) {
        // console.log(result);
        if (result != null) {
            formContext.getAttribute("reddy_studentcount").setValue(result.entities.length);
            var data =
            {
                "reddy_noofstudents": result.entities.length
            }
            Xrm.WebApi.updateRecord("account", "a56b3f4b-1be7-e611-8101-e0071b6af231", data).then(
                function success() {
                    console.log("Account updated");
                },
                function errorCallback(error) {
                    console.log(error.message);
                }
            );
        }
}
}