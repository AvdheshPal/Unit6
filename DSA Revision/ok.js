let n = 15;
// 1,2,3,4,5,6,7,8,9,10

for(let i = 1; i <= n; i++){
  if(i%3==0 && i%5==0){
      console.log('fizzBuzz');
  }
  else if(i%3==0){
      console.log('fizz');
  }
  else if(i%5==0){
      console.log('buzz')
  }
  else{
      console.log(i);
  }
}