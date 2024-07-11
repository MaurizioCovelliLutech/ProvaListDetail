
sap.ui.define(
    [
        "sap/ui/core/mvc/Controller",
        "sap/ui/model/json/JSONModel"
    ],
    function(BaseController) {
      "use strict";
  
      return BaseController.extend("ux402listdetail.controller.App", {
        onInit: function() {

          var oViewModel = new JSONModel({
          layout : "OneColumn"
  });
 
          this.getView().setModel(oViewModel, "mainView");
        }
      });
    }
  );
  