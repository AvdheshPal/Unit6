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
