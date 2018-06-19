console.log('Lection_7');

// function f(e, b){
// 	console.log(a);
//  	var a = 10;

// 	return e + b + c()(12);
// }

// function c(d) {
// 	if (!d) {
// 		d = 12;
// 	}
// 
// 	return function(e){
// 		return e + d;
// 	}
// }

// console.log(f(9, 20));


// --------------------


// console.log(a, b);
// console.log(b);
// // f == undefined
// // f();
// f1();

// a = 10;
// var b = 20;
// var f = function(){ // анонимная
//     console.log('f called')
// }

// function f1() {
//     console.log('f1 called');
// }

// f();
// f1();


// --------------------------------

// var b = 20;

// function f(a) {
//     var z = 10;

//     return f2(8);

//     function f2(c){
//         return a + b + z + c + f3();


//         function f3(){
//             return z;
//         }
//     }
// }

// var res = f(12);

// console.log(res);

// --------------------------------


// function f(a, b){
//     var sum = 0;

//     console.log(arguments);

//     for(var i = 0, arr = []; i < arguments.length; i++){
//         sum += arguments[i];
//         arr.push(arguments[i]);
//     }

//     return arr;
// }

// f(2,6,3,4,3,36,36,3,36,36,3,36,36);

// ------------------


function factory(arr) {
    var i = 0;
    return function(func){
        
        // return arr.shift();
        return func(arr[i++]);
    }
}


var step = factory([2, 8, 9, 2, 4]);

// step();
// step();
console.log(step(sqr));
console.log(step(sqr));
console.log(step(f1));
console.log(step(sqr));

function sqr(x) {
    return x*x;
}

function f1(x) {
    return x - 2 + 4*(x-2);
}