function vadd(a, b) {
    let t = []
    for (let i = 0; i < a.length; i++) {
        t[i] = a[i] + b[i]
    }
    return t
}

let v1 = [1, 2], v2 = [1, 1]
console.log("vadd(v1,v2)=", vadd(v1, v2))