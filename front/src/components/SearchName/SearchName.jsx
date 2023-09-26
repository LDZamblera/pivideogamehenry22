import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getVideogameByName} from '../../actions'
import style from "./SearchName.module.css";

export default function SearchBar({setCurrentPage}){

    const dispatch = useDispatch();
    const [name, setName] = useState("")

    useEffect(() => {
        dispatch(getVideogameByName)
    }, [dispatch])

    function handleInputChange(e){
        e.preventDefault();
        setName(e.target.value);
        /* dispatch(getVideogameByName(e.target.value));
        setCurrentPage(1) */
    }
    function handleSubmit(e){
        e.preventDefault();
        dispatch(getVideogameByName(name));
        //dispatch(clear());
        setName("");
    }
    

    return (
        <div className={"hd"} >
            <form >
                <input
                    className="input"
                    type="text"
                    placeholder="Search your Videogame"
                    id="name"
                    autoComplete="off"
                    value={name}
                    onChange={(e) => handleInputChange(e)}
                />
                <button onClick ={(e)=> handleSubmit(e)}> Search </button>
            </form>
        </div>
    )
} 
