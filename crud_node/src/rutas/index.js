const express = require('express');
const rutas = express.Router();

const customerController = require('../controllers/customerController');
//GET es lo que solicita el navegador del cliente
// rutas.get("/",(req,res) => {
// 	res.send("Hola Mundo Node, soy genial atte : Tu mama");

// });
rutas.get('/',customerController.list);
rutas.post('/add',customerController.save);
// rutas.get('/delete/:id',customerController.delete);
// rutas.get('/update/:id',customerController.edit);
// rutas.post('/update/:id',customerController.update);



module.exports = rutas;












