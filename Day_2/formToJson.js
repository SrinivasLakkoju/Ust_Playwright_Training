function generateJson(){
    const name1=document.getElementById('firstname').value;
    const name2=document.getElementById('middlename').value;
    const name3=document.getElementById('lastname').value;
    const phnnumber=document.getElementById('phnnumber').value;
    const pincode=document.getElementById('pincode').value;

    const jsonData={
        firstName : name1,
        lastName : name3,
        middleName : name2,
        phnNumber : phnnumber,
        pinCode : pincode
    }

    const jsonDataString = JSON.stringify(jsonData);
    document.getElementById("g1").textContent = jsonDataString;

}