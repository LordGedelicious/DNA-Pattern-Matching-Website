module.exports = { 
    
    validateInput: function validateInput(input) {
        const regex = /(A|T|C|G)*/g;
        var a = Array.from(input.match(regex)).toString().replace(/,\s*$/, "");
        console.log(a);
        console.log(input);
        if (a.length != input.length) {
            return false;
        } else {
            return true;
        }
    }
};

