function repeat(f, n) {
    let t = []
    for (let i = 0; i < n; i++) {
        t[i] = f();
    }
    return t;   
}
let c = repeat(Math.random, 10);
console.log(c);