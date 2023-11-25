const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Burda todo verisi mysql2 kütüphanesi ya da express express-graphql graphql kütüphanesi kullanılarak sql sorguları ya da graphql query ve mutationları ile de veri tabanında CRUD işlemleri yapılabilir.


// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'kullaniciadi',
//   password: 'sifre',
//   database: 'veritabaniadi'
// });

// connection.connect((err) => {
//   if (err) {
//     console.error('Bağlantı başarısız:', err);
//   } else {
//     console.log('Bağlantı başarılı.');
//   }
// });


let todos = [
  { id: 1, title: 'Yemek Yap', completed: false },
  { id: 2, title: 'Kod Yaz', completed: true }
];

// Tüm todoları getir
app.get('/todos', (req, res) => {
  res.json(todos);
});

// Belirli bir todo'yu getir
app.get('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const todo = todos.find(todo => todo.id === id);

  if (todo) {
    res.json(todo);
  } else {
    res.status(404).json({ message: 'Todo not found' });
  }
});

// Yeni bir todo ekle
app.post('/todos', (req, res) => {
  const { title, completed } = req.body;
  const newTodo = { id: todos.length + 1, title, completed };

  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// Bir todo'yu güncelle
app.put('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { title, completed } = req.body;

  const todoIndex = todos.findIndex(todo => todo.id === id);

  if (todoIndex !== -1) {
    todos[todoIndex] = { ...todos[todoIndex], title, completed };
    res.json(todos[todoIndex]);
  } else {
    res.status(404).json({ message: 'Todo not found' });
  }
});

// Bir todo'yu sil
app.delete('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  todos = todos.filter(todo => todo.id !== id);
  res.json({ message: 'Todo deleted successfully' });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
