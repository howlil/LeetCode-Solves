/**
 * @return {Function}
 */
 var args=[{},null,42];
var createHelloWorld = function() {
    
    return function(...args) {
        return "Hello World";
    }
};

