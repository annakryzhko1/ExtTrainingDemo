Ext.define('Demo.Application', {
    name: 'Demo',

    extend: 'Ext.app.Application',
    
    autoCreateViewport: true,

    views: [
        'Employees', 'EmployeeManagement', 'Organizations'
    ],

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
