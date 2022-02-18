function runProgram(input) {
  let [n,r] = input.trim().split(' ').map(Number);
  function gp(n,r){
      let s = [1]
      let i = 1;
      let ans = 0;
      while(s.length <= n){
          s.push(1/r**i)
          i++;
      }
      for(k of s){
          ans += k;
      }
      console.log(ans.toFixed(4));
  }
  gp(n,r)
  
 }
 if (process.env.USERNAME === "awdhesh") {
   runProgram(`1 1`);
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