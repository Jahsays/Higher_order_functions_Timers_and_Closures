// 6.	numberFact
// Write a function called numberFact which takes in a number and a callback and returns the result of the callback with the number passed to it

function numberFact(num, callback){
    return callback(num);
  }


//   7.	find
// Write a function called find. It should take in an array and a callback and return the first value found in the array that matches the condition.

function find(arr, callback){
    for(let i = 0; i < arr.length; i+=1){
      if(callback(arr[i])){
          return arr[i];
      }
    }
}

// 8.	findIndex
// Write a function called findIndex. It should take in an array and a callback and return the index of first value found in the array that matches the condition.

function findIndex(arr, callback){
    for(var i = 0; i < arr.length; i+=1){
        if(callback(arr[i])){
            return arr.indexOf(arr[i]);
        }
    }
}

// 9.	specialMultiply
// Write a function called specialMultiply which accepts two parameters. If the function is passed both parameters, it should return the product of the two. If the function is only passed one parameter - it should return a function which can later be passed another parameter to return the product. You will have to use closure and arguments to solve this.

function specialMultiply(num1, num2){
    if(arguments.length == 2){
        return num1 * num2;
    }
    return function multiply(b){
        return num1 * num2;
    }
}
