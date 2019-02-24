var arr = [1,2,3,4,5,6,7,8,9,,10,11,12,13,14,15,16,17,18,19,20];

function fizzBuzz(array){
    for(i=0;i<array.length;i++){
        if(array[i]%15===0){
            console.log("FizzBuzz");
        }
        else if(array[i]%5===0){
            console.log("Buzz");
        }
        else if(array[i]%3===0){
            console.log("Fizz");
        }
        else{
            console.log(array[i]);
        }
    }
}

fizzBuzz(arr);

// creating an array

var output = [];
var count = 1;

function FizzBuzz(){
    if(output.length===0){
        output.push(1);
    }else{
        output.push((output[output.length-1])+1);
    }
    console.log(output);
}

// FizzBuzz that builds array
