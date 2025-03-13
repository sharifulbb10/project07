let button = document.querySelector('button');
let username = document.querySelector("#username");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let secondPassword = document.querySelector(".secondPassword");
let passwordEye = document.querySelector(".password-eye");

button.addEventListener("click", ()=>{
	if(username.value.trim()==='') {
		document.querySelector(".usernameWarning").style.display="inline-block";
	}
	if(email.value.trim()==='') {
		document.querySelector(".emailWarning").style.display="inline-block";
	}
	if(password.value==='') {
		document.querySelector(".passwordWarning").style.display="inline-block";
	}
	if (password.value!=secondPassword.value) {
		document.querySelector(".secondPasswordWarning").style.display="inline-block";
	}
})

username.addEventListener("keyup", ()=>{
	document.querySelector(".usernameWarning").style.display="none";
})

email.addEventListener("keyup", ()=>{
	document.querySelector(".emailWarning").style.display="none";
})

password.addEventListener("keyup", ()=>{
	document.querySelector(".passwordWarning").style.display="none";
	document.querySelector(".secondPasswordWarning").style.display="none";
	document.querySelector('.password-requirement').style.display = "flex";
	
	if((/[A-Z]/g).test(password.value)) {
		document.querySelector('.capital-letter').style.color = "green";
	} else {
		document.querySelector('.capital-letter').style.color = "gray";
	}
	
	if((/[0-9]/g).test(password.value)) {
		document.querySelector('.number').style.color = "green";
	} else {
		document.querySelector('.number').style.color = "gray";
	}

	if (password.value.length>=8) {
		document.querySelector('.minimum-length').style.color = "green";
	} else {
		document.querySelector('.minimum-length').style.color = "gray";
	}

	if ((/[^A-Z]/g).test(password.value) && (/[^a-z]/g).test(password.value) && (/[^0-9]/g).test(password.value) && (/\S/g).test(password.value)) {
		document.querySelector(".special-sign").style.color = "green";
	} else {
		document.querySelector(".special-sign").style.color = "gray";
	}
})

secondPassword.addEventListener("keyup", ()=> {
	document.querySelector(".secondPasswordWarning").style.display="none";
})

passwordEye.addEventListener('click', ()=>{
	let type = password.getAttribute('type')==="password"? "text": "password";
	password.setAttribute("type", type);
	document.querySelector('svg').innerHTML = type==="password"? `<path d="M15.0007 12C15.0007 13.6569 13.6576 15 12.0007 15C10.3439 15 9.00073 13.6569 9.00073 12C9.00073 10.3431 10.3439 9 12.0007 9C13.6576 9 15.0007 10.3431 15.0007 12Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
					<path d="M12.0012 5C7.52354 5 3.73326 7.94288 2.45898 12C3.73324 16.0571 7.52354 19 12.0012 19C16.4788 19 20.2691 16.0571 21.5434 12C20.2691 7.94291 16.4788 5 12.0012 5Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>` : `<path d="M2.99902 3L20.999 21M9.8433 9.91364C9.32066 10.4536 8.99902 11.1892 8.99902 12C8.99902 13.6569 10.3422 15 11.999 15C12.8215 15 13.5667 14.669 14.1086 14.133M6.49902 6.64715C4.59972 7.90034 3.15305 9.78394 2.45703 12C3.73128 16.0571 7.52159 19 11.9992 19C13.9881 19 15.8414 18.4194 17.3988 17.4184M10.999 5.04939C11.328 5.01673 11.6617 5 11.9992 5C16.4769 5 20.2672 7.94291 21.5414 12C21.2607 12.894 20.8577 13.7338 20.3522 14.5" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`
})

