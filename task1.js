var isoutofdate = false;
function checkProjectReleaseDate(ExecutionContextObj) {
	var formContext = ExecutionContextObj.getFormContext();
	var projRelease = formContext.getAttribute("glmda_releaseid");
	if (projRelease != null) {
		var releaseIdValue = projRelease.getValue(); //Check for Lookup Value
		if (releaseIdValue != null) {
			var lookupEntityType = releaseIdValue[0].entityType; //To get EntityName 
			releaseId = releaseIdValue[0].id; // To get
			Xrm.WebApi.retrieveRecord("glmda_projectrelease", releaseId.replace(/[{}]/g, ""), "?$select=glmda_name,glmda_startdate").then(
				function checkdate(result) {
					var projReleaseStartdate = result.glmda_startdate;
					if (projReleaseStartdate != null) {
						var taskStartDate = formContext.getAttribute("glmda_startdate");
						if (taskStartDate != null) {
							var taskSdate = new Date(taskStartDate.getValue()).toLocaleDateString();
							var projRSdate = new Date(projReleaseStartdate).toLocaleDateString()

							if (taskSdate < projRSdate) {
								alert("Task start date cannot be less than release start date.");
								//formContext.preventDefault();
								//isoutofdate=true;
								return true;
							}
						}
					}
				}, function (error) {
					// handle error conditions
					Xrm.Utility.alertDialog("Error while retrieving theRecord : " + error.message, null);
				});
		}
	}
}
function onSave(ExecutionContextObj) {
	var saveevent = ExecutionContextObj.getEventArgs();

	//if(isoutofdate)
	//{
	//alert("Task start date cannot be less than release start date, Please change startdate and save again");
	//saveevent.preventDefault();
	//}
	var formContext = ExecutionContextObj.getFormContext();
	var statusReason = formContext.getAttribute('statuscode').getValue();
	if (statusReason == '475830000') {
		formContext.data.entity.attributes.forEach(function (attribute, index) {
			var control = Xrm.Page.getControl(attribute.getName());
			if (control) {
				control.setDisabled(true)
			}
		});
	}
}

function onload(ExecutionContextObj) {
	var formContext = ExecutionContextObj.getFormContext();
	var statusReason = formContext.getAttribute('statuscode').getValue();
	if (statusReason == '475830000') {
		formContext.data.entity.attributes.forEach(function (attribute, index) {
			var control = Xrm.Page.getControl(attribute.getName());
			if (control) {
				control.setDisabled(true)
			}
		});
	}
}
// JavaScript source code
