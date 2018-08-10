window.onload = function(){

    // this.document.querySelector('form')
    //     .addEventListener('submit', function(event){
    //         event.preventDefault();

    //         console.log(event);
    //     });

    list = [
        {
            title: 'Копировать',
            action: 'copy'
        },
        {
            title: 'Выход',
            action: 'exit'
        }
    ];

    list.actions = {
        copy: copyAction,
        exit: exitAction,
        cut: cutAction
    }

    var menuFirst = createMenu(document.body, list);
    // var menuSec = createMenu(document, items);

    document
        .addEventListener('contextmenu', onContext)

    document
        .addEventListener('click', function(e){
            hideMenu(menuFirst);
            document.addEventListener('contextmenu', onContext);
            document.removeEventListener('contextmenu', preventDefault);
        })


    function onContext(e){
        e.preventDefault();
        // debugger;

        document.removeEventListener('contextmenu', onContext);
        document.addEventListener('contextmenu', preventDefault);

        menuFirst.style.left = e.offsetX + "px";
        menuFirst.style.top = e.offsetY + "px";
        showMenu(menuFirst);
    }

    function preventDefault(ev) {
        ev.preventDefault();
    }


    function showMenu(target) {
        target.classList.add('show');
    }

    function hideMenu(target) {
        target.classList.remove('show');
    }

    function createMenu(target, list){
        if (!target || !list) {
            return;
        }

        // var menu = document.createElement('DIV');
        // menu.classList.add('menu');

        // var item;
        // for(var i = 0; i < list.length; i++){
        //     item = document.createElement('div');
        //     item.classList.add('menu__item');
        //     item.addEventListener('click', list.actions[list[i].action]);

        //     var icon = document.createElement('span');
        //     icon.innerHTML = '&rarr;';
        //     item.appendChild(icon);

        //     var title = document.createElement('span');
        //     title.innerHTML = list[i].title;
        //     item.appendChild(title);
            
            
            
        //     menu.appendChild(item);
        // }

        // -----------------

        menu = document.querySelector('.menu.pattern').cloneNode();
        menu.classList.remove('pattern');

        for(var i = 0; i < list.length; i++){
            item = document
                .querySelector('.menu__item.pattern')
                .cloneNode(true);
            item.classList.remove('pattern');

            item
                .querySelector('.menu__title')
                .innerHTML = list[i].title;

            item.addEventListener('click', list.actions[list[i].action]);

            menu.appendChild(item);
        }


        target.appendChild(menu);

        return menu;
    }

    function copyAction(){
        console.log('copy');
    }

    function exitAction(){
        console.log('exit');
    }

    function cutAction(){
        console.log('cut');
    }
}