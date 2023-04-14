function count(words){
    var cmap = {}
    for (let word of words){
        let c = cmap[word]
        if (c == null){
            cmap[word] = 1
        }
        else{
            cmap[word] = cmap[word] + 1
        }
    }
    return cmap
}

let list = ["a", "dog", "chase", "a", "cat"]
let cmap = count(list)
console.log(cmap)