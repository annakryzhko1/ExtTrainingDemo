Ext.define("Demo.view.EmployeeManagement", {
    extend: 'Ext.Panel',
    alias: 'widget.employeemanagement',
    layout: 'hbox',
    items:[{ xtype: "button",
    	action: "add",    	
    	text:"Add employee"
    },
    { xtype: "button",
    	action: "edit",    	
    	text:"Edit employee"
    }]
});