import axios from 'axios';

export const GET_VIDEOGAMES = "GET_VIDEOGAMES";
export const GET_GENRES = "GET_GENRES";
export const GET_GAMEBYNAME = "GET_GAMEBYNAME";
export const GET_DETAIL = "GET_DETAIL";
export const ORDER_BY_NAME = "ORDER_BY_NAME";
export const ORDER_BY_RATING = "ORDER_BY_RATING";
export const ORDER_BY_GENRES = "ORDER_BY_GENRES";
export const GET_PLATFORMS = 'GET_PLATFORMS';
export const FILTER_BY_PLATFORM = 'FILTER_BY_PLATFORM';
export const POST_GAME = 'POST_GAME';
export const CREATED = 'CREATED';
export const REMOVE_CREATED = 'REMOVE_CREATED';
export const UPDATE = "UPDATE"


export function getVideogames () {
    return async function (dispatch){
        try {
            var json = await axios.get("http://localhost:3001/videogames");
             return dispatch({
                type: GET_VIDEOGAMES,
                payload : json.data
            })
        } catch (error) {
            console.log(error.message)
        }
    };
};
export function getVideogameByName (name){
    
    return async function (dispatch){
        try{
            var json = await axios.get (`http://localhost:3001/videogames?name=${name}`);
            return dispatch({
                type: GET_GAMEBYNAME,
                payload: json.data,
               
            })
        } catch (error){

            console.log (error.message)
            return alert('Sorry, game not found, try again.')
            
        }
        
    };
    
};

export function getGenres() {
    return async function (dispatch){
        try {
            var json = await axios.get ("http://localhost:3001/genres");
            return dispatch({
                type: GET_GENRES,
                payload: json.data
            })
        } catch (error) {   
            console.log(error.message)
        }
    }
};
export function getPlatforms(){
    return async function(dispatch){
        try{
            var json = await axios.get("http://localhost:3001/platforms");
            return dispatch({
                type: GET_PLATFORMS,
                payload: json.data
            })
        }catch(error){
            console.log(error.message)
        }
    }
}
export function getDetail (id){
    
    return async function (dispatch){
        try{
            var json = await axios.get (`http://localhost:3001/videogames/${id}`);
            return dispatch({
                type: GET_DETAIL,
                payload: json.data,  
            })
        } catch (error){
            console.log (error.message)
        }
    };
};
export function clear(){
    return{
        type: 'CLEAR',
        payload : {}
    }
};
export function orderByName(payload){
    return{
        type: ORDER_BY_NAME,
        payload: payload
    }
};
export function orderByRating(payload){
    return{
        type: ORDER_BY_RATING,
        payload:payload
    }
};
export function orderByGenre(payload){
    return{
        type: ORDER_BY_GENRES,
        payload
    }
};
export function filterCreated(payload) {
    return {
        type: CREATED, 
        payload
    }
}
export function fiteredPlatform(payload){
    return{
        type: FILTER_BY_PLATFORM,
        payload
    }
};
export function postVideogames(payload) {
    return async function () {
       try {
        const createPost = await axios.post(`http://localhost:3001/videogame`, payload);
        return createPost;
   
       } catch (error) {
        console.log(error.message)
       }
    }
};
export function removeCreated(id) {
    return async function (dispatch) {
        try{
            await axios.delete(`http://localhost:3001/videogames/${id}`);
            
            return dispatch ({
                type: REMOVE_CREATED,
                payload: id
            })
        }catch (error) {
            console.log(error.message)
           }
    }

  };
export function updateVideogame(id, payload) {
    return async function (dispatch){
        await axios.put (`http://localhost:3001/videogames/${id}`, payload);
        console.log(id, payload)
        return dispatch({
            type: UPDATE,
            payload: payload

        })
    }
}
