var person1 = prompt('What is your name?');
var person2 = prompt("What is your match's name?");


var loveScore = Math.random() * 101;
loveScore = Math.floor(loveScore);
console.log(loveScore);


if (loveScore > 70) {
    alert(person1 + " and " + person2 + " are a " + loveScore + "% match! Love is in the air!");
}
if (loveScore > 30 && loveScore <= 70){
    alert(person1 + " and " + person2 + " are a " + loveScore + "% match. Meh, give it a go but it's probably not going to workout...");
}
if (loveScore <= 30){
    alert(person1 + " and " + person2 + " are a " + loveScore + "% match. Run! Get out now!");
}
