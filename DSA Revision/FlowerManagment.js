function flowerManagment(n,k,arr){
    let count = 0;
    for(let i=0;i<n;i++){
        if(i == 0 || i==n-2){
            if(arr[i] == 0 && arr[i+1] == 0){
                count++;
            }
        }
        else{
            if((arr[i] == 0) && (arr[i-1] == 0) && (arr[i+1] == 0)){
                count++;
            }
        }
    }
    if(count == k){
        console.log("Yes");
    }
    else{
        console.log("No");
    }
}

function runProgram(input) {
  input = input.trim().split('\n');
  let tc = +input[0].trim();
  let line = 1;
  for (let i = 0; i < tc; i++) {
      let [n,k] = input[line++].trim().split(' ').map(Number);
      let arr = input[line++].trim().split(' ').map(Number);
      flowerManagment(n,k,arr);
  }
  
 }
 if (process.env.USERNAME === "awdhesh") {
   runProgram(`5
   3 3
   0 1 1
   10 1
   0 1 0 0 1 0 0 1 0 0
   6 3
   1 0 1 0 0 1
   8 1
   1 1 1 0 1 1 0 1
   9 1
   0 1 1 1 1 1 0 0 0`);
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