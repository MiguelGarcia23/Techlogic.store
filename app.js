const express = require("express");
const path = require("path");
const app = express();

app.use(express.static('public'));
app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000/");
});

app.get("/", (req, res) => {
    let htmlPath = path.resolve(__dirname, "./views/home.html");
    res.sendFile(htmlPath);
  });


            