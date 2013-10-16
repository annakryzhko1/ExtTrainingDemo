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
			header : 'Age',
			dataIndex : 'age',
			flex : 1
		}, {
			header : 'Phone',
			dataIndex : 'phone',
			flex : 1
		}, {
			header : 'Age',
			dataIndex : 'age',
			flex : 1
		}, {
			header : 'Married',
			dataIndex : 'married',
			flex : 1
		}];

		this.callParent(arguments);
	}
});
