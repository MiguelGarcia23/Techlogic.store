
    let iconoLupaBusqueda = document.querySelector('.icono-search-right-navbar');
    let barraBusqueda = document.querySelector('.search-bar');
    let iconoXBarraBusqueda = document.querySelector('.button-X-search-bar')

    console.log(' soy search');
    
    iconoLupaBusqueda.addEventListener('click', () => {
        barraBusqueda.style.display = 'block'
    })
    iconoXBarraBusqueda.addEventListener('click', () => {
        barraBusqueda.style.display = 'none'
    })
