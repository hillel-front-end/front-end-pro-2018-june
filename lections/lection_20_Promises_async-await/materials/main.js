console.log('Lection_20');


function async(callback){
    return new Promise(function(resolve, reject){
        callback(resolve, reject);
    });
}

function setTimer(resolve, reject){
    setTimeout(function(){
        // console.log(resolve, reject);
        console.log(1);
        reject(1);
    }, 1000);
}


// async(setTimer)
//     .then(function(resp){
//         console.log(resp);
//         resp += 100;

        // return new Promise(function(resolve, reject){
        //     reject(resp);
        // })

//         return Promise.reject(resp);
//     }, function(err){ console.error(err); return err;}) // return Promise.resolve()
//     .then(function(data){
//         console.log(data);
//         data /= 10;

//         return data;
//     }, function(err){ console.log(err); return err;})  // return Promise.resolve()
//     .then(function(foo){
//         console.log(foo);
//     })


// ---------------------------

// async(setTimer)
//     .then(function(resp){
//         console.log(resp);
//         resp += 100;

//         return resp
//     }, function(value){ console.log('reject1'); return Promise.resolve(value) }) 
//     .then(function(data){
//         console.log(data);
//         data /= 10;

//         if (data > 0) {
//             return data;
//         }

//         return Promise.reject(data);
//     }, function(value){ console.log('reject2'); return Promise.reject(value) })  
//     .then(function(foo){
//         console.log(foo);
//     }, function(value){ console.log('reject3'); return Promise.reject(value) });


// ---------------------------

// only 1 param (resolve function)
// async(setTimer)
//     .then(function(){
//         doAjax()
//     })
//     .then()
//     .then()
//     .catch(function(err){
//         console.log(err);
//     })


// ------------------------------------

function doAjax(method, url){
    var xhr = new XMLHttpRequest();

    xhr.open(method, url, true);

    return new Promise(function(resolve, reject){
        xhr.onreadystatechange = function() {
            if(xhr.readyState != 4) {
                return;
            }

            var resp = JSON.parse(xhr.responseText);

            if (xhr.status != 200) {
                reject(xhr.statusText);
            }

            // if(!resp.x) reject();

            resolve(resp);
        }

        xhr.send();
    });
}


var data, data2;


// doAjax('GET', '/data.json')
//     .then(function(resp){
//         data2 = resp;
// // 
//         return doAjax('GET', '/data2.json');
//     })
//     .then(function(resp){
//         data = resp;
// // 
//         console.log(data, data2);
//     });

// ------------------------

// Promise.all()

function gPr(){
    var local = Math.random()*100;

    return new Promise(function(resolve, reject){
        // if (local > 50) {
            resolve(local);
        // }

        // reject(local);
    })
}

Promise
    .all([gPr(), gPr(), gPr(), gPr(), gPr(), gPr()])
    .then(function(values){
        console.log(values);
        var bad = [];
        for(var i = 0; i < values.length; i++){
            if (values[i] < 50) 
                bad.push(values[i]);
        }

        console.log(bad)
    })
    .catch(function(err){
        console.log(err);
    })
    

var asyncs = [
];
var list = ['', 2, 3, 4]

for(var i = 0; i < list.length; i++){
    asyncs.push( doAjax('GET', '/data'+ list[i] +'.json') );
}


// --------------------------- task
Promise
    .all(asyncs)
    .then(runAfter([doIt1, doIt2, doIt3]))



// ---------------------------
Promise
    .all(asyncs)
    .then(doIt1)
    .then(doIt2)
    .then(doIt3)


// ----------------------------------
