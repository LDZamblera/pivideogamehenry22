import React from "react";
import styles from "./About.module.css";
import {Link} from 'react-router-dom';
import logo_react from "../../pictures/tecnologias/react.png";
import logo_redux from "../../pictures/tecnologias/redux.png";
import logo_express from "../../pictures/tecnologias/express.png";
import logo_sequelize from "../../pictures/tecnologias/sequelize.png";
import logo_postgres from "../../pictures/tecnologias/postgres.png";


class About extends React.Component {
    render() {
      return (
      <div  className={styles.about}>
          
          <div className={styles.container_about}>
            <div className={styles.conteiner}>
                <p className={styles.text_title}>APP VIDEOGAME</p>
            </div>
            <div className={styles.conteiner_principal}>
                <div>
                    
                </div>
                <div>
                    <p className={styles.text_cita}>"«Todos tomamos decisiones en la vida, pero al final son las decisiones las que nos moldean». Andrew Ryan  (Bioshock)
                   <br /><br />

                    </p>            
                </div>
            </div>
            <div className={styles.conteiner}>
                <p className={styles.text}>Proyecto Individual de Videogames, consiste en una Single Page Application (SPA).
                Los datos se extraen de la API de <a href="https://apiraw.co/" target="blanc" alt="pokeapi"> https://api.rawg.io</a>. Para el desarrollo de la app utlicé las siguientes tecnologias:
                </p>
                <p className={styles.text}>                               
                JavaScript -
                    React -    
                    Redux -
                    HTML -
                    CSS -<br />
                    Node.js -
                    Express.js -
                    Sequelize -
                    PostgreSQL
                    </p>
                    <p className={styles.text}> 

Las caracteristicas del proyecto son las siguientes:<br />
Busca VIdeojuego por nombre.<br />
Filtrar por genero, plataforma.<br />
Cada Card en la página de inicio muestra un Videojuego y al hacer clic en la misma puedes ver los detalles.<br />
Ordenar alfabéticamente <br />
Crear un nuevo videojuego llenando el formulario, modificarlo y eliminarlo.<br />
                <br /><br />Created By Lucas Zamblera </p>
            </div>
            <div className={styles.conteiner_tecnologias}>
                <img className={styles.image_tecnologias} src={logo_react} alt="react" />
                <img className={styles.image_tecnologias} src={logo_redux} alt="redux" />
                <img className={styles.image_tecnologias} src={logo_express} alt="express" />
                <img className={styles.image_tecnologias} src={logo_sequelize} alt="sequelize" />
                <img className={styles.image_tecnologias} src={logo_postgres} alt="postgres" />
            </div>  
            <Link to='/home'><button className={styles.button}> Home</button></Link>              
           
          </div>   
     
     
      </div> 
      )
    }
  }

export default About;