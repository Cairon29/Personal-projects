import express from 'express';
const app = express();

const pokeApi = await fetch('https://pokeapi.co/api/v2/pokemon')
const pokeData = await pokeApi.json();

let notes = [
    {
        id: "1",
        content: "HTML is easy",
        important: true
    },
    {
        id: "2",
        content: "Browser can execute only JavaScript",
        important: false
    },
    {
        id: "3",
        content: "GET and POST are the most important methods of HTTP protocol",
        important: true
    },
    {
      id: "4",
      content: "API's are the communication in beetween client and server",
      important: true
    }
];

app.get('/', (request, response) => {
  response.send('<h1>Hello World along Nodemon!</h1>')
})

// POKEMON API
app.get('/api/pokeapi', (request, response) => {
  response.json(pokeData);
})

app.get('/api/notes', (request, response) => {
  response.json(notes);
})

app.get('/api/notes/:id', (req, res) => {
  const id = req.params.id;
  const note = notes.find(note => note.id === id);
  if (note) {
    console.log(`Note ${id} found \n Sending the response to the client`);
    res.json(note)
  } else {
    res.status(404).end();
  }
})

app.delete('/api/notes/:id', (req, res) => {
  const id = req.params.id;
  notes = notes.filter(note => note.id !== id);

  res.status(204).end();
})

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})