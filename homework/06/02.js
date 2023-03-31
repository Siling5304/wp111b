function vdot(a,b){
    let t = []
    let dot = 0
    for (let i=0; i<a.length; i++){
        t[i]=a[i]*b[i]
    }
    for (let j=0; j<t.length; j++){
        dot+=t[j]
    }
    return dot
}

let v1 = [1,2] , v2 = [1,1]
console.log("vdot(v1,v2)=",vdot(v1,v2))