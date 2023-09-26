const axios = require("axios");
const express = require("express");
const router = express.Router();
const getAll = require ("../controller/allgames")
const {Videogame} = require ('../db')


router.delete ('/:id', async (req, res)=>{
    let {id} = req.params;
    
   
    let forDelete = await Videogame.findByPk(id)
    if (id && forDelete){
        await Videogame.destroy({
            where: {
            id: id
            }
            }); 
        res.send("se elimino con exito")
    }else {
        res.status(400).json({error: "No se recibieron los parámetros necesarios para borrar el Post"})
    }
});

  
module.exports = router;