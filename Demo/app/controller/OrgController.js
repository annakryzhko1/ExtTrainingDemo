Ext.define('Demo.controller.OrgController', {
    extend: 'Ext.app.Controller',
    stores : ['OrgUnits'],

	models : ['OrgUnit'],

	views : ['Organizations']
});
