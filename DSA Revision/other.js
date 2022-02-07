function ok(n, arr) {
    let obj = {}
    for (let x of arr) {
        if (obj[x] == undefined) {
            obj[x] = 1
        } else {
            obj[x]++
        }
    }
    let max = obj[Object.keys(obj)[0]]
    let arr2 = []
    for (let k in obj) {
        if (obj[k] > max) {
            max = obj[k]
        }
    }

    for (let k in obj) {
        if (obj[k] == max) {
            arr2.push(k)
        }
    }
    if (arr2.length == 1) {
        console.log(arr2.join(' '))
    } else {
        arr2 = arr2.map(Number)
        let min = arr2[0]
        for (let x of arr2) {
            if (x < min) min = x
        }
        console.log(min);
    }
}

function runProgram(input) {
    input = input.trim().split('\n')
    let tc = input[0];
    let line = 1;
    for (let i = 0; i < tc; i++) {
        let n = +input[line++].trim();
        let arr = input[line++].trim().split(' ').map(Number);
        ok(n, arr)
    }
}
if (process.env.USERNAME === "awdhesh") {
    runProgram(`2
    6
    1 4 4 4 5 3
    11
    1 2 3 4 5 4 3 2 1 3 4`);
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