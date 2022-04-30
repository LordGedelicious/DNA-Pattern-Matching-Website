function distance(x,y){
    //var count int
    var count = 0
    for (let i = 0; i < x.length; i++){
        if(x[i] == y[i]){
            count++;
        }
    }
    return count;
}

function similarity(pattern, text){
    let count = 0;
    n = text.length;
    m = pattern.length;
    for (let i = 0; i < n - m + 1; i++){
        curr = distance(pattern, text.substring(i, i + m));
        if(curr > count){
            count = curr;
        }
    }
    return count * 100 / m;
}

let a = similarity("ABBBABAAAB", "AABABBABAB");
console.log(a);
// ABBBABAAAB
// AABABBABAB
// 1010011011