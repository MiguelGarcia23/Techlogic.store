/* Importando el módulo Express */
const express = require('express');

/* Guardando en la variable app la ejecución de la función Express */
const app = express();

/* Importado el módulo nativo path en la variable path */
const path = require('path');

/* Importamos la ruta principal */
const mainRouter = require('./routes/mainRouter');

/* Importamos la ruta de productos */
const productsRouter = require('./routes/productsRouter');

/* Importamos la ruta de usuarios */
const usersRouter = require('./routes/usersRouter');

/* Importamos la ruta de contacto */
const contactRouter = require('./routes/contactRouter');

/* Importamos la ruta de admin */
const adminRouter = require('./routes/adminRouter');

const methodOverride = require('method-override'); // requerimos el methodOveride

app.use(methodOverride('_method')); //usamos overRide
app.use(express.urlencoded({ extended: false })); 
app.use(express.json()); 

/* Configuramos el motor de plantilla */
app.set ('view engine', 'ejs');

/* Estableciendo los archivos estáticos */
app.use(express.static('public'));

/* Configuramos dónde se encuentran las vistas */
app.set ('views', path.join(__dirname, '/views'));

/* Envío a la ruta princiapal */
app.use ('/', mainRouter);

/* Envío a la ruta de productos */
app.use ('/products', productsRouter);

/* Envío a la ruta de usuarios */
app.use ('/users', usersRouter);

/* Envío a la ruta de contacto */
app.use ('/contact', contactRouter);

/* Envío a la ruta de admin */
app.use ('/admin', adminRouter);

/* Levantando el servidor */
app.listen(process.env.PORT || 3000, () => {
  console.log("Servidor corriendo en http://localhost:3000/");
});