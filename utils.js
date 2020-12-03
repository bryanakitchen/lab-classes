
function stripInput(input) {
    return input.match(/[(){}\[\]]/g);
}

const word = stripInput('tes[]{}(){{{$!@#%^&*1ting_');
console.log(word);

module.exports = {
    stripInput
}