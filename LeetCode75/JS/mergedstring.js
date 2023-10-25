/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
    let str1 = 0;
    let str2 = 0;
    let len = word1.length > word2.length ? word1.length : word2.length;
    let result = '';
    for (let i = 0; i < len; i++) {
        result += (word1[i] ? word1[i] : '')+(word2[i] ? word2[i] : '');
    }
    return result;
}