import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import s from './Filter.module.css'


return (
    <div className={s.container}>
        <div className={s.filters}>
        <div className={s.filter}>

            <p>Genres:</p>
            <select  onChange={(e) => handleFilterByGenre(e)}>
                <option  value="all">All</option>
                {myGenres?.map((e) => {
                    return (
                    <option key={e.id} value={e.name}>
                        {e.name}
                    </option>
                    );
                })}
            </select>

            <p>Storage:</p>
            <select  onChange={(e) => handleFilterCreated(e)}>
                <option value="all">All</option>
                <option value="api">Api</option>
                <option value="db">Created in DB</option>
            </select>
            </div>

            <div>
            <p>Platforms:</p>
            <select  onChange={(e) => handleFilterByPlatform(e)}>
                <option  value="all">All</option>
                {myPlatforms?.map((e) => {
                    return (
                    <option key={e.id} value={e.name}>
                        {e.name}
                    </option>
                    );
                })}
            </select>
            </div>

            <div>
                <select>
                    <option value="asc"> A - Z </option>
                    <option value="desc"> Z - A </option>
                </select>
            </div>
            <div>
                <select>
                    <option value="asc"> Mayor Rating </option>
                    <option value="desc"> Menor Rating </option>
                </select>
            </div>
            <div>
                <select>
                    <option> Todos </option>
                </select>
            </div>


        </div>
    </div>

)
