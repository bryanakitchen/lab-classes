
function stripInput(input) {
    const removeLetters = input.replace(/[-A-Za-z0-9,"'+*/=.&$!@#%^_-]/g, '');
    const array = removeLetters.split('');

    return array;
}

const word = stripInput('tes[]{}(){{{$!@#%^&*1ting_');
console.log(word);

module.exports = {
    stripInput
}