// Move all negative numbers to beginning and positive to end with constant extra space

let arr = [2, -4, 7, -3, 4]


function moveNumbers(arr){

    let left = 0;
    let right = arr.length-1;

    while(left < right-1){
        while(arr[left] < 0){
            left = left + 1;
        }
        while(arr[right] > 0){
            right = right-1;
        }

        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;

    }

    return arr;
    
}

console.log(moveNumbers(arr));

// time  = O(n) 
// space = O(1)