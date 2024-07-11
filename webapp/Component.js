/**
 * eslint-disable @sap/ui5-jsdocs/no-jsdoc
 */

sap.ui.define([
        "sap/ui/core/UIComponent",
        "sap/ui/Device",
        "ux402listdetail/model/models",
        "ux402listdetail/controller/ListSelector"
    ],
    function (UIComponent, Device, models, ListSelector) {
        "use strict";

        return UIComponent.extend("ux402listdetail.Component", {
            metadata: {
                manifest: "json"
            },

            /**
             * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
             * @public
             * @override
             */
            init: function () {
                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);
                
                // instantiation of the listselector
                this.oListSelector = new ListSelector();

                // enable routing
                this.getRouter().initialize();

                // set the device model
                this.setModel(models.createDeviceModel(), "device");

            }
        });
    }
);