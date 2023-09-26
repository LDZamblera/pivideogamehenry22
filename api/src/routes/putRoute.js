const axios = require("axios");
const express = require("express");
const { Genre, Videogame } = require("../db");
const router = express.Router();
const { Sequelize, Op } = require('sequelize');

router.put ('/:id', async (req, res) => {
    const {id} = req.params;
    const {name, description, rating, released, platform} = req.body;
 
     try {
        let forUpdate = await Videogame.findByPk(id);
        console.log(forUpdate)
        await forUpdate.update({
            description,
            rating,
            released,
            
        });
        
        res.status(200).send(forUpdate)
    } catch (error) {
        res.status(400).send(error.message)
    } 
});

module.exports = router;