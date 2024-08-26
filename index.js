const express = require('express');
const mongoose = require('mongoose');
const PORT = 3200;
const app = express();
app.use(express.json());

const uri =
  'mongodb+srv://prashinjigneshparikh:neeta1970@backenddb.aqu0j.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB';

app.get('/', (req, res, next) => {
  console.log('Served a GET request');
  res.send('<h1>Hello from Node API</h1>');
});

app.post('/api/v1/products', (req, res) => {
  console.log('Served a POST request');
  const obj = JSON.stringify(req.body);
  res.send(`Data received: ${obj}`);
});

mongoose
  .connect(uri)
  .then(() => {
    console.log('Connected to the DataBase!');
    app.listen(PORT, () => {
      console.log(`Server listening at port ${PORT}`);
    });
  })
  .catch((err) => console.log(err));
