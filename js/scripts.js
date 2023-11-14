document.querySelector('.burger-menu').addEventListener('click', () => {
    document.querySelector('.header-nav-burger').classList.toggle('header-nav-burger--active');
    
    let body = document.querySelector('body');
    if(!body.style.overflowY)
        body.style.overflowY = "hidden";
    else
        body.style.overflowY = "";
});

window.addEventListener('resize', () => {
    document.querySelector('..header-nav-burger').classList.remove('.header-nav-burger--active');
    let body = document.querySelector('body');
    if(body.style.overflowY)
        body.style.overflowY = "";
});