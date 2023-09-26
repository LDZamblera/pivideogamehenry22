import React from 'react';
import {Link} from 'react-router-dom';
import styles from './LandingPage.module.css'
import buton from "../../img/startbutton.jpg";


function LandingPage() {

  return (
    <div className={styles.bg}>
      <h2 className = {styles.author}> Created By LUCAS DANIEL ZAMBLERA</h2>
      <h2 className = {styles.author}> Github LDZamblera</h2>
      <nav>
      <link rel="stylesheet" href="https://github.com/LDZamblera" /> 
      </nav>
      
      <div className="bounce">
          <span className={styles.letter}>W</span>
          <span className={styles.letter}>E</span>
          <span className={styles.letter}>L</span>
          <span className={styles.letter}>C</span>
          <span className={styles.letter}>O</span>
          <span className={styles.letter}>M</span>
          <span className={styles.letter}>E</span>

          <Link to='/home'>
        <button type="button" className={styles.buttonIng}> <img src={buton } alt='' /> </button>
      </Link>
      </div>
      
    </div>
  )
}

export default LandingPage