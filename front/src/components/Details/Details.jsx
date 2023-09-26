import React, { useEffect, useState } from "react";
import { Link, useNavigate  } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail, clear, removeCreated, updateVideogame} from '../../actions/index'
import Loading from "../Loading/Loading";
import s from './Details.module.css'
import { useParams } from "react-router-dom";





export default function Details(props) {
    const [loading, setLoading] = useState(true);
    const history = useNavigate()
    const dispatch = useDispatch();
    const myGame = useSelector((state) => state.videogameDetail);
    const { id: gameId } = useParams();

    
    const [input, setInput] = useState({
        description:"",
        released:"",
        rating:"",
        img:"",
        platforms:[],
        genre:[]
    })
  

    if(Object.keys(myGame).length > 0 && loading){
        setLoading(false);
    }

    useEffect(() => {
        dispatch(getDetail(gameId))
        
        return () => {
            dispatch(clear(gameId))
        };
    }, [dispatch, gameId]);


    const platformDetail = myGame.platforms?.join('  ')
    let genreDetail = []
    genreDetail = myGame.genres?.join('   ') 
  
function handleDelete(e){
    e.preventDefault ();
    dispatch(removeCreated(gameId));
    alert("Videogame has remove succesfully")
    history.push('/home')
}
function handleChange(e){
    setInput({
        ...input,
        [e.target.name]: e.target.value
    })
}
function handleSubmit(e) {
    e.preventDefault();
    dispatch(updateVideogame(gameId , input));
   
    alert ('VideoGame updated succesfully')
    dispatch(getDetail(gameId))
//console.log(gameId, input)

}

    
    return (
        <div >
            {Object.keys(myGame).length > 0 && !loading ? 
                <div className={s.container}>
                    <div className={s.left}>
                        <h1>{myGame.name}</h1>
                        <div className={s.platform}>
                            <p className={s.platformLetter} >{platformDetail? platformDetail : "not Found"} </p> 
                            <img src= {myGame.img} alt="img not found" className={s.image} />
                            <p className={s.platformLetter}>{genreDetail} </p>
                           
                        </div>
                        
                       
                        
                        <p className={s.description}>Rating: {myGame.rating} </p>
                         
                        <p className={s.description}>Launch: {myGame.released} </p>
                    </div>

                    <div className={s.rigth}>
                       <p className={s.description}>Description: </p> 
                        <p className={s.description}>{myGame.description} </p>
                        <Link to='/home'>
                            <button className={s.button}> Home </button>
                          
                        </Link>
                        {(myGame.createdInDb)?<>
                        <button  onClick={e => handleDelete(e)} className={s.button}> Delete </button> 
                        <div className={s.bg}>
                            <form className={s.form}>
                            <div>
                                <label className={s.label}>Released:</label>
                                <input className={s.inputDate}
                                onChange={handleChange}
                                type="date"
                                 value={input.released}
                                name="released"
                            />
                            </div>
                            <div>
                                <label className={s.label}>Rating:</label>
                                <input className={s.input}
                                onChange={handleChange}
                                type="float"
                                value={input.rating}
                                name="rating"
                            />
                             </div>
                             <div>
                             <p className={s.label}>Description:</p>
                            <textarea
                            className={s.inputDescription}
                            onChange={handleChange}
                            type="text"
                            value={input.description}
                            name="description"
                            />
                            </div>

                            </form>
                        </div>
                        <form onSubmit={handleSubmit}>
                        <button type='submit' onSubmit={e => handleSubmit(e)} className={s.button}> Update </button>
                        </form>
                        
                       
                        </>
                        : <></> }
                    </div>
                    
                </div>

             : !Object.keys(myGame).length > 0 && loading ? (
             <Loading />): myGame.length === 0 && (
                <h1>not found</h1>
             )}
        </div>
    )
}