/**
 * @param {string} s
 * @return {number}
 */
var value= function(r) {
        if (r == 'I')
            return 1;
        if (r == 'V')
            return 5;
        if (r == 'X')
            return 10;
        if (r == 'L')
            return 50;
        if (r == 'C')
            return 100;
        if (r == 'D')
            return 500;
        if (r == 'M')
            return 1000;
        return -1;
    }
var romanToInt = function(s) {
        var result = 0;
    
        for(let i = 0 ; i<s.length; i++){
            var s1 = value(s.charAt(i));
            if( i+1 < s.length){
               var s2 = value(s.charAt(i+1));
                if(s1>=s2){
                   result = result +s1; 
                }
                 else{
                   result = result +s2-s1; 
                    i++
                 }
             }
            else{
                  result = result +s1;
            }
        }
    return result;
        
    }
    
    

let s = "III";
console.log(romanToInt(s));

