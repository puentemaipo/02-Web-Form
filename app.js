const express = require('express');
const path = require('path');

const app = express();

const PORT = 3000;

// ---------------------------
// CONFIGURACIÓN DE EJS
// ---------------------------
app.set('view engine', 'ejs');


// ---------------------------
// MIDDLEWARES
// ---------------------------

// Permite leer información enviada
// desde formularios HTML
app.use(express.urlencoded({ extended: true }));


// ---------------------------
// ARCHIVOS ESTÁTICOS
// ---------------------------
app.use(express.static(path.join(__dirname, 'public')));


// ---------------------------
// RUTAS
// ---------------------------

// Inicio
app.get('/', (req, res) => {

    res.render('index');

});

// Servicios
app.get('/servicios', (req, res) => {

    res.render('servicios');

});

// Nosotros
app.get('/nosotros', (req, res) => {

    res.render('nosotros');

});

// ---------------------------
// CONTACTO - GET
// ---------------------------

// Muestra el formulario
app.get('/contacto', (req, res) => {

    res.render('contacto', {

        mensajeExito: null

    });

});


// ---------------------------
// CONTACTO - POST
// ---------------------------

// Recibe los datos del formulario
app.post('/contacto', (req, res) => {

    const {
        nombre,
        correo,
        asunto,
        mensaje
    } = req.body;


    console.log('----------------------------');
    console.log('NUEVO MENSAJE');
    console.log('----------------------------');

    console.log('Nombre:', nombre);
    console.log('Correo:', correo);
    console.log('Asunto:', asunto);
    console.log('Mensaje:', mensaje);


    res.render('contacto', {

        mensajeExito:
            'Tu mensaje ha sido enviado correctamente.'

    });

});


// ---------------------------
// SERVIDOR
// ---------------------------
app.listen(PORT, () => {

    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);

});