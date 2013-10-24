Ext.define('Demo.view.EmployeeAdd', {
    extend: 'Ext.window.Window',
    alias: 'widget.employeeadd',

    title: 'Add Employee',
    layout: 'fit',
    autoShow: true,

    initComponent: function() {
        this.items = [
            {
                xtype: 'form',
                /*{"id": 1, "name": 'Ed',    "birthdate": '12.12.12', "married": true, "orgId": 'z51-002', "phone": "123"},*/
                defaults: {
                	allowBlank: false,
               		emptyText: "the field is required"
                },
                items: [
                    {
                        xtype: 'textfield',
                        name : 'name',
                        fieldLabel: 'Name',
                        maxLength:100,
                        maxLengthText: "Name is up to 100 characters"
                        
                    },
                    {
                        xtype: 'datefield',
                        name : 'birthdate',
                        validator: function(val) {
                        	var form = this.up('form'),
					    	isValidated = false,
					    	terminatedField,
					    	date1950 = new Date("01 01 1950 00:00:00");
					    	if (!form) {
					    		return true;
					    	}  
					    	terminatedField = form.down('checkboxfield[name=terminated]');
					    	isValidated = terminatedField && !terminatedField.checked;
					    	
					    	if (isValidated) {
					    		return (new Date(val) > date1950) ? true: 'Not a valid date. For active employees birth date should not be before 1950';
					    	}
					        return true; 
                        },
                        //vtype: 'employeeBirthDate',
                        fieldLabel: 'Birth date',
                    },
                    {
                        xtype: 'checkboxfield',
                        name : 'terminated',
                        id: 'terminated',
                        checked: true,
                        fieldLabel: 'Terminated',
                    },
                    {
                        xtype: 'textfield',
                        name : 'phone',
                        fieldLabel: 'Phone',
                        regex: "^((\d{3}-\d{4})|(\(\d{3}\)-\d{3}-\d{4}))$",
                        regexText: "The allowed formats:  000-0000 or (000)-000-0000"
                    },
                    {
                        xtype: 'combobox',
                        name : 'orgId',
                        store: 'OrgUnitsArr',
                        valueField: 'id',
                        displayField: 'name',
                        fieldLabel: 'Unit',
                    }
                ]
            }
        ];

        this.buttons = [
            {
                text: 'Save',
                action: 'save'
            },
            {
                text: 'Cancel',
                action: 'cancel'
            },
            
            {
                text: 'Add',
                action: 'add'
            }
            
            
            /*,
            {
                text: 'Cancel',
                scope: this,
                handler: this.close
            },            
            {
                text: 'Delete',
                scope: this,
                action: 'delete'
            }*/
        ];

        this.callParent(arguments);
    }
});