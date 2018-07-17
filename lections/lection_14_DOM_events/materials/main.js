console.log('Lection_14');


window.onload = function(){
    var block = document.querySelector('.block');
    console.dir(block);



    // block.onclick = f;
    // block.onmousedown = f;

    // block.addEventListener('click', function(event){
    //     // do Something
    // });

    // block.addEventListener('click', f);
    // document.body.addEventListener('click', f);



    // function f(event){
    //     console.log(event, event.target, event.type);

    //     event.target.innerHTML = "CLICKED";
    // }



    // ------------------------------------------------------

    function handler(event){
        console.log(event.type, event);
    }


    // block.addEventListener('mouseover', handler); //hover
    // block.addEventListener('mouseout', handler);
    // block.addEventListener('mousemove', handler);

    // ----------------------------------

    // block.addEventListener('click', handler); 
    // block.addEventListener('mousedown', handler);
    // block.addEventListener('mouseup', handler);
    // block.addEventListener('dblclick', handler);

    // ----------------------------------
    var ox, oy;

    block.addEventListener('mousedown', function(event){
        ox = event.offsetX;
        oy = event.offsetY;
        document.addEventListener('mousemove', onMouseMove);
    });

    document.addEventListener('mouseup', function(event){
        document.removeEventListener('mousemove', onMouseMove);
    });

    function onMouseMove(event){
        block.style.left = event.clientX - ox + 'px';
        block.style.top = event.clientY - oy + 'px';
    }



    document
        .querySelector('.input')
        .addEventListener('change', function(event){
            console.log(event.type, event);
        });
}




