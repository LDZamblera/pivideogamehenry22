import React from "react";
import { NavLink } from "react-router-dom";
import style from './MainPage.module.css';
import FondoLanding from './media/FondoLan.mp4';
import provisional from './media/ProvisionaleImage.png';
import logoApp from './media/Logo_APP.png';
import cinta from './media/cinta.png';


const MainPage = () => {
 return(
    <div className={style.supreme_container}>
        <div className={style.video_wrapper}>
            <video playsInline autoPlay muted loop poster={provisional}>
                <source src={FondoLanding} type='video/mp4'/>
            </video> 
        </div>
        <div className={style.second_container}>
            <div className={style.container_logo}>
                <img src={logoApp} alt='logoApp' className={style.logo}/>
            </div>
            <div className={style.container_cinta}>
                <img src={cinta} alt='cinta' className={style.cinta}/>
            </div>
            <div className={style.container_link}>
                <NavLink to='/home' className={style.link}>Start</NavLink>
            </div>
        </div>
    </div>
 )
};


export default MainPage;