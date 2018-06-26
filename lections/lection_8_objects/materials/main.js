console.log('Lection 8');

// + Ассоциированные массивы
// + Обьекты основы
// + Свойства обьектов, методы обьектов
// + Вложенные обьекты
// + Перебор обьекта(for in), манипуляции свойствами, оператор delete


// var obj = {
//     x: 10,
//     name: 'Vasya'
// };

// var obj2 = new Object();


// obj.age = 23;
// obj2.age = 23;

// obj.list = ["", "", ""];
// obj.list.push(29);


// var arr = [2,8,9,4,5,3];
// arr.x = 50;

// arr['4x'] = 20;

// arr[3]
// obj[name]

// console.log(obj);
// console.log(arr);
// console.log(obj['name'], arr['3']);


// ---------------------------

// var obj = {
//     x: 10,
//     y: 'str',
//     z: 20,
//     a: 'Hello'
// };


// for(var item in obj){
//     console.log(item, obj[item]);
// }


// var arr = [2,7,3,63,6,36,3,73,7,37];
// arr[2000] = false;

// for(var i = 0; i < arr.length; i++){
//     if(arr[i] === undefined) {
//         continue;
//     }
//     console.log(arr[i]);
// }

// arr.x = 'sytr';

// for(var item in arr){
//     console.log(item, arr[item]);
// }


// ---------------------------

// this
// x = 700;
// var obj = {
//     x: 10,
//     y: 10,
//     sum: sum
// }

// var obj2 = {
//     x: 20,
//     y: 90,
//     sum: sum
// }

// var r = 30;

// function sum(x){
//     return this.x + x + this.y + r + inner();



//     function inner() {
//         return 10 + window.x;
//     }
// }


// sum(); // this -> window

// var res = obj.sum(20);
// var res2 = obj2.sum();
// console.log(res);
// console.log(obj, res);


// ---------------------------



var obj = {
    x: 10,
    y: 20,
    inner: {
        x: 20,
        z: 30
    },
    foo2: {
        k: 23,
        p: 13
    }
};

function convert(data) {
    var newData = {};

    for(var key in data) {
        if (typeof data[key] === 'object') {
            for(var innerKey in data[key]) {
                newData[innerKey] = data[key][innerKey];
            }

            continue;
        }
        newData[key] = data[key];
    }


    return newData;
}

console.log( convert(obj) );



function map(fn, list) {
    // fn(list[i])
    var resList = [];

    for(var i = 0; i < list.length; i++){
        resList.push(fn(list[i]));
    }

    return resList;
}


console.log( map( factorial, [7,8,5,8,4,8]) );

function factorial(n) {
    var res = 1;

    for(var i = 1; i <= n; i++){
        res *= i;
    }

    return res;
}
