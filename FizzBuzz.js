function FizzBuzz(num) { 
  // count from 1 up to "num", including "num"
  // if counter is divided equally by 3
  //    print "Fizz"
  // if counter is divisible by 5
  //    print "Buzz"
  // if counter divisible by 3 and 5 
  //    print "FizzBuzz"
  // otherwise
  //    print counter
  for(let i=1; i<= num; i++){
    if(i%3 === 0){
      console.log("Fizz");
    }  // % = modulo
    else if(i%5 === 0){
      console.log("Buzz");
    }    
    else if(i%3 === 0 && i%5 === 0){
      console.log("FizzBuzz");
    }
    else{
      console.log(i);
    }
  }

  // code goes here  
  return num; 

}
   
// keep this function call here 
console.log('Test 1 passing: ' + (FizzBuzz(3) == '1 2 Fizz'));
console.log('Test 2 passing: ' + (FizzBuzz(8) == '1 2 Fizz 4 Buzz Fizz 7 8'));


//  % - Modulus operator
//   for ( let i = 1; i <= 8; ++)
//i = 1,   i % 8 = 1
//         2 % 8 = 2
//         ... 
//         7 % 8 = 7
//         8 % 8 = 0
//         9 % 8 = 1
//        10 % 8 = 2
//        
