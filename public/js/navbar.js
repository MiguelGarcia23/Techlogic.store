window.onload = function (){
    const productOption = document.getElementById('products-option-left-navbar');
    const optioLeftAccesories = document.querySelector('.option-left-navbar-with-icon')
    const accesoriesOption = document.querySelector('.third-left-navbar')
    const discoverOption = document.getElementById('discover-option-left-navbar');
    const contactOption = document.getElementById('contact-option-left-navbar');
    const productMenu = document.getElementById('products-second-left-navbar');
    const discoverMenu = document.getElementById('discover-second-left-navbar');
    const contactMenu = document.getElementById('contact-second-left-navbar');
    const burgerMobile = document.querySelector('.burger-menu')
    const slideMobile = document.querySelector('.slide-menu')
    const iconXMobile = document.querySelector('.icono-x')
    
    /* Menu desplegable PRODUCTOS */
    productOption.addEventListener('mouseover', () => {
        productMenu.style.display = 'block'
    })
    productOption.addEventListener('mouseout', () => {
        productMenu.style.display = 'none'
    })
    productMenu.addEventListener('mouseover', () => {
        productMenu.style.display = 'block'
    })
    productMenu.addEventListener('mouseout', () => {
        productMenu.style.display = 'none'
    })
    optioLeftAccesories.addEventListener('mouseover', () => {
        accesoriesOption.style.display = 'block'
    })
    productOption.addEventListener('mouseout', () => {
        accesoriesOption.style.display = 'none'
    })
    
    /* Menu desplegable DESCUBRE */
    discoverOption.addEventListener('mouseover', () => {
        discoverMenu.style.display = 'block'
    })
    discoverOption.addEventListener('mouseout', () => {
        discoverMenu.style.display = 'none'
    })
    discoverMenu.addEventListener('mouseover', () => {
        discoverMenu.style.display = 'block'
    })
    discoverMenu.addEventListener('mouseout', () => {
        discoverMenu.style.display = 'none'
    })

    /* Menu desplegable CONTACTO */
    contactOption.addEventListener('mouseover', () => {
        contactMenu.style.display = 'block' 
    })
    contactOption.addEventListener('mouseout', () => {
        contactMenu.style.display = 'none'
    })
    contactMenu.addEventListener('mouseover', () => {
        contactMenu.style.display = 'block'
    })
    contactMenu.addEventListener('mouseout', () => {
        contactMenu.style.display = 'none'
    })


    /* Menu version MOVILE */
    burgerMobile.addEventListener('click', () => {
        slideMobile.style.display = 'block'
    })
    iconXMobile.addEventListener('click', () => {
        slideMobile.style.display = 'none'
    })

}