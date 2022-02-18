function runProgram(input) {
  let [s1,s2] = input.trim().split('\n')
  s1 = s1.trim().split('').sort()
  s2 = s2.trim().split('').sort()
  let ans = "Yes";
  for(let i =0; i < s1.length; i++){
      if(s1[i] != s2[i]) ans = "No"
  }
  console.log(ans);
  
 }
 if (process.env.USERNAME === "awdhesh") {
   runProgram(`amit
   mtia`);
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