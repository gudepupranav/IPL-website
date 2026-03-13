document.getElementById("ticketForm").addEventListener("submit", function(event){

event.preventDefault(); 

let name = document.getElementById("name").value;
let mobile = document.getElementById("mobile").value;
let tickets = document.getElementById("tickets").value;

let gender = document.querySelector('input[name="gender"]:checked');
let payment = document.querySelector('input[name="payment"]:checked');

if(gender == null){
    alert("Please select your gender");
    return;
}

if(payment == null){
    alert("Please select payment method");
    return;
}

if(mobile.length != 10){
    alert("Mobile number must be 10 digits");
    return;
}

alert("Tickets Booked Successfully!\nName: " + name + "\nTickets: " + tickets);

});