// 1.	countdown
// Write a function called countdown that accepts a number as a parameter and every 1000 milliseconds decrements the value and console.logs it. Once the value is 0 it should log "DONE!" and stop.

function countdown(time){
    var timerid = setInterval(function(){
      time--;
      if(time <= 0){
        clearTimeout(timerid);
        console.log('DONE!');
      }
      else {
        console.log(time);
      }
  
    },1000)
  }

  console.log(countdown(6))

  // 2.	randomGame
  // Write a function called randomGame that selects a random number between 0 and 1 every 1000 milliseconds and each time that a random number is picked, add 1 to a counter. If the number is greater than .75, stop the timer and return the number of tries it took before we found a number greater than .75.
  
  function randomGame(){
    var num;
    var times = 0;
    var timer = setInterval(function(){
      num = Math.random();
      times++
      if(num > .75) {
        clearInterval(timer);
        console.log("It took " + times + " tries to find a number greater than .75.");
      }
    },1000)
  }
randomGame();
console.log(randomGame());

// 3.	isEven
// Write a function called isEven which takes in a number and returns true if the number is even and returns false if it is not

function isEven(num){
  if(num % 2 === 0){
      return "true";
  }else{
      return "false";
  }
}
console.log(isEven(4));
console.log(isEven(9));

// 4.	isOdd
// Write a function called isOdd which takes in a number and returns true if the number is odd and returns false if it is not

function isOdd(num){
      if(num % 2 !== 0){
          return "true";
      }else{
          return "false";
      }
  }


  // 5.	isPrime
  // Write a function called isPrime which takes in a number and returns true if the number is a prime number (is greater than 1 and can only be divided in whole by itself and 1), otherwise returns false
  
  function isPrime(num){
    for(var i=2; i<num; i++){
     if(num % i == 0 || num <= 1){
       return false;
     } else{
        return true;
     }
    } 
 }
