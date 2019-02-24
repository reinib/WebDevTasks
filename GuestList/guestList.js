var guestList = ["Brent", "Hyejin", "Lukas", "Roxy", "Liesel"];
var person = prompt("What is your name?");

if(guestList.includes(person)){
    alert("You are on the list, welcome " + person);
} else{
    alert("Sorry your name is not on the list, you have to leave now");
}
