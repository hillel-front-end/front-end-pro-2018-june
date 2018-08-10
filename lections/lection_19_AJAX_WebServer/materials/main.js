console.log('Lection_19');


// creating
var xhr = new XMLHttpRequest();


var url = '/data.json';
// config
xhr.open('GET', url, true);


xhr.onreadystatechange = function() {
    if(xhr.readyState != 4) {
        return;
    }

    var resp = JSON.parse(xhr.responseText);

    renderList(resp.list);
}


// send
xhr.send();

function renderList(list) {
    for(var i = 0; i < list.length; i++){
        var li = document.createElement('li');
        li.innerHTML = list[i];
        document.querySelector('.list').appendChild(li);
    }
}

// console.log(xhr);
// setTimeout(function(){
//     console.log(JSON.parse(xhr.responseText));
// }, 1000)
// var res = JSON.parse(xhr.responseText);
// console.log(res);


// promise


