Ext.define('Demo.model.Employee', {
    extend: 'Ext.data.Model',
    
    fields: [
        { name: 'empId', type: 'int' },
        { name: 'name', type: 'string' },
        { name: 'age', type: 'int' },
        { name: 'phone', type: 'string' },
        { name: 'married', type: 'boolean' },
        { name: 'orgId', type: 'string' }

    ]
});
