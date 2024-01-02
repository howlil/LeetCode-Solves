/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    return function(x) {
        let currentNum = x;
        functions.reverse().forEach((fn) => {
            currentNum = fn(currentNum);
        });
        return currentNum;
    };
};


/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */