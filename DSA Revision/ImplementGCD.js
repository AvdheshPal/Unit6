function getGCD(l,h){
   
let hcf;

for (let i = 1; i <= l && i <= h; i++) {
    if( l % i == 0 && h % i == 0) {
        hcf = i;
    }
}

return hcf;
}

function runProgram(input) {
  input = input.trim().split('\n');
  let tc = input[0].trim();
  let line = 1;
  for(let i = 0; i < tc; i++){
      let [l,h] = input[line++].trim().split(' ').map(Number);
      console.log(getGCD(l,h));
  }
  
 }
 if (process.env.USERNAME === "awdhesh") {
   runProgram(`2
   6 9
   2 25`);
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