Ext.define('Demo.controller.EmpController', {
    extend: 'Ext.app.Controller',
    
    stores : ['Employees', 'OrgUnitsArr'],

	models : ['Employee'],

	views : ['EmployeeManagement', 'Employees', 'EmployeeAdd'],
	
	refs: [{
         ref: 'organizationtree',
         selector: 'organizationtree'
     },
     {
         ref: 'employeesgrid',
         selector: 'employeesgrid'
              }],
	
	init: function() {
         this.listen({
             controller: {
                 '#OrgController': {
                    'unitChanged': this.onUnitChanged
                 }
             }
         });
         
         this.control({
                 'employeemanagement button[action=add]': {
					click : this.openAddEmployee
				},
				'employeemanagement button[action=edit]': {
					click : this.openEditEmployee
				},
				'employeeadd button[action=add]' : {
					click : this.addEmployee
				},
				'employeeadd button[action=save]' : {
					click : this.saveEmployee
				},
				'employeeadd button[action=cancel]' : {
					click : this.cancelEditEmployee
				},
		});
     },
     
     saveEmployee: function(button, e) {
     	var win = button.up('window'), form = win.down('form'), record = form.getRecord(), values = form.getValues();
		record.set(values);
		win.close();
		this.getEmployeesStore().sync();
     },
     
     addEmployee: function(button, e) {
     	var win = button.up('window'), form = win.down('form'), values = form.getValues();
     	this.getEmployeesStore().add(values) ;
     	
     },
     onUnitChanged: function (item) {  
     	var unitId =  item[0].internalId,
     	    store = this.getEmployeesStore();
     	    this.orgUnit = item[0];
		store.clearFilter(true);
		
		if (unitId !== 'all') {
			store.filter("orgId", new RegExp("^"+ unitId, "i"));
		}
     },
     
     getOrgUnitData: function() {
     	var orgTree = this.getOrganizationtree(), 
     		orgUnit = this.orgUnit;
     	if (!orgUnit) {
     		orgUnit = orgTree.getSelectionModel().getSelection()[0] || orgTree.getRootNode();     	
     	}
     	return orgUnit.data;
     },
     
     getSelectedEmployee: function() {
     	 return this.getEmployeesgrid().getView().getSelectionModel().getSelection()[0];
     },
     
     openAddEmployee : function() {
     	
		var view = Ext.widget('employeeadd'),
			form = view.down('form'),
			orgUnitData = this.getOrgUnitData();
		view.setTitle("Add Employee");
		view.down('button[action=add]').setVisible(true);
		view.down('button[action=save]').setVisible(false);
		form.down('combobox[name=orgId]').setValue(orgUnitData.id);
	},
	
	openEditEmployee : function() {
     	var employee = this.getSelectedEmployee();
     	if (!employee) {
     		return;
     	}
		var view = Ext.widget('employeeadd'),
			form = view.down('form'),
			orgUnitData = this.getOrgUnitData();
			
		view.setTitle("Edit Employee");
		view.down('button[action=add]').setVisible(false);
		view.down('button[action=save]').setVisible(true);
		
		view.down('form').loadRecord(employee);
	}
     
});
