const axios = require("axios");
const express = require("express");
const router = express.Router();
const {getApiAll} = require ("../controller/allgames");
//const Platforms = require("../models/Platforms");


router.get('/', async (req, res) => {
    try {
        //console.log('hola')
        const all = await getApiAll();
        const allPlatforms = [];
        const nuevo = []
       
        all.map(e => nuevo.push(e.platform)
        )
        nuevo.map(e => e.map(p => {
            if (!allPlatforms.includes(p)){
                allPlatforms.push(p)
            }
        }))
       

        res.status(200).json(allPlatforms)
        }catch(e) {
            res.send(e)
        }
    })

module.exports = router;