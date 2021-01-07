const express = require('express')
const app = express()
 
app.get('/', (req, res) => {  
  let salida = {
    nombre: 'peter',
    edad: '25',
    url: req.url
  }
  res.send(salida);
});
app.get('/data', (req, res) => {  
  res.send('data');
});

 
app.listen(3000, ()=> console.log('Escuchando peticiones en el puerto 3000'));
