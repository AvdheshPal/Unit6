let a = -10;

let promis = new Promise((resolve, reject) => {
    if(a >= 0){
        resolve('Positive')
    }else{
        reject('Negative')
    }
})

promis.then(
    (res) => {
        console.log(res);
    }
).catch(err => {
    console.log(err);
})

// closure 

// function a (){
//     var x = 10;
//     function b(x){
//         console.log(x);
//     }
//     b(x);
// }
// a();

// function a (){
//     console.log('My name is Avdhesh')
// };

// function b (z){
//  z();
// }

// b(a);

// console.log(typeof([]));