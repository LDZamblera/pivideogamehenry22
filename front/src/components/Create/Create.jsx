import React from "react";
import { useState, useEffect } from "react";
import {Link, useNavigate} from 'react-router-dom';
import {getGenres, getPlatforms, postVideogames} from '../../actions/index';
import { useDispatch, useSelector } from "react-redux";
import s from "./Create.module.css"

export default function  VideogameCreate(){
    const dispatch = useDispatch()
    const history = useNavigate()
    const genres = useSelector((state) => state.genres)
    const plataforma = useSelector((state) => state.platforms)
    const allVideogames = useSelector((state) => state.videogames)
    const [error, setError] = useState({});

    const [input, setInput] = useState({
        name:"",
        description:"",
        released:"",
        rating:"",
        img:"",
        platforms:[],
        genre:[]
    })
    useEffect(() => {
        dispatch(getGenres())
        dispatch(getPlatforms())
    },[dispatch]);

    function validate(input){
        let error={};
        if (!input.name) {
            error.name = "Name is required";
            
          } else if (input.name.length > 50) {
            error.name = "Name is too long";
          } else if (allVideogames.find(e => e.name.toLowerCase() === input.name.toLowerCase()) ){
            error.name = `The name ${input.name} is allready exist`
          }
         if (!input.description){
            error.description = "Description is required";
        } else if (input.description.length > 1000) {
            error.description = "Description is too long. (Max = 1000 characters)";
          }

        if (!input.released){
            error.released = "Date is required";
        }
        if(!input.rating){
            error.rating = "Rating is Required";
        } else if( !Math.floor(input.rating) ) {
            error.rating = "Type of input must be Number"
        }
        else if (input.rating > 5 || input.rating < 0) {
            error.rating = "Rating must range between 0 to 5";
          }
        if (!input.img) {
            error.img = "Image URL is required";
          }
        if (input.platforms.length === 0) {
            error.platforms = "Minimun one Platform is required";
          }
         

        return error
    }

       
    function handleChange(e){
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        setError(validate({
            ...input,
            [e.target.name]: e.target.value
        })) 
    }
    


   /*  function handleCheckGenre(e){
        if(e.target.checked){
            setInput({
                ...input,
                genre:  [...input.genre,e.target.value]
            })
        }
         setError(
            validate({
              ...input,
              genres: [...input.genre, e.target.value],
            })
          );  
    }*/
    function handleSelectGenres(e) {
        if (!input.genre.includes(e.target.value)) {
          setInput({
            ...input,
            genre: [...input.genre, e.target.value],
          });
          setError(
            validate({
              ...input,
              genre: [...input.genre, e.target.value],
            })
          );
        } else {
          setInput({
            ...input,
          });
        }
      };
    function handleDeleteGenres(e){
        setInput({
            ...input,
            genre: input.genre.filter(el => el !==e )
        })
    }  
    function handleSelectPlatforms(e) {
      if (!input.platforms.includes(e.target.value)) {
        setInput({
          ...input,
          platforms: [...input.platforms, e.target.value],
        });
        setError(
          validate({
            ...input,
            platforms: [...input.platforms, e.target.value],
          })
        );
      } else {
        setInput({
          ...input,
        });
      }
    };
    function handleDeletePlatforms(e){
      setInput({
          ...input,
          platforms: input.platforms.filter(el => el !==e )
      })
  }  
   /*  function handleCheckPlatform(e){
        if(e.target.checked){
            setInput({
                ...input,
                platforms:[...input.platforms,e.target.value]
            })
        }
        setError(
            validate({
              ...input,
              platforms: [...input.platforms, e.target.value],
            })
          );
    } */
    function handleSubmit(e){
        e.preventDefault();
        dispatch(postVideogames(input));
       /*  setError(validate({
            ...input,
            [e.target.name]: e.target.value
        }))  */
        setInput({
            name: "",
            description:"",
            released:"",
            rating:"",
            img:"",
            platforms:[],
            genre:[]
        });

        alert("Videogame created succesfully")
        history.push('/home')
        
    }
  
   
    
return(
    <div className={s.bg}>
        <div className={s.container}>
        <Link to= '/home'><button className={s.button}>Home</button></Link>
        <h2 className={s.new}>Create a New Videogame</h2>
        <form className={s.form} onSubmit={handleSubmit}>
            <div>
            <div>
                <label className={s.label}>Name*:</label>
                <input className={s.input}
                onChange={handleChange}
                type= "text"
                value= {input.name}
                name= "name"
                />
                {error.name && <p className={s.error}>{error.name}</p>}
            </div>

            <div>
                <label className={s.label}>Released:</label>
                 <input className={s.inputDate}
                 onChange={handleChange}
                 type="date"
                 value={input.released}
                 name="released"
                />
                {error.released && <p className={s.error}>{error.released}</p>}
             </div>

             <div>
                <label className={s.label}>Rating:</label>
                 <input className={s.input}
                 onChange={handleChange}
                 
                 type="float"
                 value={input.rating}
                 name="rating"
                />
                {error.rating && <p className={s.error}>{error.rating}</p>}
             </div>

             <div>
                <label className={s.label}>Imagen:</label>
                 <input className={s.input}
                 onChange={handleChange}
                 type="text"
                 value={input.img}
                 name="img"
                />
                {error.img && <p className={s.error}>{error.img}</p>}
             </div>
             <div>
            <p className={s.label}>Description*:</p>
            <textarea
            className={s.inputDescription}
            onChange={handleChange}
              type="text"
              value={input.description}
              name="description"
            />
            {error.description && <p className={s.error}>{error.description}</p>}
          </div>
             </div>

            <div className={s.select}> 
             <div>
            <p className={s.label}>Genres</p>
            <select  className={s.thisInput} onChange={(e) => handleSelectGenres(e)}>
              <option value="all">All</option>
              {genres?.map((e) => {
                return (
                  <option key={e.id} value={e.name}>
                    {e.name}
                  </option>
                );
              })}
            </select>
    
          </div>
          <ul >
              {input.genre.map((e) => (
                <li key={e} className={s.lista}>
                  <div >
                    {e + " "}
                    <button className={s.buttonX} type='button' onClick={() => handleDeleteGenres(e)}>
                      X
                    </button>
                  </div>
                </li>
              ))}
            </ul>

          
          <div>
            <p className={s.label}>Platforms</p>
            <select  className={s.thisInput} onChange={(e) => handleSelectPlatforms(e)}>
              <option value="all">All</option>
              {plataforma?.map((e) => {
                return (
                  <option key={e} value={e}>
                    {e}
                  </option>
                );
              })}
            </select>
            {error.platforms && <p className={s.error}>{error.platforms}</p>} 
          </div>
          <ul >
              {input.platforms.map((e) => (
                <li key={e} className={s.lista}>
                  <div >
                    {e + " "}
                    <button className={s.buttonX} type='button' onClick={() => handleDeletePlatforms(e)}>
                      X
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            
             </div>
          {   (!error.name && !error.description && !error.platforms)?
           
                <button className={s.button}  type='submit' onSubmit={e => handleSubmit(e)} >Create Videogame</button> :
                <h2 className={s.error2}>Missing some obligatories dates</h2>
             
             }
        </form>

        </div>
    </div>
)

}