let n = 6;
let fact = 1;
for(let i = n; i > 1; i--) {
    fact = fact*i;
}
console.log(fact);

// time complexity = O(N);
// space complexity = O(1);