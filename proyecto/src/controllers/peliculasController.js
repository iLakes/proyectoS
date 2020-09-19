const fs = require ('fs');
//const path = require ('path');

const db =require('../database/models');

const peliculasController = {

        //buscar todas las peliculas
    verTodas: function (req, res){
        db.Pelicula.findAll()
        .then (function (resultado){
            res.render('verPelis', {resultado: resultado});
            
            //para control
            console.log (resultado);

        })
        .catch(function (error){
            console.log(error)
        })
    },

        // buscar una peli por PK ingresada en la url
    buscarPorID: function (req, res){
        db.Pelicula.findByPk (req.params.idPelicula)
        .then (function (resultado){
            res.render('verPelis', {resultado: resultado});
            //para control
            console.log (resultado);
        })
        .catch(function (error){
            console.log(error)
        })     
    },
    
        // crear una peli
    crear: function (req, res) {
        db.Pelicula.findAll()
            .then (function (genres){
                res.render ('agregarPeli', {genres});
            })
            .catch(function (error){
                console.log(error)
            })
    },
   
    tomarDatos: function (req, res){
        db.Pelicula.create ({
            title: req.body.title,
            rating: req.body.rating,
            release_date: req.body.release_date,
            length: req.body.length,
            genre: req.body.genre
        })
        .then (function (resultado){
            res.redirect ('verPelis');

            //para control
            console.log (resultado)
        })
        .catch(function (error){
            console.log(error)
        })    
    }
};

module.exports = peliculasController;