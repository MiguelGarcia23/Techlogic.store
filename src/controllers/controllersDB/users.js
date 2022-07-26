const { Sequelize } = require("../../database/models/index.js")
let db = require("../../database/models/index.js") /* Se declara db con la ruta de models */
const section = require("../../database/models/section.js")
const Op = Sequelize.Op /* se declara Op con para usar los operadores de sequelize */



/* db.Users.create({
    name: "holadsddasads",
    lastName: "chaudasdasd",
    eMail: "hola@gmail.com",
    password: "hola1234",
    image: "gaadsdas.jpeg",
    rolId: 1
})
.then((result)=>{
    console.log(result)
}) */




/* db.Users.findAll()
.then((result)=>{
    console.log(result)
}) */

db.Products.create({
    name: "prueba",
    desctiption: "prueba",
    price: 1,
    discount: 1,
    image: "fasfasfa",
    sectionId: 1,
    brandId: 1,
    stateId: 1,
    collectionId: 1
})
.then((result)=>{
    console.log(result)
})