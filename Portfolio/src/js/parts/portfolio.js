function portfolio(){
    let links = document.querySelectorAll('.portfolio__link'),
    portfolioContents = document.querySelectorAll('.portfolio__content');

    for(let i = 0; i< links.length; i++){
        links[i].addEventListener('click', function(){
            links.forEach((item) => {
                item.classList.remove('active');
            });
            links[i].classList.add('active');
            portfolioContents.forEach((item) =>{
                item.style.display = 'none';
            });
            portfolioContents[i].style.display = 'grid';
        })
    }
}
module.exports = portfolio;