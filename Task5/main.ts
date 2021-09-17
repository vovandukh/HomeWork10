let btnAdd = document.querySelector('.btnAdd');
let inputWords = document.querySelector('.inputWords');
let btnReset = document.querySelector('.btnReset');
let cenzor = document.querySelector('.cenzor');
let textarea = document.querySelector('.inputTextarea');
let arr: string[] = []

btnAdd.addEventListener('click', () => {
    let badWords = (<HTMLInputElement>inputWords).value;
    if (badWords != '') {
        arr.push(badWords)
        inputWords.classList.remove('is-invalid')
        document.querySelector('.badWords').innerHTML += badWords + ' ';
        (<HTMLInputElement>inputWords).value = ''
    } else {
        inputWords.classList.add('is-invalid')
    }
})

btnReset.addEventListener('click', () => {
    document.querySelector('.badWords').innerHTML = '';
    arr = [];
});
function createStar(elem): void {
    let starCount;
    for (let i = 0; i < elem.lenght; i++) {
        starCount += '*'
    }
    return starCount
    console.log(starCount);
}

cenzor.addEventListener('click', () => {
    let value: string = (<HTMLInputElement>textarea).value;
    let s = value.split(' ');
    if (value) {
        textarea.classList.remove('is-invalid');
        arr.forEach(elem => {
            s.forEach(i => {
                if (elem == i) {
                    let star = '';
                    for (let i = 0; i < elem.length; i++) {
                        star += '*'
                    }
                    let index: number = s.indexOf(elem);
                    s.splice(index, 1, star)
                }
                (<HTMLInputElement>textarea).value = s.join(' ')
            })
        })

    } else {
        textarea.classList.add('is-invalid');
    }
})

