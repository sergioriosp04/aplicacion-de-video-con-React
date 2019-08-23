import React from 'react'

import '../assets/styles/components/Header.scss'

//imagenes
import videoIcon from '../assets/static/video-icon.jpg'
import userIcon from '../assets/static/user-icon.png'

const Header = () =>{
    return (
        <div className="header">
            <img  className="image-header" src= {videoIcon} alt="icono de video" />
            <div className ="menu">
                <img className="image-user" src= {userIcon} alt="icono user" />
                <span> perfil </span> 
                <div className="navbar">
                    <ul>
                        <li><a href="">cuenta</a></li>
                        <li><a href="">cerrar cesion</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header