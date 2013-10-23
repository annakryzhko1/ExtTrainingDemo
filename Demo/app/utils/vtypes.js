(function() {
	var date1950 = new Date("01 01 1950 00:00:00");
	Ext.apply(Ext.form.field.VTypes, {
	    //  vtype validation function
	    employeeBirthDate: function(val, field) {
	    	var form = field.up('form'),
	    	isValidated = false,
	    	terminatedField;
	    	if (!form) {
	    		return true;
	    	}  
	    	terminatedField = form.down('checkboxfield[name=terminated]');
	    	isValidated = terminatedField && !terminatedField.checked;
	    	
	    	if (isValidated) {
	    		return new Date(val) > date1950;
	    	}
	        return true; //timeTest.test(val);
	    },
	    // vtype Text property: The error text to display when the validation function returns false
	    employeeBirthDateText: 'Not a valid date. For active employees birth date should not be before 1950',
	    
	});
})()