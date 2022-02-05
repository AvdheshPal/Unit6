let l = Math.max(n, m)
let ans = 1;
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