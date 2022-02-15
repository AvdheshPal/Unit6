function getMissing(n,arr){
    let twic;
    for(let i=0;i<n;i++){
        if(arr[i] == arr[i+1]){
            twic = arr[i]
        }
    }
    console.log(n,twic);
}

function runProgram(input) {
  input = input.trim().split('\n');
  let tc = +input[0].trim();
  let line = 1;
  for(let i = 0 ; i < tc; i++) {
      let n = +input[line++].trim();
      let arr = input[line++].trim().split(' ').map(Number);
      getMissing(n,arr);
  }
  
 }
 if (process.env.USERNAME === "awdhesh") {
   runProgram(`3
   5
   1 2 3 3 4
   2
   1 1
   3
   1 2 2`);
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