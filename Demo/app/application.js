Ext.define('Demo.Application', {
    name: 'Demo',

    extend: 'Ext.app.Application',
    
    autoCreateViewport: true,    

    controllers: [
        'EmpController', 'OrgController'
    ],

    stores: [
        'OrgUnits', 'Employees'
    ],

    init: function(app) {
        console.log('app init');
    }
});
