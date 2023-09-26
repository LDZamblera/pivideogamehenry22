import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchName/SearchName";
import { getVideogames, clear} from '../../actions';
import { useDispatch} from "react-redux";
import s from "./Nav.module.css"


export default function NavBar ({setCurrentPage}){

    //const allGames= useSelector((state) => state.videogames)
    const dispatch = useDispatch(); 
    
    

    function handleSubmit(e){
        e.preventDefault();
        dispatch(getVideogames());
        dispatch(clear());
        }
    
    


    return (
        <div className={s.container}>
            <div>
                <Link to='/home' >
                      <button onClick ={(e)=> handleSubmit(e)} className={s.button}> RELOAD ALL GAMES </button>
                </Link>

                <Link to='/about'>
                <button  className={s.button}> ABOUT </button>
                </Link>

                <Link to='/createGame'>
            <button className={s.button}>CREATE NEW VIDEOGAME</button>
                 </Link>
            
                <div><SearchBar  setCurrentPage={setCurrentPage} /></div>
            </div>
            
        </div>
    )
}