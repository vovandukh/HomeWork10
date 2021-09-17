
function getSqrt (number:any) : void {
    number == '' ? console.log('Будь ласка, введіть число!') : 
    number < 0 ? console.log('Введіть додатнє число.') :
    number > 0 ? console.log(Math.sqrt(number)) : console.log('Повинно бути числове значення.');
}

getSqrt(prompt())