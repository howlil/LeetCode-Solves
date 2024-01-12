/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let x = 0;
    let y = s.length -1;
    
    while(x<y){
        let temp = 0;
        temp = s[x];
        s[x] = s[y];
        s[y] = temp;
          x++;
          y--;
    }

};