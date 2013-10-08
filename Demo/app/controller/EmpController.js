Ext.define('Demo.controller.EmpController', {
    extend: 'Ext.app.Controller',
    
    stores : ['Employees'],

	models : ['Employee'],

	views : ['EmployeeManagement', 'Employees']
});
