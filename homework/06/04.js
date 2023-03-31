function mmul(a,b){
    let t = [];

    for (let i = 0; i < a.length; i++) {
        t[i] = [];
        for (let j = 0; j < b[0].length; j++) {
          let sum = 0;
          for (let k = 0; k < a[0].length; k++) {
            sum += a[i][k] * b[k][j];
          }
          t[i][j] = sum;
        }
    }
    return t
}

let a = [[1, 2], [3, 4]];
let b = [[5, 6], [7, 8]];
let c = mmul(a,b)
console.log(c)