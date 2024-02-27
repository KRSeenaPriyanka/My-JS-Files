/*
function FilterEntitlementType(executionContext) {
    
    // get the form context
    formContext = executionContext.getFormContext();
    formContext.getControl("hbz_entitlementtype").addPreSearch(function(){
       var fetchXMLFilter = "<filter type='and'><condition attribute='hbz_canbeused' operator='eq' value='1' /><condition attribute='statecode' operator='eq' value='0' /></filter>";
        formContext.getControl("hbz_entitlementtype").addCustomFilter(fetchXMLFilter, "hbz_entitlementtype");
    });
}
*/

function FilterEntitlementType(executionContext){
    formContext = executionContext.getFormContext();

    try{
        var fetchXMLFilter = `<fetch version="1.0" output-format="xml-platform" mapping="logical" distinct="false">
        <entity name="hbz_entitlementtype">
          <attribute name="hbz_entitlementtypeid" />
          <attribute name="hbz_name" />
          <attribute name="createdon" />
          <order attribute="hbz_name" descending="false" />
          <filter type="and">
            <condition attribute="hbz_canbeused" operator="eq" value="1" />
          </filter>
        </entity>
      </fetch>`
     var layoutXml = `<grid name='resultset' object='10716' jump='hbz_name' select='1' icon='1' preview='1'><row name='result' id='hbz_entitlementtypeid'><cell name='hbz_name' width='300' /><cell name='createdon' width='125' /></row></grid>`

    formContext.getControl("hbz_entitlementtype").addCustomView("A444E7FD-53D2-EB11-BACC-000D3BC9D895", "hbz_entitlementtype", "viewDisplayName", fetchXMLFilter, layoutXml, true);

    }

    catch(ex){
        console.log(ex);

    }
    

    
}