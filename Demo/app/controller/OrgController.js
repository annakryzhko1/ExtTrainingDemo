Ext.define('Demo.controller.OrgController', {
    extend: 'Ext.app.Controller',
    
    id: "OrgController",
    
    stores : ['OrgUnits'],

	models : ['OrgUnit'],

	views : ['Organizations'],
	
	init : function() {
				
		this.control({
			'organizationtree' : {
				selectionchange : this.onUnitChoose
			}
			});
	},
	
	onUnitChoose : function ( record, item, index, e) {
		console.log('orgcontroller unit changed')
		this.fireEvent('unitChanged', item);		
	}

	
});
