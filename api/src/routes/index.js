const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const axios = require ('axios')
const putRoute = require ('./putRoute'); 
const deleteRoute = require ('./DeleteRoute')
const postRoute = require ('./postRoute');
const getRoute = require ('./getRoute');
const genreRoute = require ('./genreRoute')
const platformsRoute = require ('./platformsRoute');
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/videogames', getRoute );
router.use('/genres', genreRoute);
router.use('/platforms', platformsRoute);
router.use('/videogame', postRoute);
router.use('/videogames', deleteRoute);
router.use('/videogames', putRoute);




module.exports = router;

