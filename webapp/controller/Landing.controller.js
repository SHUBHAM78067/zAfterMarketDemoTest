sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function(Controller, Filter, FilterOperator) {
	"use strict";

	return Controller.extend("zAfterMarket.controller.Landing", {
		
		onPressProceed: function(oEvent) {
			
			
			
			
			
			
			
			
		// 	debugger;

		// 	// build filter array
		// 	var aFilter = [];

		// 	var oComboBox = this.getView().byId("ComboBox").getSelectedKey();

		// 	var oMultiComboBox1 = this.getView().byId("MultiComboBox1").getSelectedKeys();
		// 	var oMultiComboBox2 = this.getView().byId("MultiComboBox2").getSelectedKeys();
		// 	aFilter.push(new Filter("A0PLANT__ZREGNGRP", FilterOperator.EQ, oComboBox));

		// 	for (var i = 0; i < oMultiComboBox1.length; i++) {
		// 		aFilter.push(new Filter("A0PLANT__0REGION", FilterOperator.EQ, oMultiComboBox1[i]));
		// 	}

		// 	for (var i = 0; i < oMultiComboBox2.length; i++) {
		// 		aFilter.push(new Filter("A0PLANT", FilterOperator.EQ, oMultiComboBox2[i]));
		// 	}

		// 	var oModel = this.getView().getModel("data3");

		// 	oModel.read("/ZSER_CP01_Q0001(ZV_MONTH='2.2023')/Results", {
		// 		filters: aFilter,
		// 		success: function(oData, response) {
		// 			debugger;
		// 			// Code to handle the success case

		// 			var oTabModel = new sap.ui.model.json.JSONModel(oData);
		// 			this.getView().byId("idEmpTab").setModel(oTabModel);
		// 		}.bind(this),
		// 		error: function(oError) {
		// 			debugger;
		// 			// Code to handle the error case
		// 		}
		// 	});

		}

	});
});