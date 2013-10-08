Ext.define('Demo.view.Organizations', {
	extend : 'Ext.tree.Panel',
	alias : 'widget.organizationtree',
	title : 'Organization chart',
	width : 500,
	height : 600,
	renderTo : Ext.getBody(),
	collapsible : true,
	useArrows : true,
	rootVisible : true,
	store : 'OrgUnits',
	columns : [{
		xtype : 'treecolumn', //this is so we know which column will show the tree
		text : 'Units',
		flex : 1,
		sortable : true,
		dataIndex : 'name'
	}]
}); 