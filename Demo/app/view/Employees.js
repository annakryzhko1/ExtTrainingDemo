Ext.define("Demo.view.Employees", {
    extend: 'Ext.grid.Panel',
    alias : 'widget.employeesgrid',   
	store : 'Employees',
	title : 'Employees',	
	initComponent : function() {
		
		this.columns = [{
			header : 'Name',
			dataIndex : 'name',
			flex : 1
		}, {
			header : 'Email',
			dataIndex : 'email',
			flex : 1
		}];

		this.callParent(arguments);
	}
});
