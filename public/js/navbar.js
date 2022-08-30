window.onload = () => {
    const productOption = document.getElementById('products-option-left-navbar');
    const discoverOption = document.getElementById('discover-option-left-navbar');
    const contactOption = document.getElementById('contact-option-left-navbar');
    const productMenu = document.getElementById('products-second-left-navbar')
    const discoverMenu = document.getElementById('discover-second-left-navbar')
    const contactMenu = document.getElementById('contact-second-left-navbar')

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
}