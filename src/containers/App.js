import React, { Component, useState, useEffect } from 'react'

// components
import Header from '../components/Header'
import Search from '../components/Search'
import Containeritem from '../components/Containeritem'
import Categories from '../components/Categories';

//style
import '../assets/styles/app.scss'
//hooks
import useInitialState from '../hooks/useInitialState'
const api = 'https://yts.lt/api/v2/list_movies.json?sort=seeds&limit=15'

const App = () => {
    const initialState = useInitialState(api)

    if(initialState.length === 0){
        return <h1> cargando... </h1>
    }else{
        return (
            <div className="App">
                <Header />
                <Search />
                <Categories title={'Mi lista'}>
                    <Containeritem data= {initialState.data} />
                </Categories>
                <Categories title={'Tendencia'}>
                    <Containeritem data= {initialState.data} />
                </Categories>
                <Categories title={'Lo nuevo'}>
                    <Containeritem data= {initialState.data} />
                </Categories >
                <Categories title={'Tus concidencias'}>
                    <Containeritem data= {initialState.data} />
                </Categories>
            </div>
        )
    }
}

export default App

