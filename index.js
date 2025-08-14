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

app.get('/books',(req,res)=>{
    res.json(books);
})

app.get('/books/:id', (req,res)=>{
    const id = Number(req.params.id);
    const book = books.find(b => b.id === id);

    if(!book){
        return res.status(404).json({error: 'Libro no encontrado'})
    }
    res.json(book)
})

app.listen(PORT, () => {
  console.log(`Servidor escuchando en ${PORT}`);
});
