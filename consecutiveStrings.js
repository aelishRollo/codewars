function GetConcatenatedStringArray() { //returns an array of concatenated strings
    
    let arr = ["zone", "abigail", "theta", "form", "libe", "zas"]
    let concats = []
    let k = 2
    
    for (let i = 0; i <= arr.length - k; i++) {
        concats.push(arr[i] + arr[i+1])
    }
    return concats
}

function longestConsec() {
    for (let i = 0; i < GetConcatenatedStringArray().length ; i++)
        console.log("yay")
}



console.log(GetConcatenatedStringArray())
longestConsec()
