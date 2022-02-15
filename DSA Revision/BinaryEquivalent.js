function binary(num){
    let ans = [];
    let n = num;
    while (n >= 1){
        ans.push(n % 2)
        n = Math.floor(n / 2)
    }
    console.log(ans.reverse().join(' '));
    
}

function runProgram(input) {
  input = input.trim().split('\n');
  let tc = +input[0].trim();
  let line = 1;
  for(let i = 0; i < tc; i++){
      let num = +input[line++].trim()
      binary(num)
  }
  
 }
 if (process.env.USERNAME === "awdhesh") {
   runProgram(`2
   15
   128`);
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