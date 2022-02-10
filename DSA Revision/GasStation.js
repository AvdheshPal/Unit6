function runProgram(input) {
  input = input.trim().split('\n');
  let n = +input[0].trim();
  let gas = input[1].trim().split(' ').map(Number);
  let cost = input[2].trim().split(' ').map(Number);
  gasStation(n,gas,cost)
  
 }
 function gasStation(n,gas,cost){
     let fuel = 0;
     let start = 0;
     let total = 0;
     for(let i = 0; i <n; i++){
         
     }
 }
 if (process.env.USERNAME === "awdhesh") {
   runProgram(`5
   1 2 3 4 5
   3 4 5 1 2`);
 } else {
   process.stdin.resume();
   process.stdin.setEncoding("ascii");
   let read = "";
   process.stdin.on("data", function (input) {
     read += input;
   });
   process.stdin.on("end", function () {
     read = read.replace(/\n$/, "");
     read = read.replace(/\n$/, "");
     runProgram(read);
   });
   process.on("SIGINT", function () {
     read = read.replace(/\n$/, "");
     runProgram(read);
     process.exit(0);
   });
 }