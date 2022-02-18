function getThePair(n,arr,k){
  let i = 0;
  let j = 1;
  let ans = -1;
  while(i < n && j < n){
      let s = arr[i] + arr[j];
       
      if(s < k){
          if(s > ans){
              ans = s;
          }
          j++
      }
      else if(s > k){
          i++;
      }
      else{
          i++;
          j++;
      }

  }
  console.log(ans);
}

function runProgram(input) {
  input = input.trim().split('\n');
  let tc = +input[0].trim();
  let line = 1;
  for(let i = 0; i < tc; i++) {
      let n = +input[line++].trim()
      let arr = input[line++].trim().split(' ').map(Number);
      let k = +input[line++].trim()
      getThePair(n,arr,k)
  }
  
 }
 if (process.env.USERNAME === "awdhesh") {
   runProgram(`2
   5
   1 2 3 4 5
   7
   3
   30 10 20
   15`);
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