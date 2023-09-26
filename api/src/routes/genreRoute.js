const axios = require("axios");
const express = require("express");
const router = express.Router();
const {API_KEY} = process.env;
const allGenres = require ("../controller/genres")


router.get ('/', async (req, res) => {
    try {
        let genero =await allGenres();
        //console.log(genero)
        res.status(200).json(genero)
    } catch (error) {
        res.status(404).send(error.message)
    }
})

module.exports = router;