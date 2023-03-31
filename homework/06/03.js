function madd(a,b){
    var t = [];

    for (var i = 0; i < a.length; i++) {
        for (var j = 0; j < a[i].length; j++) {
           t[i][j] = a[i][j] + b[i][j];
        }
    }
    return t
}

let a = [[1, 2], [3, 4]];
let b = [[5, 6], [7, 8]];
let c = madd(a,b)
console.log(c)