Ext.define('Demo.view.Viewport', {
    extend: 'Ext.container.Viewport',
    requires:[
        'Ext.layout.container.Fit',
        'Demo.view.Employees',
        'Demo.view.EmployeeManagement',
        'Demo.view.Organizations'
    ],

    layout: {
        type: 'fit'
    },

    items: [{
        // xtype: 'app-main'
        layout : 'border',
        items: [  {xtype: 'employeemanagement', region: 'north', }, 
        {xtype: 'organizationtree', region: 'west' },  
        {xtype: 'employeesgrid', region: 'center', margin: 10 } 
                    ]
    }]
});