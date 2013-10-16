Ext.define('Demo.controller.EmpController', {
    extend: 'Ext.app.Controller',
    
    stores : ['Employees'],

	models : ['Employee'],

	views : ['EmployeeManagement', 'Employees'],
	
	init: function() {
         this.listen({
             controller: {
                 '#OrgController': {
                    'unitChanged': this.onUnitChanged
                 }
             }
         });
     },
     
     onUnitChanged: function (item) {  
     	var unitId =  item[0].internalId  	
     	var store = this.getEmployeesStore();
		store.clearFilter(true);
		if (unitId !== 'all') {
			store.filter("orgId", new RegExp("^"+ unitId, "i"));
		}
     }
});
