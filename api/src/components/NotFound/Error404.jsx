import React from "react";
import ErrorImg from '../../img/Error404.jpg'
import s from './Error404.module.css'
import { Link } from "react-router-dom";
import { getVideogames } from "../../actions";
import { useDispatch } from "react-redux";

export default function Error404 () {

    const dispatch = useDispatch(); 
    
    

    function handleSubmit(e){
        e.preventDefault();
        dispatch(getVideogames());
        
        }
return (
    <div className={s.container}>
         <Link to='/home'>
         <button onClick ={(e)=> handleSubmit(e)} className={s.button}> Back To Home </button>
                        </Link>
        <div></div>
        <div>
        <img src={ErrorImg} alt='' className={s.image} />
        </div>
        <div></div>
        </div>
)
}