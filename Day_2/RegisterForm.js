
    

function displayUser() {
    
    document.getElementById('nameError').innerText = '';
    document.getElementById('ageError').innerText = '';
    document.getElementById('roleError').innerText = '';
    document.getElementById('emailError').innerText = '';
    document.getElementById('phoneError').innerText = '';

    const fullname = document.getElementById('name').value;
    const age = parseInt(document.getElementById('age').value);
    const role = document.getElementById('role').value.toLowerCase();
    const salary = document.getElementById('salary').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    let valid = true;

    if (fullname.length < 3) {
        document.getElementById('nameError').innerText = 'Name must be at least 3 characters long';
        valid = false;
    }

    if (age <= 18) {
        document.getElementById('ageError').innerText = 'Age must be greater than 18';
        valid = false;
    }

    if (role !== 'trainer' && role !== 'user') {
        document.getElementById('roleError').innerText = 'Role must be "trainer" or "user"';
        valid = false;
    }else{ 
        if(role=='trainer'){
        document.getElementById('dashHeader').innerHTML='Admin Dashboard';
        }else{
        document.getElementById('dashHeader').innerHTML='User Dashboard'
        }
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').innerText = 'Invalid email format';
        valid = false;
    }

    if (!phone.startsWith('+') || phone.length !== 13) {
        document.getElementById('phoneError').innerText = 'Phone number should include country code and 10 digits long';
        valid = false;
    }

    if (valid) {
        const user = {
            fullname,
            age,
            role,
            salary,
            email,
            phone
        };
    
        
        const tbody = document.getElementById('table').querySelector('tbody');

        tbody.innerHTML = `<tr>
                    <td>${user.fullname}</td>
                    <td>${user.age}</td>
                    <td>${user.role}</td>
                    <td>${user.salary}</td>
                    <td>${user.email}</td>
                    <td>${user.phone}</td>
                </tr>`;




    }
}

