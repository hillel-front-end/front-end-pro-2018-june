// var x = 10;
// y = 20;


// function f1() {
//     console.log(x, y);
// }

// function f2(){
//     var y = 100;

//     console.log(x,y);

//     var x = f3();

//     function f3() {
//         var x = 500;

//         console.log(x, y);

//         return x;
//     }
// }

// f1();
// f2();

// console.log(x, y);



// ----------------------
// var b = 40;

// function f1(a) {
//     console.log(a + b + z);
// }

// function f2() {

//     var z = 20;

//     f1(z);
// }

// f2();


// ----------------------


// function f1(a) {
//     var z = 10;
    
//     function f2(b) {
//         return a + b + z;
//     }
    

//     console.log(f2)
//     return f2;
// }

// var res = f1(30);

//  res = f1(120);

// console.log(res(40));


// -------------------------

function gen(start, step) { // LE = { start: 5, step: 2 }, scope = global
    return function () { // LE = {}, scope = gen.LE
        start = start + step;

        return start; 
    }
}

step = gen(5, 2);
