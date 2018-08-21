console.log('Lection_22');



// function* gen(a, b) {
//     // yield

//     yield a;
//     yield b;

//     yield a + b;

//     yield 'Hello';
// }

// var foo = gen(10, 20);

// console.log(foo);

// console.log( foo.next() );
// console.log( foo.next() );
// console.log( foo.next() );
// console.log( foo.return() );
// console.log( foo.next() );
// console.log( foo.next() );



function* arrToGen (){
    for(let i = 0; i < arguments.length; i++) {
        yield arguments[i];
        if (i == arguments.length-1) {
            yield 'LAST';
        }
    }
}

// var data = arrToGen(JsontoObj, mapToData, removeNulls, sendToMS, objToJSON, sendResp);

let list = [21, 25, 14, 59];
let str = '1231elkgmlksdnojn';

// for(let item of str) {
//     console.log(item);
// }

for(let item of arrToGen(46,45,645,7,457,45)) {
    console.log(item);
}