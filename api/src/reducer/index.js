import {
  GET_VIDEOGAMES,
  GET_GAMEBYNAME,
  GET_DETAIL,
  GET_GENRES,
  ORDER_BY_NAME,
  ORDER_BY_RATING,
  ORDER_BY_GENRES,
  GET_PLATFORMS,
  FILTER_BY_PLATFORM,
  POST_GAME,
  CREATED,
  REMOVE_CREATED,
  UPDATE
} from '../actions/index';
//import db_empty from '../img/Db_empty.jpg'

const initialState = {
    videogames: [],
    allVideogames: [],
    genres: [],
    platforms: [],
    videogameDetail: {},
    gamesByName: [],
    loading: false
  };

  function rootReducer(state = initialState, action){
    switch(action.type){
      case GET_VIDEOGAMES:
       
        return{
          ...state,
        allVideogames: action.payload,
        videogames: action.payload,
        
        };
        
      case GET_GAMEBYNAME:
        return{
              ...state,
              videogames: action.payload,
              //gamesByName: action.payload,
        };

      case GET_DETAIL:
          return{
            ...state,
            videogameDetail: action.payload
        };
      case ORDER_BY_NAME:
          let aZVideogames=
            action.payload === "AZ"?
              state.videogames.sort(function(a,b){
                if(a.name.toLowerCase() > b.name.toLowerCase()){
                  return 1;
                }
                if(a.name.toLowerCase() < b.name.toLowerCase()){
                  return -1;
                }
                return 0;
              })
              :state.videogames.sort(function(a,b){
                if(a.name.toLowerCase() < b.name.toLowerCase()){
                  return 1;
                }
                if(a.name.toLowerCase() > b.name.toLowerCase()){
                  return -1;
                }
                return 0;
              })
          return{
            ...state,
            videogames: action.payload === "default"? state.videogames : aZVideogames,
        };
      case ORDER_BY_RATING:
            let ratingGame=
              action.payload === "Mayor"?
                state.videogames.sort(function(a,b){
                  if(a.rating > b.rating){
                    return 1;
                  }
                  if(a.rating < b.rating){
                    return -1;
                  }
                  return 0;
                })
                :state.videogames.sort(function(a,b){
                  if(a.rating < b.rating){
                    return 1;
                  }
                  if(a.rating > b.rating){
                    return -1;
                  }
                  return 0;
                })
            return{
              ...state,
              videogames: action.payload === "default"? state.videogames : ratingGame,
        };
      case CREATED:
        const allGames = state.allVideogames
        const filtered = action.payload === 'db' ?
          allGames.filter(e => e.createdInDb):
          allGames.filter(e => !e.createdInDb)
          //const notFoundDb = [{id:1, name: "Don't exists Videogames created", img:"https://cdn.pixabay.com/photo/2017/06/08/17/32/not-found-2384304_1280.jpg", rating:0.0}]
          //const checkDb = filtered.length !== 0 ? filtered : notFoundDb

          return{
            ...state,
            videogames: action.payload === "All" ? state.allVideogames : filtered
          };
      case GET_GENRES:
          return {
              ...state,
              genres: action.payload,
             
          };
          case ORDER_BY_GENRES:
            const allVideogames = state.allVideogames
            const FilteredGenre = action.payload === "All" ? allVideogames : 
            allVideogames.filter( e => e.genres.includes (action.payload))
            return {
              ...state,
              videogames : FilteredGenre
            };
      case GET_PLATFORMS:
            return {
                ...state,
                platforms: action.payload,
               
            };


      case FILTER_BY_PLATFORM:
        const allVG = state.allVideogames

          allVG.map(e => console.log(e.platform))
        const filterByPlatform = action.payload === "All"? allVG : 
        allVG.filter(e => e.platform?.includes(action.payload) )
        return {
          ...state,
          videogames: filterByPlatform
        };

      case POST_GAME:
             return{
                ...state
            }
        
      case REMOVE_CREATED:
              return {
                ...state,
                videogames: state.allVideogames.filter((game)=>game !== action.payload),
               /*  videogames: state.allVideogames.filter((game)=>game !== action.payload) */
              }
      case UPDATE: 
              return {
                ...state
              }
      

        default:
      return state ;
    }
  }

  export default rootReducer;