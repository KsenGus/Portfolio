function menu(){
    let hamburger = document.querySelector('.hamburger'),
    _close = document.querySelector('.menu__close'),
    menu = document.querySelector('.menu'),
    counter = 0;

    hamburger.addEventListener('click', function(){
        counter ++;
        menu.style.display = 'block';
        if(counter == 2){
            menu.style.display = 'none';
            counter = 0;
        }
    });
    
    _close.addEventListener('click', function(){
        menu.style.display = 'none';
        counter = 0;
    });

    document.addEventListener( 'click', (e) => {
        if ( !(e.composedPath().includes(menu)) && !(e.composedPath().includes(hamburger))) {
                menu.style.display = 'none'; 
                counter = 0;
        }
    });
}
module.exports = menu;