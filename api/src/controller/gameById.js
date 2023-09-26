const axios = require ('axios')
const {Videogame, Genre} = require ('../db')
const {API_KEY} = process.env

 
const gameById = async (id) => {
    if (!id.includes('-')){
    try {
      const apiData = await axios.get(
        `https://api.rawg.io/api/games/${id}?key=${API_KEY}`
      );
      const game = await apiData.data;
      const gameDetail = {
        id: game.id,
        name: game.name,
        released: game.released,
        rating: game.rating,
        genres: game.genres.map((e) => e.name),
        platforms: game.parent_platforms.map((e) => e.platform.name),
        img: game.background_image,
        description: game.description_raw,
      };
      
      return gameDetail;
    } catch (e) {
      console.log(e);
    }}else {
        let gameFound = await Videogame.findOne( {
            where:{
              id:id,
            },
           /*  through: {
              attributes: [],
            }, */
            include:{
              model: Genre,
              through: {
                attributes: [],
              },
            }
        })
        const gameDetail = {
          id: gameFound.id,
          name: gameFound.name,
          released: gameFound.released,
          rating: gameFound.rating,
          genres: gameFound.genres.map((e) => e.name),
          platforms: gameFound.platforms,
          img: gameFound.img,
          description: gameFound.description,
          createdInDb: gameFound.createdInDb
        };
        //console.log(gameDetail)
       
        return (gameDetail)
    }
  };



module.exports = gameById;