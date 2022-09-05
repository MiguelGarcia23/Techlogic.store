window.onload = () => {
    const filterButton = document.getElementById('filter-button');
    const filterMenu = document.getElementById('slide-filter-menu');
    const iconXFilterMenu = document.getElementById('icono-x-filter-menu');

    filterButton.addEventListener('click', () => {
        filterMenu.style.display = 'block'
    })

    iconXFilterMenu.addEventListener('click', () => {
        filterMenu.style.display = 'none'
    })
}