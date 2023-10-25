// Mendefinisikan fungsi filterElementsFromArray dengan dua parameter

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */


var filter = function(arr, fn) {
    let filterArr = [];
    arr.forEach((e,i) => {
        if(fn(e,i)) {
            filterArr.push(e);
        }
    });
    return filterArr;
};