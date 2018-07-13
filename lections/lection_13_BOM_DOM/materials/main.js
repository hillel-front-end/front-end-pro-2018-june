/*

+ Глобальные обьекты Window, Document, Navigator, Location
+ JS обращение в html
+ html коллекция
+ html элемент
+ Обьекты classList, className

*/
    
window.onload = function(){
    // var block = document.querySelector('.block');
    // console.dir(block);

    // block.title += ' hahaha';
    // block.style.fontSize = '38px';

    // // block.className += ' toRight';

    // // block.classList.add('toRight');
    // // block.classList.remove('block');


    // var items = document.querySelectorAll('.container .item');

    // for(var i = 0; i < items.length; i++){
    //     console.log(items[i]);

    //     items[i].innerHTML += '!';
    // }

    // console.log(items);

    // -------------------------------

    var blocks = document.querySelectorAll('.block-random');

    var maxX, maxY;
    
    function getRandom(min, max){
        return Math.floor(Math.random()*(max - min)) + min;
    }

    setInterval(function(){
        for(var i = 0; i < blocks.length; i++){
            maxX = window.innerWidth -  blocks[i].clientWidth;
            maxY = window.innerHeight - blocks[i].clientHeight;
    
            blocks[i].style.left = getRandom(0, maxX) + "px";
            blocks[i].style.top = getRandom(0, maxY) + "px";
            blocks[i].style.width = getRandom(50, 150) + "px";
            blocks[i].style.height = getRandom(50, 150) + "px";
        }
    }, 500);

}