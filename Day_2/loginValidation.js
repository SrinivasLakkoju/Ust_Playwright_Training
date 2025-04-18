function submitted(){
const username = document.getElementById('username').value;
const password = document.getElementById('password').value;


const usernamePattern = /^[a-z0-9._]+$/;
 

const passwordPattern = /^(?=.*[A-Z])(?=.*\d).{8,}$/;

if(!passwordPattern.test(password)){
    alert("Password is not strong enough")
}


alert("values are"+username+"  "+password);
}