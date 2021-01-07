const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');
 
// para puerto que asigne heroku
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

// express hbs
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {  
  
  res.render('home', {
    nombre: 'gonzalo'
  });
});

app.get('/about', (req, res) => {  
  
  res.render('about');
});

app.get('/data', (req, res) => {  
  res.send('data');
});

 
app.listen(port, ()=> console.log(`Escuchando peticiones en el puerto ${port}`));