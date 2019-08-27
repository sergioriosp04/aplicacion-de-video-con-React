import React from 'react'

import '../assets/styles/components/Item.scss'
//images
import iconPlay from '../assets/static/play-icon.png'
import iconAdd from '../assets/static/plus-icon.png'

const Item = ({ medium_cover_image, title, runtime }) =>{
    return(
        <div className="item">
            {/* <img className="image-item" src="https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260" alt=""/> */}
             <img className="image-item" src={medium_cover_image} alt=" imagen pelicula "/>           
             <div className="details-item">
                <img className="icon-item" src={iconPlay} alt=""/>
                <img className="icon-item" src={iconAdd} alt=""/>
                <p> {title}</p>
                <p> Duracion: {runtime} min </p>
            </div>
        </div>
    )
}

export default Item