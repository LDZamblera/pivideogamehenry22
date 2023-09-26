import React from 'react'
import s from './pagination.module.css'

export default function Pagination({gamesPerPage, totalGames, pagination}) {
  const pageNumber = [];
  
  // hago el for para saber cuentas pag son
   for(let i=0; i<=Math.ceil(totalGames / gamesPerPage); i++){
    pageNumber.push(i+1)
   }
   if(pageNumber.length > totalGames / gamesPerPage){
    pageNumber.length = pageNumber.length-1
   }
  //agregar prev next
   return (
    <nav className={s.containerNav}>
      <ul className={s.number}>
        {pageNumber?.map((number) => {
          return (
          <li key={number} >
            <button className={s.button} onClick={() => pagination(number)}>
              {number}
            </button>
          </li>
        )})}
      </ul>
    </nav>
   )
}
