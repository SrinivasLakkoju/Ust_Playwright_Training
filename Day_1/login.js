function submit() {
    // email, pass
    const email = document.getElementById('email').value.toString();
    const pass = document.getElementById('pass').value.toString();

    if(email === "aryan@gmail.com" && pass === "123") {
        alert("Login success");
    } else {
        alert("Login failed");
    }
}