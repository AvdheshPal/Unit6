function doUnion(a, n, b, m){
    let l = Math.max(n, m)
    let ans = 1;
    a = a.sort((a,b)=>a-b);
    b = b.sort((a,b)=>a-b);
    for (let i = 1; i <= l - 1; i++) {
        if (a[i]) {
            if (a[i] !== a[i - 1]) {
                ans++
            }
        }
        if (b[i]) {
            if ((b[i] !== b[i - 1]) && (b[i] !== a[i])) {
                ans++
            }
        }
    }
    return ans
}

let arr1 = [1, 3, 3, 4, 5]
let arr2 = [1, 2, 4]
console.log(doUnion(arr1,arr1.length,arr2,arr2.length));