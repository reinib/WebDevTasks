function fibonacciGenerator (n) {
    //TODO
    var arr = [];
    if(n===1){
        arr.push(0);
        return arr;
    }
    else if(n===2){
        arr.push(0);
        arr.push(1);
        return arr;
    }
    else{
    var numOne = 0;
    var numTwo = 1;
    arr.push(0);

    for(var i=2;i<=n;i++){
        arr.push(numOne+numTwo);
        numOne = arr[arr.length-1];
        numTwo = arr[arr.length-2];
    }
    //Return an array of fibonacci numbers.
    return arr;
    }

}
