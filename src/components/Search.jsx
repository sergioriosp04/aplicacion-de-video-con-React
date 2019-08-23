import React from 'react'
import '../assets/styles/components/Search.scss'

const Search = () =>{
    return(
        <div className="search">
            <h2> ¿ Que quieres Ver ? </h2>
            <input type="text" placeholder=" Buscar pelicula o serie "/>
        </div>
    )
}

export default Search