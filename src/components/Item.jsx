import React from 'react'

import '../assets/styles/components/Item.scss'
//images
import iconPlay from '../assets/static/play-icon.png'
import iconAdd from '../assets/static/plus-icon.png'

const Item = () =>{
    return(
        <div className="item">
            <img className="image-item" src="https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260" alt=""/>
            <div className="details-item">
                <img className="icon-item" src={iconPlay} alt=""/>
                <img className="icon-item" src={iconAdd} alt=""/>
                <p> Descripcion de la pelucula</p>
                <p> Duracion: 1:58 min </p>
            </div>
        </div>
    )
}

export default Item