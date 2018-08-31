
// IIFE
var mod = (function(){
    var x = 10;

    function apiMethod() {
        SumMethod();
    }
    function SumMethod() {
        return x;
    }
    // apiMethod();

    return {
        apiMethod,
        foo: x + 10
    }
})();

console.log(mod)

mod.apiMethod();