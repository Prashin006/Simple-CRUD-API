const express = require('express');
const mongoose = require('mongoose');
const productRoute = require('./routes/product.route');
const PORT = 3200;
const uri ='mongodb+srv://prashinjigneshparikh:neeta1970@backenddb.aqu0j.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB';

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use('/api/v1/products', productRoute);

// Route to the Home page
app.get('/', (req, res, next) => {
  res.send("Welcome to Prashin's Node API");
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
