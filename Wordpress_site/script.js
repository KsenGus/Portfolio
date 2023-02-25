let links = document.querySelectorAll('a[href^="#"]'),
    buttons = document.getElementsByTagName('button'),
    layer = document.querySelector('.layer'),
    form = document.querySelector('.form'),
    formClose = document.querySelector('.form-close');

for (let link of links) {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const id = link.getAttribute('href');
        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
        });
    });
};

for(let i = 0; i < buttons.length - 1; i++){
    buttons[i].addEventListener('click', function(){
        layer.style.display = 'block';
    });
}

formClose.addEventListener('click', function(){
    layer.style.display = 'none';
});