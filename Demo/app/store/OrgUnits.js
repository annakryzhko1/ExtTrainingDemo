Ext.define('Demo.store.OrgUnits', {
 extend: 'Ext.data.TreeStore',
 model: 'Demo.model.OrgUnit',
 root:  {
		name: 'Company',
		id: "all",
		children: [{
			name: 'R&D',
			id: 'rnd',
			children: [{
				name: 'Web interface for trade automation',
				leaf: true,
				id: 'rnd-001'
			}]
		}, {
			name: 'Inner clients',
			id: 'inner',
			children: [{
				name: 'Health monitoring badge',
				leaf: true,
				id: 'inner-001'
			}]
		}, {
			name: 'VIP clients',
			id: 'vip',
			children: [{
				name: 'Building a helicopter',
				leaf: true,
				id: 'vip-002'
			}, {
				name: 'Sharks shooting lasers',
				leaf: true,
				id: 'vip-003'
			}]
		}, {
			name: 'Flying saucers development',
			id: 'z51',
			children: [{
				name: 'Teddy bears stuffing',
				leaf: true,
				id: 'z51-001'
			}, {
				name: 'Teddy bears sewing',
				leaf: true,
				id: 'z51-002'
			}, {
				name: 'Teddy bears homing system',
				leaf: true,
				id: 'z51-003'
			}]
		}]
	}
	

 /*autoLoad: true,
 proxy: {
        type: 'ajax',
        url: 'data/orgunits.json'
    }*/
});