    const productOption = document.getElementById('products-option-left-navbar');
    const optioLeftAccesories = document.querySelector('.option-left-navbar-with-icon')
    const accesoriesOption = document.querySelector('.third-left-navbar')
    const optionCollectionsLeftNavbar = document.querySelector('.collection-option-left-navbar-with-icon');
    const collectionThirdLeftNavbar = document.querySelector('.collection-third-left-navbar');
    const discoverOption = document.getElementById('discover-option-left-navbar');
    const contactOption = document.getElementById('contact-option-left-navbar');
    const productMenu = document.getElementById('products-second-left-navbar');
    const discoverMenu = document.getElementById('discover-second-left-navbar');
    const contactMenu = document.getElementById('contact-second-left-navbar');
    const burgerMobile = document.querySelector('.burger-menu')
    const iconUser = document.querySelector('#li-user-icon');
    const userMenu = document.querySelector('.profile-menu-header')
    const slideMobile = document.querySelector('.slide-menu')
    const iconXMobile = document.querySelector('.icono-x')
    const productOptionSlideMenu = document.getElementById('products-option-slide-menu')
    const secondNavbarProductOptionSlideMenu = document.getElementById('second-navbar-products-option-slide-menu')
    const discoverOptionSlideMenu = document.getElementById('discover-option-slide-menu')
    const secondNavbarDiscoverOptionSlideMenu = document.getElementById('second-navbar-discover-option-slide-menu')
    const contactOptionSlideMenu = document.getElementById('contact-option-slide-menu')
    const secondNavbarContactOptionSlideMenu = document.getElementById('second-navbar-contact-option-slide-menu')
    const accesoriesOptionSlideMenu = document.getElementById('accesories-products-option-slide-menu')
    const thirdNavbarAccesoriesOptionSlideMenu = document.getElementById('third-navbar-accesories-products-option-slide-menu')
    const collectionsOptionSlideMenu = document.getElementById('collections-products-option-slide-menu')
    const thirdNavbarCollectionsOptionSlideMenu = document.getElementById('third-navbar-collections-products-option-slide-menu')
    const adminNav = document.getElementById("admin")
    const adminOption = document.querySelector(".admin-option")
    const adminNavSlide = document.getElementById("admin-slide")
    const adminOptionSlide = document.querySelector(".admin-option-slide")

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
    optioLeftAccesories.addEventListener('mouseout', () => {
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
    optionCollectionsLeftNavbar.addEventListener('mouseover', () => {
        collectionThirdLeftNavbar.style.display = 'block'
    })
    optionCollectionsLeftNavbar.addEventListener('mouseout', () => {
        collectionThirdLeftNavbar.style.display = 'none'
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

    /* Menu desplegable ÍCONO USUARIO */
    iconUser.addEventListener('mouseover', () => {
        userMenu.style.display = 'block'
    })
    iconUser.addEventListener('mouseout', () => {
        userMenu.style.display = 'none'
    })
    userMenu.addEventListener('mouseover', () => {
        userMenu.style.display = 'block'
    })
    userMenu.addEventListener('mouseout', () => {
        userMenu.style.display = 'none'
    })

    /* Menu version MOBILE */
    burgerMobile.addEventListener('click', () => {
        slideMobile.style.display = 'block'
    })
    iconXMobile.addEventListener('click', () => {
        slideMobile.style.display = 'none'
    })
    productOptionSlideMenu.addEventListener('click', () => {
        secondNavbarProductOptionSlideMenu.classList.toggle('active-slide-menu')
    })
    discoverOptionSlideMenu.addEventListener('click', () => {
        secondNavbarDiscoverOptionSlideMenu.classList.toggle('active-slide-menu')
    })
    contactOptionSlideMenu.addEventListener('click', () => {
        secondNavbarContactOptionSlideMenu.classList.toggle('active-slide-menu')
    })
    accesoriesOptionSlideMenu.addEventListener('click', () => {
        thirdNavbarAccesoriesOptionSlideMenu.classList.toggle('active-slide-menu')
    })
    collectionsOptionSlideMenu.addEventListener('click', () => {
        thirdNavbarCollectionsOptionSlideMenu.classList.toggle('active-slide-menu')
    })

    /* Menu desplegable PRODUCTOS */
    adminNav.addEventListener('mouseover', () => {
        adminOption.style.display = 'block'
    })
    adminNav.addEventListener('mouseout', () => {
        adminOption.style.display = 'none'
    })
    adminOption.addEventListener('mouseover', () => {
        adminOption.style.display = 'block'
    })
    adminOption.addEventListener('mouseout', () => {
        adminOption.style.display = 'none'
    })
    adminNavSlide.addEventListener('click', () => {
        adminOptionSlide.classList.toggle('active-slide-menu')
    })