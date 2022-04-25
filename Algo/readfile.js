// masi ga tau salah keknya

function readfile(filename) {
    var content = fs.readFileSync(filename, 'utf8');
    return content;
}