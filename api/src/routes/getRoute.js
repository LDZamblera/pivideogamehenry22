const express = require('express');
const router = express.Router();
const {API_KEY} = process.env
const {getAll }= require ("../controller/allgames");
const gameById = require ("../controller/gameById");
const axios = require("axios");


router.get ('/', async (req, res) =>{
    const {name} = req.query; //por si me pasan por query

if(name){
    const apiData = await axios.get(
        `https://api.rawg.io/api/games?search=${name}&key=${API_KEY}`
      );
      if (apiData.data.results.length > 15){
        apiData.data.results.length = 15
      }
      if(!apiData.data.count){
        res.status(404).send(` ${name} not found`)
    }else{
        const gamefound = apiData.data.results.map(e => {
            return {
                id : e.id, 
                name: e.name,
                description: e.description,
                released: e.released,
                rating: e.rating,
                img: e.background_image,
                genres: e.genres.map(e => e.name).join(', '),
                platform: e.platforms.map((e) => e.platform.name).join(', ')           
            }
        })
        res.status(200).send(gamefound)
    }  
}else{
    let allGames = await getAll();
    res.status(200).send(allGames)
}          
});

 router.get('/:id', async (req, res) => {
    let { id } = req.params;
    let videogamesTotal = await gameById(id);
    res.status(200).send(videogamesTotal);

}
); 


module.exports = router;