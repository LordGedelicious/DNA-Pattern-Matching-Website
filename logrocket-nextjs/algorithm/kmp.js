function computeFail(pattern){
    const fail = []
    fail[0] = 0;
    let i = 1;
    let j = 0;
    let m = pattern.length;
    while (i < m){
        if(pattern.charAt(j) == pattern.charAt(i)){
            fail[i] = j + 1;
            i++;
            j++;
        }else if (j > 0){
            j = fail[j - 1];
        }else{
            fail[i] = 0;
            i++;
        }
    }
    return fail;
}

module.exports = {
    kmp: function kmp(text, pattern){
        let n = text.length;
        let m = pattern.length;
        let fail = computeFail(pattern);
        // let fail = computeFail(pattern, m, [])   // alternatif 1
        let i = 0;
        let j = 0;
        while (i < n){
            if(text.charAt(i) == pattern.charAt(j)){
                if(j == m - 1){
                    return i - m + 1;
                }
                i++;
                j++;
            }else if (j > 0){
                j = fail[j - 1];
            }else{
                i++;
            }
        }
        return -1;
    }
};