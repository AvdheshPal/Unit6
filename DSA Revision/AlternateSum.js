function runProgram(input) {
  input = input.trim().split('\n');
 let tc = +input[0].trim();
 let line = 1;
  for(let i = 0 ; i < tc ; i+=2) {
      let[n,m] = input[line++].trim().split(' ').map(Number)
      let arr = input[line++].trim().split(' ').map(Number)
  }
  console.log(sum);  
 }
 if (process.env.USERNAME === "awdhesh") {
   runProgram(`1
   5 1
   1 2 3 4 5`);
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