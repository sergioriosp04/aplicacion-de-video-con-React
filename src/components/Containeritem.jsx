import React from 'react'

import Item from '../components/Item'

import '../assets/styles/components/Containeritem.scss'

const Containeritem = ({ data }) =>{
    return(
        <div className="container-item">
            {console.log(data.movies)}
            {data.movies.map(movie =>
                <Item key={movie.id} {...movie}/>        
            )}
        </div>
    )
}

export default Containeritem