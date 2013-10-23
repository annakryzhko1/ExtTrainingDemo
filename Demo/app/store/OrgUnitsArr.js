Ext.define('Demo.store.OrgUnitsArr', {
 extend: 'Ext.data.Store',
 model: 'Demo.model.OrgUnit',
 autoLoad: true,
    proxy: {
        type: 'ajax',
        api: {
        	read: 'data/orgunits.json'        	
    	},
        reader: {
            type: 'json',
            root: 'orgunits',
            successProperty: 'success'
        }
    }
});
