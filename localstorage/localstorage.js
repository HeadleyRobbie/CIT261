function clickCounter() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount) * 5;
        } else {
            localStorage.clickcount = 1;
        }
        
        document.getElementById("result").innerHTML = "Keep Clicking! " + localStorage.clickcount;
    } else {
        document.getElementById("result").innerHTML = "update your browser";
    }
}

function clearItems () {
    window.localStorage.clear();
    location.reload();
}

function populatePerson () {
    var userFirstName = document.getElementById("firstName").value;
    var userLastName = document.getElementById("lastName").value;
    var userAddress = document.getElementById("address").value;
    var userPhone = document.getElementById("phone").value;
    
    var person = {firstName: userFirstName, lastName: userLastName, address: userAddress, phone: userPhone};
    
    localStorage.setItem('user', JSON.stringify(person));
    localStorage.setItem('browser-name', navigator.appCodeName);
    
    document.getElementById("userOutput").innerHTML = "DONE!";  
}

function setUser() {
    var user = JSON.parse(localStorage.getItem('user'));

    document.getElementById("userOutput").innerHTML = "<b>First Name:</b> " + user.firstName + "<br><b>Last Name:</b> " + user.lastName + "<br><b>Address:</b> " + user.address + "<br><b>Phone:</b> " + user.phone;
}