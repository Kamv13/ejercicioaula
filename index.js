const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

let books = [
  {
    id: 1,
    titulo: "cien años de soledad",
    autor: "Gabriel Garcia Marquez",
    genero: "Recuentos de la vida",
    anioPublicado: 1967,
  },
  {
    id: 2,
    titulo: "Don Quijote de la Mancha",
    autor: "Miguel de Cervantes",
    genero: "Novela",
    anioPublicado: 1605,
  },
  {
    id: 3,
    titulo: "La sombra del viento",
    autor: "Carlos Ruiz Zafón",
    genero: "Misterio",
    anioPublicado: 2001,
  },
];

app.listen(PORT, () => {
  console.log(`Servidor escuchando en ${PORT}`);
});
