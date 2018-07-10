console.log('Lection 12');

// function Animal(name, _age) {
//     var _count = 20;

//     this.name = name;
//     // this.age = age*_count;

//     this.getAge = function(){
//         return _age + _count;
//     }

//     this.getCount = function(){
//         return _count;
//     }

//     this.setCount = function(value){
//         _count = value;
//     }
// }

// Animal.prototype.run = function(){
//     return this.name + ' run';
// }


// var source = new Animal('Tiger', 13);
// console.log(source);
// console.log(source.run());


// инкапсуляция


// геттеры, сеттеры


// var obj = {
//     x: 10,
//     str: 'hello! ',
//     get sum() {
//         console.log('getter sum');

//         return this.x*2;
//     },
//     set sum(value){
//         console.log('setter sum', arguments);

//         var list = value.split(' ');

//         if (this.list && this.list.length) {
//             this.list = this.list.concat(list);

//             return;
//         }

//         this.list = list;
//     }
// }

// console.log(obj.sum);
// obj.sum = 'hello world!';
// obj.sum = 'salkma aljsdnlasj nljasn djlnljansdlj nas,md nas d'


// -----------------------


function SuperArray(n, m, options){
    var arr = [];
    arr.length = n;

    for(var i = 0; i < arr.length; i++){
        arr[i] = [];
        arr[i].length = m;
        for(var j = 0; j < arr[i].length; j++){
            arr[i][j] = Math.floor(Math.random()*(options.max - options.min)) + options.min;
        }
    }

    this.getArr = function(){
        return arr;
    }

    this.setArr = function(value){
        arr = value;
    }
}

SuperArray.prototype.render = function(separator) {
    var arr = this.getArr();

    for(var i = 0; i < arr.length; i++){
        for(var j = 0; j < arr[i].length; j++){
            document.write(arr[i][j] + ' ');
        }
        document.write('<br />');
    }

    var sepList = [];
    for(var i = 0; i < arr[0].length; i++){
        sepList.push(separator)
    }
    document.write(sepList.join('') + '<br />');
}

SuperArray.prototype.clear = function(direction, k) {
    var arr = this.getArr();
    var strategy = {
        row: function(k){
            for(var i = 0; i < arr[k].length; i++){
                arr[k][i] = 0;
            }
        },
        column: function(k){
            for(var i = 0; i < arr.length; i++){
                arr[i][k] = 0;
            }
        }
    }

    strategy[direction](k);
    this.setArr(arr);
}


var obj = new SuperArray(5, 10, { min: 10, max: 100 });

console.log(obj.getArr());
obj.render('!');
obj.clear('column', 3);
obj.render('!');
obj.clear('row', 0);
obj.render('!');
