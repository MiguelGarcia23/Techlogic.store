window.onload = () => {
    const productOption = document.getElementById('products-option-left-navbar');
    const discoverOption = document.getElementById('discover-option-left-navbar');
    const contactOption = document.getElementById('contact-option-left-navbar');
    const productMenu = document.getElementById('products-second-left-navbar')
    const discoverMenu = document.getElementById('discover-second-left-navbar')
    const contactMenu = document.getElementById('contact-second-left-navbar')

    productOption.addEventListener('mouseover', () => {
        productMenu.style.display = 'block'
    })

    discoverOption.addEventListener('mouseover', () => {
        discoverMenu.style.display = 'block'
    })

    contactOption.addEventListener('mouseover', () => {
        contactMenu.style.display = 'block'
    })
}