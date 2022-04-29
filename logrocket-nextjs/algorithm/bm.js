// function buildlast
function buildlast(pattern){
    let last = new Array(128);
    for (let i = 0; i < 128; i++){
        last[i] = -1;
    }
    for (let i = 0; i < pattern.length; i++){
        last[pattern.charCodeAt(i)] = i;
    }
    return last;
}

module.exports = {

    bm : function bm(text, pattern){
        let last = buildlast(pattern);
        let n = text.length;
        let m = pattern.length;
        let i = m - 1;
        if(i > n - 1){
            return -1;
        }
        let j = m - 1;
        while (i <= n-1){
            if(text.charAt(i) == pattern.charAt(j)){
                if(j == 0){
                    return i;
                }
                i--;
                j--;
            }else{
                let lo = last[text.charCodeAt(i)];
                i += m - Math.min(j, 1 + lo);
                j = m - 1;
            }
        }
        return -1;
    }
};


