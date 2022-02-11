// get the submit button 
submitButton = document.querySelector('#submitButtonCont input')

submitButton.addEventListener('click', (e) => {

	// get the form itself
	pageForm = document.querySelector('#pageForm');

	// get the password field and the password confirm 
	passwordField = document.querySelector('#password').value;
	passwordConfirmField = document.querySelector('#confirmPass').value;
	
	if(passwordField && passwordConfirmField) {
		if(passwordField !== passwordConfirmField) {
			formBarForm = document.querySelector('#formBarForm');
			// check that there isn't already an error message present
			if(!document.querySelector('#formErrorMsg')){
				errorMsg = document.createElement('span');
				errorMsg.setAttribute('id', 'formErrorMsg');
				errorMsg.innerText = "* Passwords do not match!";
				formBarForm.appendChild(errorMsg);
			}
			e.preventDefault();
		}
	}
});
