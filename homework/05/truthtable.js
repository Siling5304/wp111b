function truthTable(n){
    var t=Math.pow(2,n)

    for(var a=0;a<t;a++){
        console.log((a.toString(2)).padStart(n,0))
    }
}

truthTable(3)