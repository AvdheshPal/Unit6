function makeGroup(n,arr){
    let count = 0;
    let char = arr[0];
    for(let i=0; i<Math.floor(n/2); i++){
        if(arr[i] !== char){
            count++;
        }
    }
    console.log(count);
    
    
}
function runProgram(input) {
    input = input.trim().split('\n');
    let tc = +input[0].trim();
    let line = 1;
    for (let i = 0; i < tc; i++) {
        let n = +input[line++].trim();
        let arr = input[line++].trim().split(' ').map(Number);
        makeGroup(n,arr);
    }
  
 }
 if (process.env.USERNAME === "awdhesh") {
   runProgram(`5
   4
   1 1 0 0
   5
   1 1 1 1 1
   5
   0 0 0 1 1
   6
   0 0 1 1 0 1
   5
   0 0 0 1 0 `);
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