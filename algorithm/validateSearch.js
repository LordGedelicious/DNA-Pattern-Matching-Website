module.exports = {
    validateSearch: function validateSearch(input) {
        const regex1 = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}\s\w+$/;
        const regex2 = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$$/g;
        const regex3 = /^\w+$/g;
        let dateAndName = regex1.test(input);
        let date = regex2.test(input);
        let name = regex3.test(input);
        if (dateAndName) {
            console.log("Sukses di dateAndName");
            return "dateAndName";
        } else if (date) {
            console.log("Sukses di date");
            return "date";
        } else if (name) {
            console.log("Sukses di name");
            return "name";
        } else {
            console.log("Gagal");
            return false;
        }
    }
}