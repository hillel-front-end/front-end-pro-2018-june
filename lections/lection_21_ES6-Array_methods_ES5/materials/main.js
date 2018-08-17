console.log('Lection_21');

/*

+ Перебирающие методы ES5
+ var, let, const
+ генераторы
+ arrow functions

*/

// var list = [2, 5, 8, 23, 6, 76, 9, 89, 'dgsfds'];

// forEach

// list.forEach(function(item, pos, arr){
//     console.log(arr);
//     if (pos == 3) {
//         arr[pos] = item*item*200;

//         // break;
//         // return;
//     }
// });

// document
//     .querySelectorAll('.buy')
//     .forEach(function(item){
//         item.addEventListener('click', function(ev){
//             // this.dataset.id
//         });
//     })



// ----------------------

// map

// var newList = list.map(function(item, pos, arr){
//     // return!!!!!!!!!!!!!!

//     return item*2;
// });

// // arrCopy = arr.map(function(item){ return item; })

// console.log(newList);

// var objs = [
//     {
//         id: 1,
//         value: 20
//     },
//     {
//         id: 2,
//         value: 200
//     },
//     {
//         id: 3,
//         value: 25
//     }
// ];

// var data = objs.map(function(item){ return item.value;  })
// console.log(data);
// objs = data.map(function(item, pos){
//     return {
//         name: 'Title_' + pos,
//         value: item*20,
//         f: 's'
//     }
// });

// filter

// var filtred = list.filter(function(item, pos, arr){
//     return item > 20 || typeof item == 'string';
// });

// console.log(list, filtred);


function getRand() {
    return Math.floor(Math.random()*1000);
}

var goods = [
    {
        val: getRand(),
        star: 2
    },
    {
        val: getRand(),
        star: 0
    },
    {
        val: getRand(),
        star: 3
    },
    {
        val: getRand(),
        star: 7
    },
    {
        val: getRand(),
        star: 0
    }
];

// var prices = goods
//     .filter(function(item){
//         return item.star > 0;
//     })
//     .map(function(item){
//         // return item.val*item.star;
//         var newItem = item;
//         newItem.price = item.val*item.star;

//         return newItem;
//     })
//     .reduce(function(prev, item){
//         console.log(item)
//         return item.price + prev;
//     }, 0);

// console.log(prices);


// var list = [2, 5, 8, 23,'', 6, 76, 9, 89, 'dgsfds'];

// // every

// var isEvery = list.every(function(item, pos, arr){
//     return !!item;
// });

// console.log(isEvery);

// // some

// var isSome = list.some(function(item, pos, arr){
//     return !item;
// });

// console.log(isSome);


// reduce

// var list = [2, 5, 8, 23, 6, 76, 9, 89];


// var sum = list.reduce(function(prev, item, pos, arr){
//     console.log('prev='+ prev, item);
    
//     var sum = prev + item;

//     return sum;
// }, 0);

// var sum = list.reduce(function(prev, item, pos, arr){
//     prev.push(item*200);

//     return prev;
// }, []);

// var sum = list.reduce(function(prev, item, pos, arr){
//     return prev + item + '</li><li>';
// }, '<li>');

// console.log(sum);


// ------------------------------------------------

// + var, let, const
// + arrow functions



// console.log(a);

// if (true) {
//     const a = {val: 10}; // let, var, const
    
//     console.log(a);
// }
// console.log(a);



// -----------------

function foo(a) {
    return a*10;
}

var f1 = function(a){ return a*10 };

var f2 = a => a*10;

var f2 = (a, b) => {
    var res = 1 + b;
    
    return a*b*10 + res;
}

var list = [2, 5, 8, 23, 6, 76, 9, 89];


list.filter(function(item){
    return item > 20;
})
list.filter( item => item > 20 );

var sum = list.reduce((prev, item, pos, arr) => prev + item, 0);
console.log(sum);


obj = {
    x: 10,
    f: (a) => a + this.x
}

console.log( obj.f(10) );

// document.addEventListener('click', event => {
//     console.log('click', event.targets);
// })




function getByAge(list, age) {
    return list.filter(item => item.age > age);
}

getByAge(list, 11);
getByAge(list, 40);

var orders = [{
    id: 5,
    date: '21-01-2015',
    amount: 2
}, {
    id: 8,
    date: '24-01-2015'
}, {
    id: 21,
    date: '29-01-2015',
    amount: 4
}, {
    id: 78,
    date: '04-02-2015',
    amount: 8
}, {
    id: 23,
    date: '15-02-2015',
    amount: 8
}];

var res = orders.reduce((prev, item, pos, list) => {
    if (!item.amount) {
        return prev;
    }

    prev.count++;
    prev.sum += item.amount;

    if (pos === list.length - 1){
        return prev.sum / prev.count;
    }
    
    return prev;
}, { sum: 0, count: 0 });

console.log(res);