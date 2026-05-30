const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Servidor activo');
});

app.get('/Suludo1', (req, res) => {
    res.send('Hola Comunidad');
});

app.get('/mensaje/:nombre', (req, res) => {
    const nombre = req.params.nombre;
    res.send(`Hola ${nombre}`);
});

app.listen(3000, () => {
    console.log('Servidor ejecutandose en el puerto 3000');
});
