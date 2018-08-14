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

//         // return new Promise(function(resolve, reject){
//         //     reject(resp);
//         // })

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
async(setTimer)
    .then()
    .then()
    .then()
    .catch(function(err){
        console.log(err);
    })