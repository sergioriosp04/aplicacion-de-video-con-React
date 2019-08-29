import React from 'react'
//redux
import { connect } from 'react-redux'
import { setFavorite, deleteFavorite } from '../action'
//styles
import '../assets/styles/components/Item.scss'
//images
import iconPlay from '../assets/static/play-icon.png'
import iconAdd from '../assets/static/plus-icon.png'

const Item = (props) =>{
    const { cover, title, duration, id, isList } = props
    const handleSetFavorite = () => {
        console.log('click')
        props.setFavorite({
            cover, title, duration, id
        })
    }
    const handleDeleteFavorite = (itemId) => {
        props.deleteFavorite(itemId)
    }
    return(
        <div className="item">
             <img className="image-item" src={cover} alt=" imagen pelicula "/>           
             <div className="details-item">
                <img className="icon-item" src={iconPlay} alt=""/>
                <img 
                    className="icon-item" 
                    src={iconAdd} alt=""
                    onClick = {handleSetFavorite}
                />
                <img 
                    className="icon-item" 
                    src="https://static.platzi.com/media/public/uploads/remove-icon_a56b8107-2c02-49ed-bead-308031b0dd76.png" alt=""
                    onClick = {() => handleDeleteFavorite(id)}
                /> 
                <p> {title}</p>
                <p> Duracion: {duration} min </p>
            </div>
        </div>
    )
}

const mapDispatchToProps = {
    setFavorite,
    deleteFavorite,
}

export default connect(null, mapDispatchToProps)(Item)