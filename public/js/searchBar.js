let iconoLupaBusqueda = document.querySelector(".icono-search-right-navbar");
let barraBusqueda = document.querySelector(".search-bar");
let iconoXBarraBusqueda = document.querySelector(".button-X-search-bar");


iconoLupaBusqueda.addEventListener("click", () => {
  barraBusqueda.style.display = "block";
});
iconoXBarraBusqueda.addEventListener("click", () => {
  barraBusqueda.style.display = "none";
  

});
