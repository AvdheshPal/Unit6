let arr = [-7, 2, 5, 3, 0, 5, 3]

function equilibrium(arr) {
    let sum = 0;

    for (k of arr) {
        sum += k;
    }

    let right = sum - (arr[0] + arr[1]);
    
    let left = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (left == right) {
            return i;
        }
        left += arr[i];
        right -= arr[i + 1];
    }

    return -1;
}

console.log(equilibrium(arr));