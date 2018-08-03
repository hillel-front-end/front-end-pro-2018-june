console.log('Lection 17');




// obj = {
//     method: function(){
//         console.log(this);
//     }
// }

// function method(){
//     this.name = 'NAME';
//     console.log(this);
    

//     // return {
//     //     x: 10
//     // };
// }   

// obj.method();

// window.method();

// console.log(console);

// --------------------

// call, apply
// global = 200;

// obj = {
//     m: method
// }

// obj.m(8, 10);

// function method(a, b) {
//     console.log(this);

//     return a + b + this.global;
// }

// data = {
//     x: 10,
//     y: 20,
//     global: 300
// }

// method(2, 4);

// console.log('-------------');

// // obj.m.call(this, 2, 4);

// method.call({
//     x: 100,
//     y: 200
// }, 2, 4);

// // data.method();

// function f(){ // одалживание метода
//     // console.log([].splice.call(arguments, 1, 5), arguments);
//     // console.log(arguments.slice(1, 5));
//     // return [].slice.call(arguments, 1, 5);
//     var args = [].slice.call(arguments, 0);

//     return args.reverse();
// }

// console.log(f(2, 6, 76,3 ,3, 3, 4,23,5, 23,4));


// apply


// function f(){ // одалживание метода
//     return [].slice.call(arguments, 1, 5);
//     return [].slice.apply(arguments, [1, 5]);
// }

// console.log(f(2, 6, 76,3 ,3, 3, 4,23,5, 23,4));

// function include(){
//     var pos = arguments[1];
//     var count = arguments[2];
//     var items = [].slice.call(arguments, 3);
    
//     // arguments[0].splice(pos, count, items);
//     var spliceArgument = [pos, count].concat(items);
//     console.log(spliceArgument);
     
//     [].splice.apply(arguments[0], spliceArgument);
    
//     return arguments[0];
// }

// console.log(include([1, 2, 3, 4, 5], 2, 1, '!', '!', '!'));


// bind

// global = 200;

// function method(a, b) {
//     console.log(this);

//     return a + b + this.global;
// }


// var source = {
//     a: 200,
//     b: 300
// }

// data = {
//     x: 10,
//     y: 20,
//     global: 300,
//     sum: sum.bind(source)
// }

// var newMethod = method.bind(data);

// // console.log(newMethod, method)

// console.log( method(2, 4) );
// console.log( newMethod(2, 4) );
// console.log( method.bind({})(2, 4) );



// function sum() {
//     return this.a + this.b;
// }


// ----------------


window.onload = function(){
    document.body.addEventListener('click', function(ev){
        console.log(this);
        var self = this;

        var list = this.querySelectorAll('ul li');
        for(var i = 0; i < list.length; i ++){
            // list[i].dataset.id = i;
            list[i]
                .addEventListener('mouseover', callback.bind(this, i));
        }
        
            
    });
}

function callback(pos, ev){
    console.log(pos)

    if (pos == 0 || pos == 4) {
        console.log('first or last', pos)
    }
    // console.log(self);
    // console.log(this, ev.target, this.dataset.type);
}