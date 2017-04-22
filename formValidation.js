function loginValidation(){
		var firstName = document.getElementById('firstName').value;
		var lastName = document.getElementById('lastName').value;
        if(firstName ===''){
		//document.getElementsById('firstName').style.borderColor = "red";
        alert('Please Enter First Name');
		//return false;
		}else if(lastName ===''){
		//document.getElementsById('lastName').style.borderColor = "red";
        alert('Please Enter Last Name');
		//return false;
		}else{
			columns: [
            { title: "Name" },
            { title: "Position" },
            { title: "Office" },
            { title: "Extn." },
            { title: "Start date" },
            { title: "Salary" }
        ]
		//	var formDetails = new Object();
		//    formDetails.firstName = firstName;
		//	formDetails.lastName = firstName;
		}
	//	console.log(formDetails.firstName);
	//	console.log(formDetails.lastName);
}
