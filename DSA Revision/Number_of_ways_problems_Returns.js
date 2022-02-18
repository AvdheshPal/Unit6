function runProgram(input) {
  let n = +input.trim();
  let count = 0;
  function rec(n){
      if(n<=1){
          return
      }
      count++;
      let steps = rec(n-1) + rec(n-2) + rec(n-3);
  }
  rec(n)
  console.log(count);
  
 }
 if (process.env.USERNAME === "awdhesh") {
   runProgram(`4`);
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