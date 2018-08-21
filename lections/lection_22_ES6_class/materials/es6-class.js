console.log('Lection_22');


obj = {
    foo: function(a, b){},
    sum(a, b) {
        
    }
}



class Animal {
    constructor(size, name) {
        this.size = size;
        this.static = 4;
        this.name = name;
    }

    foo() {}

    // static eat() { // static
    //     console.log('eat');
    // }
}


class Human extends Animal {
    constructor(name, age, size){
        // super
        super(size);

        this.name = name;
        this.age = age;
        

        // var _counter = 200;

       
        // this.getFoo = () => _counter;
        // this.setFoo = value => _counter = value;
        // this.run = function() {
        //     console.log(this.name, 'run', _counter);
    
        //     _counter++;
        // }
    }

    // sleep() {
    //     console.log(this.name, 'sleep');
    // }

    // static getCount() {
    //     console.log('count: ****');
    // }
}

var p1 = new Human('Name', 10, 3);

console.log(p1);



// -----------------



class Parent {
    constructor(name) {
        this.name = name; 
    }
    f1(){}
}


class Child extends Parent {
    // constructor(p1){
    //     super(p1);
    // }

    f2(){}
}

var ex = new Child('foo');

console.log(ex);