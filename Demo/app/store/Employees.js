Ext.define('Demo.store.Employees', {
 extend: 'Ext.data.Store',
 model: 'Demo.model.Employee',
 autoLoad: true,
    proxy: {
        type: 'ajax',
        api: {
        	read: 'data/employees.json'        	
    	},
        reader: {
            type: 'json',
            root: 'employees',
            successProperty: 'success'
        }
    }
});
