var btnAdd = document.querySelector('.btnAdd');
var inputWords = document.querySelector('.inputWords');
var btnReset = document.querySelector('.btnReset');
var cenzor = document.querySelector('.cenzor');
var textarea = document.querySelector('.inputTextarea');
var arr = [];
btnAdd.addEventListener('click', function () {
    var badWords = inputWords.value;
    if (badWords != '') {
        arr.push(badWords);
        inputWords.classList.remove('is-invalid');
        document.querySelector('.badWords').innerHTML += badWords + ' ';
        inputWords.value = '';
    }
    else {
        inputWords.classList.add('is-invalid');
    }
});
btnReset.addEventListener('click', function () {
    document.querySelector('.badWords').innerHTML = '';
    arr = [];
});
function createStar(elem) {
    var starCount;
    for (var i = 0; i < elem.lenght; i++) {
        starCount += '*';
    }
    return starCount;
    console.log(starCount);
}
cenzor.addEventListener('click', function () {
    var value = textarea.value;
    var s = value.split(' ');
    if (value) {
        textarea.classList.remove('is-invalid');
        arr.forEach(function (elem) {
            s.forEach(function (i) {
                if (elem == i) {
                    var star = '';
                    for (var i_1 = 0; i_1 < elem.length; i_1++) {
                        star += '*';
                    }
                    var index = s.indexOf(elem);
                    s.splice(index, 1, star);
                }
                textarea.value = s.join(' ');
            });
        });
    }
    else {
        textarea.classList.add('is-invalid');
    }
});
