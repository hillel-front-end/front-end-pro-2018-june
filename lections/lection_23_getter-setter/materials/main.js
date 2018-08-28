console.log('Lection_23');

// + get/set
// + Object.defineProperty
// + гетерры/сеттеры в функциях


// x = 10;
// console.log(x);



// var obj = {
//     x: 10,
//     y: 20,

//     get foo() {
//         return this.x;
//     },

//     get result() {
//         return this.x + this.y;
//     },

//     set result(p1){
//         let vals = p1.split(' ');

//         this.x = +vals[0];
//         this.y = +vals[1];
//     }
// }


// console.log( obj.result );
// obj.x = 40;
// console.log( obj.result );

// obj.result = '120 40';
// console.log( obj.foo() );

// --------------------

// class Animal {
//     constructor (age) {
//         this.age = age;
//     }

//     get ageValue() {
//         return this.age;
//     }

//     set ageValue(val) {
//         this.age = val;
//     }
// }

// var barsik = new Animal(10);


// --------------------

// дескрипторы

// const obj = {
//     str: 'hello',
//     x: 10,
//     y: 40
// }

// Object.defineProperty(obj, 'y', {
//     value: obj,
//     writable: false,
//     configurable: false,
//     enumerable: false
// });


// for(item in obj) {
//     console.log(item)
// }
// console.log(obj);

// debugger;

// Object.defineProperty(obj, 'y', {
//     value: 30,
// });

// Object.defineProperty(obj, 'foo', {
//     configurable: false,
//     get() {
//         return this.x + this.y;
//     },
//     set(value) {
//         this.v = value;
//     }
// });

// Object.defineProperty(obj, 'foo', {
//     configurable: false,
//     get() {
//         return this.x + this.y + (this.v || 0);
//     },
//     set(value) {
//         this.v = value;
//     }
// });

// console.log(obj);

// var data = {
//     // set info(info){
//     //     this.infoVal = info
//     // },
//     // get info(){
//     //     return this.infoVal;
//     // }
// }


// Object.defineProperty(data, 'model', {
//     set(value){
//         if (this.str) {
//             this.str = this.str.split(value);

//             this.info = {
//                 symbol: value,
//                 count: this.str.length - 1
//             };
//         } else {
//             this.str = value;
//         }
//     },
//     get() {
//         return this.info;
//     }
// });

// data.model = 'Hello, how, are you?'
// data.model = ', ';
// console.log(data.str);
// console.log(data.model)


// --------------
var operations = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b,
    '%': (a, b) => a % b
}

var obj = {
    x: 10,
    p: 20,
    z: 300
}

Object.defineProperty(obj, 'model', {
    set(value){
        for(let key in value) {
            let oper =  value[key].operation;
            let val = value[key].value;

            this[key] = operations[oper](this[key] || 0, val);
        }
    }
});

obj.model = {
    x: { value: 33, operation: '*' }, 
    z: { value: 75, operation: '+' },
    k: { value: 4, operation: '%' }
};

obj.model = {
    x: { value: 33, operation: '*' }, 
    z: { value: 75, operation: '+' },
    k: { value: 4, operation: '%' }
};


console.log(obj)



