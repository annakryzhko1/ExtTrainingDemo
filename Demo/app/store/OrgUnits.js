Ext.define('Demo.store.OrgUnits', {
 extend: 'Ext.data.TreeStore',
 model: 'Demo.model.OrgUnit',
 root: {	name:'Organization',
    orgId: 1,
    managerId: 1,
    location:'task-folder',
    parentorgId: null,
    expanded: true,
	"children": [
		    {
		        text: 'Organization',
		        name:'Organization',
		        orgId: 2,
		        managerId: 1,
		        location:'task-folder',
		        parentOrgId: 1,
		        expanded: true,
		        "children": [{
		            name:'Department 1',
		        	orgId: 3,
		        	managerId: 1,
		        	location:'task-folder',
		        	parentOrgId: 2,
		        	leaf:true
		        	}
		]  
		}
	]
}
 /*autoLoad: true,
 proxy: {
        type: 'ajax',
        url: 'data/orgunits.json'
    }*/
});