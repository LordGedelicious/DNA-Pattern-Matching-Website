module.exports = {
    validateSearch: function validateSearch(input) {
        const regex1 = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})\s\w+$/i;
        const regex2 = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}\s\w+$/
        let test1 = regex1.test(input);
        let test2 = regex2.test(input);
        console.log(validateSearch('30/12/2020 Autisme'));
        if (test1) {
            console("Sukses di test1");
            return true;
        } else if (test2) {
            console("Sukses di test2");
            return true;
        } else {
            console("Gagal di test1 dan test2");
            return false;
        }
    }
}