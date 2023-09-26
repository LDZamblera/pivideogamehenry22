import React from 'react';
import {Link} from 'react-router-dom';
import s from './Card.module.css'


export default function Card ({id, name, rating, img, genres}){
    return(
        <div className={s.container}>
            <Link to={`/videogames/${id}`}>
            <div className={s.card}>
              
                <img className={s.img} src={img} alt="img not found" />
                <h3 className={s.text}>{name} </h3>
                <h5 className={s.text}>Rating: {rating} </h5>
                <h5 className={s.text}>Generos: {genres} </h5>
                
                
            </div>
            </Link>
        </div>
    )
}