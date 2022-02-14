function runProgram(input) {
  input = input.trim().split('\n');
  let str = input[1].trim();
  let x = 0;
  let y = 0;
  for(let i = 0; i <str.length; i++){
      if(str.charAt(i) == 'u'){
          x++;
      }
      else if(str.charAt(i) == 'd'){
          x--;
      }
      else if(str.charAt(i) == 'l'){
          y--;
      }
      else if(str.charAt(i) == 'r'){
          y++;
      }
  }
  console.log(x,y);
  
  
 }
 if (process.env.USERNAME === "awdhesh") {
   runProgram(`4
   lldd`);
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