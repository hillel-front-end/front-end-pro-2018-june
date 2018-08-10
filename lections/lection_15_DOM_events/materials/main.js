window.onload = function() {
    var block = document.querySelector('.block');

    // block.innerHTML = "HellO! <br /> world";
    // block.innerHTML += "<hr /> 123&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;213";
    // block.innerHTML += '<div style="height: 25px; border: 2px solid black;"></div>';


    // ------------------------------------

    // creation

    var span = document.createElement('SPAN');


    // set classname, content

    span.innerHTML = "Title 1";
    span.classList.add('foo-title');
    span.dataset.country = "ua";

    span.addEventListener('mouseover', function(event){
        event.target.classList.add('hover');
    });

    span.addEventListener('mouseout', function(event){
        event.target.classList.remove('hover');
    });

    console.log(span);


    // include to page/document

    block.appendChild(span);

    // -------------------------------------

    // var list = [
    //         {
    //             id: 1,
    //             title: 'Title 1'
    //         },
    //         {
    //             id: 2,
    //             title: 'Title 2'
    //         },
    //         {
    //             id: 3,
    //             title: 'Title 3'
    //         }
    //     ];

    var data = { 
        name: 'menu', 
        type: 'column', 
        items: [
            {
                title: 'Home',
                handler: 'homeAction'
            },
            {
                title: 'About'
            }
        ],
    };

    // if (!list.length) {
    //     return;
    // }

    var ulElem = document.createElement('UL');
    ulElem.classList.add('menu', data.type);

    // include li
    var li, list = data.items;
    for(var i = 0; i < list.length; i++){
        li = document.createElement('li');
        li.innerHTML = list[i].title;
        ulElem.appendChild(li);
    }

    document.body.appendChild(ulElem); // fragment
}
