


// <--- Reverse the array ---->

let str = [1,2,3,4,5,6,7,8];

let start = 0
let end = str.length - 1;

// best approach 
// time = O(n/2); space = O(1)

while (start < end) {
    let temp = str[start];
    str[start] = str[end];
    str[end] = temp;
    start++;
    end--;
}

console.log(str);


// brute force approach 
// time = O(n**2) , space = O(n)

 let ans = []
 
 for(let i = str.length-1; i >= 0 ; i--) {
     ans.push(str[i])
 }

console.log(ans);



