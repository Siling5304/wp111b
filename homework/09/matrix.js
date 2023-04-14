class Matrix{
    constructor(m){
        this.m = m
    }

    add(b){
        var t = [];

        for (var i = 0; i < this.m.length; i++) {
            t[i] = [];
            for (var j = 0; j < this.m[i].length; j++) {
                t[i][j] = this.m[i][j] + b.m[i][j];
            }
        }
        return new Matrix(t)
    }

    dot(b){
        let t = [];

        for (let i = 0; i < this.m.length; i++) {
            t[i] = [];
            for (let j = 0; j < b.m[0].length; j++) {
                let sum = 0;
                for (let k = 0; k < this.m[0].length; k++) {
                    sum += this.m[i][k] * b.m[k][j];
                }
                t[i][j] = sum;
            }
        }
        return new Matrix(t)
    }
}


let m = new Matrix([[1, 2], [3, 4]]), b = new Matrix([[5, 6], [7, 8]])
console.log('m.add(b)=', m.add(b))
console.log('m.dot(b)=', m.dot(b))