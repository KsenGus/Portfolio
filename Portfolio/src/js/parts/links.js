function links(){
    let hrefs = document.querySelectorAll('.promo a, .menu__item')
    for (let href of hrefs) {
        href.addEventListener('click', function(e){
            e.preventDefault();
            document.querySelector(href.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
    };
}
module.exports = links;