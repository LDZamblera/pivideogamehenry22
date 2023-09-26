const axios = require ('axios')
const {Videogame, Genre} = require ('../db')
const {API_KEY} = process.env


  

const getApiAll = async () =>{
    const firstHundred = [];
    for (let i = 1; i <= 5; i++) {
        let api = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=${i}`)
         
        
        api.data.results.map(e => {
            firstHundred.push( {
                id : e.id, 
                name: e.name,
                description: e.description,
                released: e.released,
                rating: e.rating,
                img: e.background_image,
                genres: e.genres.map(e => e.name),
                platform: e.platforms?.map((e) => e.platform.name)
            })
        })
    }
    return firstHundred;
};

const getInfoDb = async () => {
    const dbData = await Videogame.findAll({
      include: {
        model: Genre,  //para que pueda hacer la relacion
        //attribute: ["name"],    
        through: {
          attributes: [],
        },
      },
    });
    //console.log(dbData, 'dbData')
    const mapInfoDb = dbData?.map(e => {
      return {
          id: e.id,
          name: e.name,
          image: e.image,
          genres: e.genres?.map((e) => e.name),
          description: e.description,
          released: e.released,
          rating: e.rating,
          platforms: e.platforms?.map((el) => el),
          createdInDb: e.createdInDb,
      };
  });
    
    return mapInfoDb;
  };
 
const getAll = async () => {
    const ApiAll = await getApiAll();
    const InfoDb = await getInfoDb();
    const Total = ApiAll.concat(InfoDb);
    return Total;
}


module.exports = {
  getAll, 
  getApiAll};