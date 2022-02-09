let n = 6;


// Aproach first -> Broute force techneque


let fact = 1;
for(let i = n; i > 1; i--) {
    fact = fact*i;
}
console.log(fact);

// time complexity = O(N);
// space complexity = O(1);



// Aproach second -> recursion method

// function factorial (a) {
// //   let fact = a * factorial(a-1);
//   if(a == 1){
//       return fact
//   }
// }
// console.log(factorial(n));