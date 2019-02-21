var person1 = prompt('What is your name?');
var person2 = prompt("What is your match's name?");
function lovePercent(){
    var num = Math.random();
    num = num * 101;
    num = Math.floor(num);
    return num;
}

alert(person1 + " and " + person2 + " are a " + lovePercent() + " percent match!");
