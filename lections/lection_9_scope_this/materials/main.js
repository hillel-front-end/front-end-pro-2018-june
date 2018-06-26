console.log('Lection_9');


// var obj = {
//     x: 10,
//     str: 'asdasd',
//     sun: function(){},
//     f1: renderObject 
// }



// function renderObject() {
//     for(var item in this){
//         if (this[item] === arguments.callee) {
//             continue;
//         }

//         document.write(item + ': ' + this[item] + '<hr />');
//     }
// }


// obj.f1();


// ------------------


// var data = {
//     m1: function(){ 
//         console.log('m1');
        
//         return this;
//     },
//     m2: function(){ 
//         console.log('m2');
        
//         return this;
//     },
//     m3: function(){ 
//         console.log('m3');
        
//         return this;
//     }
// }



// ------------------


var obj = {
    x: 10,
    y: 20,
    addRecord: addRecord
}


function addRecord() {
    var flag = false;
    if (typeof arguments[arguments.length - 1] === 'boolean'){
        flag = arguments[arguments.length - 1];
    }

    for(var i = 0; i < arguments.length; i++){
        if (typeof arguments[i] === 'boolean') {
            continue;
        }

        /* v1 */
        // for(var key in arguments[i]){
        //     if(flag && this[key]){
        //         continue;
        //     }
        //     this[key] = arguments[i][key];
        // }

        /* v2 */
        var res = flag ? Object.assign({}, arguments[i], this) : 
        Object.assign({}, this, arguments[i]);
        
        Object.assign(this, res);
    }

    
}

obj.addRecord({x: 90},{z: 60},{str: 'asdasdf'}, true);


