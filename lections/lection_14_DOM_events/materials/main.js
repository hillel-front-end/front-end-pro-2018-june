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

    block.addEventListener('mousemove', function(event){
        block.querySelector('.inner')
            .innerHTML = "X:" + event.offsetX + " <br /> Y: "+ event.offsetY;
    });

    document.addEventListener('mousemove', function(event){
        block.querySelector('.outer')
            .innerHTML = "XO:" + event.clientX + " <br /> YO: "+ event.clientY;
    });

}




