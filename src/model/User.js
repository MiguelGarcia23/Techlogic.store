const path = require("path");
const fs = require("fs");

const fileUsers = path.join(__dirname, "../data/users.json"); // ruta del archivo JSON de usuarios

const User = {
  fileRead: JSON.parse(fs.readFileSync(fileUsers, "utf-8")), // leemos el archivo JSON de usuarios

  getAll: function () {
    return this.fileRead;
  },
  getById: function (id) {
    return this.fileRead.find((user) => user.id === id); // devuelve el usuario con el id indicado como objeto literal
  },
  getByEmail: function (email) {

    let allUsers = this.fileRead;
    let userFind = allUsers.find((user) => user.email == email);
    return userFind; 
  },
  generateId: function () { // genera un id aleatorio
    if (this.fileRead.length === 0) {
      return 1;
    } else {
      return this.fileRead[this.fileRead.length - 1].id + 1;
    }
  },
  create: function (dataUser) { // crea un nuevo usuario
    let allUsers = this.getAll();
    let newUser = {
      id: this.generateId(),
      ...dataUser,
    };
    allUsers.push(newUser);
    fs.writeFileSync(fileUsers, JSON.stringify(allUsers, null, ' ')); 
    return newUser;
  },
  update: function (id, dataUser) { // actualiza el usuario con el id indicado
    let allUsers = this.getAll();
    let user = this.getById(id);
    let userToEdit = {
        ...dataUser,
    };
    allUsers.splice(allUsers.indexOf(user), 1, userToEdit);
    fs.writeFileSync(fileUsers, JSON.stringify(allUsers, null, ' '));
    return true;
  },
  delete: function (id) { // elimina el usuario con el id indicado
    let allUsers = this.getAll();
    let userDeleted = allUsers.filter((user) => user.id !== id); // filtra los usuarios que no sean el id indicado y los devuelve como un array 
    fs.writeFileSync(fileUsers, JSON.stringify(userDeleted, null, ' ')); // escribimos el array filtrado en el archivo JSON
    return true;
    },
    
    
};

/* console.log(User.create(
    {   
        name: "Facundo Francou",
        email: "emailToEdit@techlogic.store.com",
        password: "hola123",
        image: "foto-de-perfil.jpg",
        rol: "admin"
    }
)); */
module.exports = User;
