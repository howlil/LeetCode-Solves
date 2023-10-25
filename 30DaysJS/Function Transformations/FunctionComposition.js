var compose = function(functions) {
    return function(x) {
        let currentNum = x;
        functions.reverse().forEach((fn) => {
            currentNum = fn(currentNum);
        });
        return currentNum;
    };
};  