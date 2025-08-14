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


// POST agregar libro
app.post("/api/books", (req, res) => {
  const nuevoLibro = {
    id: books.length ? books[books.length - 1].id + 1 : 1,
    ...req.body
  };
  books.push(nuevoLibro);
  res.status(201).json(nuevoLibro);
});

// PUT actualizar libro
app.put("/api/books/:id", (req, res) => {
  const index = books.findIndex(b => b.id === parseInt(req.params.id));
  if (index !== -1) {
    books[index] = { id: books[index].id, ...req.body };
    res.json(books[index]);
  } else {
    res.status(404).json({ mensaje: "Libro no encontrado" });
  }
});

// DELETE eliminar libro
app.delete("/api/books/:id", (req, res) => {
  const nuevaLista = books.filter(b => b.id !== parseInt(req.params.id));
  if (nuevaLista.length === books.length) {
    res.status(404).json({ mensaje: "Libro no encontrado" });
  } else {
    books = nuevaLista;
    res.json({ mensaje: "Libro eliminado" });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});