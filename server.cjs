const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

let visitCount = 0;

app.get('/', (req, res) => {
    // Incrementar el contador en cada visita
    visitCount ++;
    console.log(`¡Hola! Esta es la visita número ${visitCount}`);
    res.send(`${visitCount}`);
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
