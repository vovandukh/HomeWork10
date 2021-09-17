function maxNumber(number) {
    var arg = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg[_i - 1] = arguments[_i];
    }
    var result = arguments[0];
    for (var i = 0; i < arguments.length; i++) {
        if (arguments[i] > result) {
            result = arguments[i];
        }
    }
    console.log(result);
}
maxNumber(20, 70, 40);
