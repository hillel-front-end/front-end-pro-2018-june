

// console.log(1)



// var promise = new Promise(function(resolve, reject){
//     // async

//     var time = Math.floor(Math.random()*1000+500);

//     setTimeout(function(){
//         console.log(2);

//         if (time > 1000) {
//             resolve({
//                 time: time,
//                 name: 'Name'
//             });
//         }

//         reject(function(){
//             console.log(time);
//         });
//     }, time);
// });


// promise.then(
//     function(data){
//         console.log(4, 'resolve, because data =  ', data);
//     }, 
//     function(data){
//         console.log(4, 'reject');
//         data();
//     }
// );

// console.log(3);




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


doAjax('GET', '/data.json')
    .then(function(resp){
        console.log(resp);
    },
    function(error){
        console.error(error);
    });

// doAjax('GET', 'https://itunes.apple.com/search?term=beyonce&entity=musicVideo')
//     .then(function(resp){
//         console.log(resp);
//     });

// doAjax('GET', '/doo.json')
//     .then(function(resp){

//     });


// ----------------------
// var listReq = doAjax('GET', '/list')
// listReq.then(function(resp){

// });
