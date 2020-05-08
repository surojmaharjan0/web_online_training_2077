//get all UI input fields

const UIusername =  document.querySelector('.username');
const UImobile =  document.querySelector('.mobile');
const UIpassword =  document.querySelector('.password');
const UIc_password =  document.querySelector('.c-password');

//get the form
const form = document.querySelector('form');

// add event listener to form
form.addEventListener('submit',function(e){
	checkUsername(5,10);
	checkMobile(10);
	checkPasswordMatch();
	e.preventDefault();	
});

function checkUsername(min,max){
	const username = UIusername.value;
	if(username.length < min || username.length>max){
		//error
		showError(UIusername,'Username must be of length 5 - 10');
	}else{
		//username is ok
		showSuccess(UIusername,'Username looks good!');
	}
}
function checkMobile(max){
	const mobile = UImobile.value;
	if(mobile.length !== max){
		// error
		showError(UImobile,'Mobile number should be of length 10');
	}else{
		// ok
		showSuccess(UImobile,'Mobile number looks good!');
	}
}

function checkPasswordMatch(){
	const pwd1 = UIpassword.value;
	const pwd2 = UIc_password.value;

	if(pwd1.length==0 && pwd2.length==0){
		showError(UIpassword,'Password cannot be empty');
		showError(UIc_password,'Confirm password cannot be empty');
	}
	else if(pwd1 !== pwd2){
		showError(UIpassword,'Passwords do not match');
		showError(UIc_password,'Passwords do not match');
	}else{
		showSuccess(UIpassword,'Passwords match!');
		showSuccess(UIc_password,'Passwords match!');
	}
}

function showError(element,msg){
	const parent = element.parentElement;
	parent.classList.add('error');
	showSmall(parent,msg);
}
function showSuccess(element,msg){
	const parent = element.parentElement;
	parent.classList.remove('error');
	parent.classList.add('success');
	showSmall(parent,msg);
}
function showSmall(parent,msg){
	const small = parent.lastElementChild;
	small.innerText=msg;
	small.style.visibility = 'visible';	
}

