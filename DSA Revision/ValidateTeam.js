function runProgram(input) {
  input = input.trim().split('\n')
  let [n,k] = input[0].trim().split(' ').map(Number);
  let arr = input[1].trim().split(' ').map(Number);
  let team1 = 0;
  let team2 = 0;
  let i = 0;
  let j = i+n;
  while(i < n || j < arr.length) {
      team1 = team1 + arr[i];
      team2 = team2 + arr[j];
      i++;
      j++;
  }
  let def = Math.abs(team1 - team2);
  if(def > k){
      console.log("Invalid");
  }
  else{
      console.log("Valid");
  }
  
 }
 if (process.env.USERNAME === "awdhesh") {
   runProgram(`3 0
   1 2 3 4 2 1`);
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