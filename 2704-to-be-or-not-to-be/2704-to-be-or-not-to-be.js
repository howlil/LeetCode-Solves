/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    return{
     toBe:(t)=>{
         if(val===t){
             return true;
         }else{
             throw new Error("Not Equal")
         }
     },   
    notToBe:(t)=>{
         if(val!==t){
             return true;
         }else{
             throw new Error("Equal")
         }
     },  
          
   }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */