function maxNumber (number:number,...arg) :void{
    let result = arguments[0];
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > result){
         result = arguments[i]
        }
    }
    console.log(result);
}

maxNumber(20,70,40)