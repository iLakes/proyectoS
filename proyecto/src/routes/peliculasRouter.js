const express =require('express');
const router = express.Router();


const peliculasController = require('../controllers/peliculasController.js');


    // Trae el listado completo de películas
router.get ('/peliculas', peliculasController.verTodas);

    // Trae una película en particular
router.get ('peliculas/:id', peliculasController.buscarPorID );

    // Crea una película
router.get ('/peliculas/crear', peliculasController.crear);
router.post ('/peliculas/crear', peliculasController.tomarDatos); 

module.exports = peliculasRouter;