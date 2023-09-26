import React from 'react';
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideogames, getGenres,  orderByName, orderByRating, getPlatforms, fiteredPlatform, orderByGenre, filterCreated } from '../../actions/index';
import Card from '../Card/Card';
import Loading from "../Loading/Loading";
import NavBar from '../NavBar/Nav';
import s from "./Home.module.css"
import Error404 from '../NotFound/Error404';
import Pagination from '../Pagination/pagination'
//import SideBar from '../SideBar/SideBar';



export default function Home() {

const dispatch = useDispatch();
const todos = useSelector((state) => state.allVideogames)
const allGames = useSelector((state) => state.videogames);  
const platforms = useSelector((state) => state.platforms)
const genre = useSelector((state) => state.genres) // eslint-disable-next-line
const [loading, setLoading] = useState(true);// eslint-disable-next-line
const [order, setOrder] = useState(''); 
    //para el paginado, creamos estados locales
    const [currentPage, setCurrentPage] = useState(1);// eslint-disable-next-line
    const [gamesPerPage, setGamesPerPage] = useState(15);  //declaramos 15 por pag
//const [order, setOrder] = useState("");
const indexOfLastGame = currentPage * gamesPerPage //15 en pag 1 -- 30 en pag 2
const indexOfFirstGame = indexOfLastGame - gamesPerPage //0
const CurrentGames = allGames.slice(indexOfFirstGame, indexOfLastGame);

const pagination = (pageNumber) => {
    setCurrentPage(pageNumber)              //seteo la pag en el numero de pag
}
if(allGames.length > 0 && loading){
    setLoading(false);
}

useEffect (() => {
   
    dispatch(getVideogames()); 
    dispatch(getGenres()); 
    dispatch(getPlatforms());
    
    //dispatch(clear());   //lo dejo????
},[dispatch]);

function handleSort(e) {
    e.preventDefault();
    dispatch(orderByName(e.target.value))
    setCurrentPage(1);  
    setOrder(`Ordenado ${e.target.value}`)
}
function handleRating(e) {
    e.preventDefault();
    dispatch(orderByRating(e.target.value))
    setCurrentPage(1);
    setOrder(`Ordenado ${e.target.value}`)
}
function handleDB(e){
    e.preventDefault();
    dispatch(filterCreated(e.target.value))
    setCurrentPage(1);
   
}

function handleByGenres(e){
    //e.preventDefault();
    dispatch(orderByGenre(e.target.value))
    //setCurrentPage(1)
    setOrder(`${e.target.value}`)
}

function handleByPlatform(e){
    //e.preventDefault();
    dispatch(fiteredPlatform(e.target.value))
    //setCurrentPage(1)
    setOrder(`${e.target.value}`)
}
//console.log(CurrentGames)
   
    return (
        <div >
            
            <div className={s.container} >
            
            {todos.length > 0 ? (
            <div className={s.bg}>
           

                
                <div className={s.navBar}>
                    <div className={s.filters}>
                
            <select onChange={e => handleSort(e)}  className={s.selected}>
                      <option value='Alphabetical Order'> Order By Name</option>  
                    <option value='AZ'>  A-Z </option>
                    <option value='ZA'>  Z-A </option>
            </select>

            <select onChange={e => handleRating(e)}  className={s.selected}>
                      <option value='Rating Order' > Order By Rating</option>  
                    <option value='Menor'>  Highest Rating </option>
                    <option value='Mayor'>  Lowest Rating </option>
            </select>

            <select onChange={e => handleDB(e)} className={s.selected}>
                <option value='All' > Storage </option>
                <option value='db'> From DB </option>
                <option value='API'> From API </option>
            </select>
            <select onChange={e => handleByGenres(e)} className={s.selected} >
                <option value='All'> ALL GENRES </option>
                {genre?.map(el => (
                            <option key={el.id} value={el.name}>{el.name}</option>
                        ))
                        }
                </select>

                <select onChange={e => handleByPlatform(e)} className={s.selected} >
                <option value='All'> ALL PLATFORMS </option>
                {platforms?.map(el => (
                            <option key={el} value={el}>{el}</option>
                        ))
                        }
                </select>
                </div>
                <div className={s.navDown}>
                <NavBar  setCurrentPage={setCurrentPage} className={s.nav} />
                </div>
        <Pagination
            gamesPerPage = {gamesPerPage}
            totalGames = {allGames.length}
            pagination={pagination}
            
        /> 
        
        </div>

        <div className={s.prueba}>
        
            <div className={s.cards}>
                
            {CurrentGames.length > 0 ? CurrentGames?.map( e =>{
               return (
                
                <li key={e.id} className={s.li}>
                    {(todos.length>0  && allGames.length>0) ?
                    
               <Card className={s.card}
                    name={e.name}
                     img = {e.img}
                     rating = {e.rating}
                     genres = {e.genres}
                     id = {e.id} 
                     created ={e.createdInDb} />
                     
                     : <Error404 className={s.error} />}
                </li>
           );} ) : <Error404 className={s.error}/>}
            </div>
            </div>
            </div>
            )  
               : <Loading/>
              }
            </div>
        </div>
    );
   
};