import React, { Component, useState, useEffect } from 'react'
import { connect } from 'react-redux'

// components
import Search from '../components/Search'
import Containeritem from '../components/Containeritem'
import Categories from '../components/Categories';

//style
import '../assets/styles/app.scss'

//hooks
/* import useInitialState from '../hooks/useInitialState'
const api = 'https://yts.lt/api/v2/list_movies.json?sort=seeds&limit=15' 
 deje de utilizar hooks porqe ahora esoy utilizando redux con un archivo porpio json*/

const Home = ({ myList, trends, originals }) => {
    // const initialState = useInitialState(api)
    return (
        <>
            <Search />
            {
                myList.length > 0 && 
                    <Categories title={'Mi lista'}>
                        <Containeritem data= {myList}/>
                    </Categories> 
            }
            <Categories title={'Tendencia'}>
                <Containeritem data= {trends} />
            </Categories>
            <Categories title={'Originales'}>
                <Containeritem data= {originals} />
            </Categories >
        </>
    )
}

const mapStateToProps = state => {
    return{
        myList: state.myList,
        trends: state.trends,
        originals: state.originals,
    }    
}

export default connect(mapStateToProps, null)(Home)
