function sum(num1, num2, funcToCall) {
    let result = num1 + num2;
    return funcToCall(result);
}

function displayResult(data) {
    console.log("Result of the sum is : " + data);
}

function displayResultPassive(data) {
    console.log("Sum's result is : " + data); 
}

// You are only allowed to call one function after this
// How will you displayResult of a sum

// ab = ;

// ans = console.log("i");

// setTimeout(sum(1, 6, displayResult), 1 * 1000);
setTimeout(displayResult("HI"), 1 * 1000);
