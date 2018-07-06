console.log('Lection 11');

// function Animal(name, age) {
//     this.name = name;
//     this.age = age;

    
// }

// Animal.prototype.sleep = function(){
//     return console.log(this.name + ' is sleep');
// }

// // Animal.prototype.foo = 20;

// var p1 = new Animal('Vasya', 4);
// var p2 = new Animal('Petya', 7);


// console.log(p1, p2);


// ------------------------------

// function C1() {
//     this.name = 'c1 name';
// }

// C1.prototype.eat = function(){}


// function C2() {

// }

// C2.prototype = new C1();
// C2.prototype.sleep = function(){}
// // C2.prototype.sleep = function(){}
// // C2.prototype.sleep = function(){}
// // C2.prototype.sleep = function(){}
// // C2.prototype.sleep = function(){}
// // C2.prototype.sleep = function(){}

// function C3() {
//     this.name = 'c3 object'
// }

// C3.prototype = new C2();
// C3.prototype.run = function(){}

// var p = new C3();

// console.log(p);



// --------------------------------


// function C1() {
//     this.name = 'c1 name';
// }

// C1.prototype.eat = function(){}


// function C2() {

// }

// C2.prototype = Object.create(C1.prototype);
// C2.prototype.sleep = function(){}

// function C3() {
//     this.name = 'c3 object'
// }

// C3.prototype = Object.create(C2.prototype);
// C3.prototype.run = function(){}

// var p = new C3();

// console.log(p);


// static method

function Animal(name) {
    this.name = name;
    
    if(!Animal.__count){
        Animal.__count = 0;
    }

    Animal.__count++;
}
Animal.getCount = function(){ return Animal.__count; }

Animal.prototype.sleep = function(){}

















var p1 = new Animal('vasya');
// console.log( p1.__proto__.constructor.getCount() ); // very bad

// console.log(p1)
console.log(Animal.getCount());