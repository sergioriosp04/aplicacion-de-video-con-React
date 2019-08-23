import React, { Component } from 'react'

// components
import Header from '../components/Header'
import Search from '../components/Search'
import Containeritem from '../components/Containeritem'

//style
import '../assets/styles/app.scss'
import ContainerItem from '../components/Containeritem';
import Categories from '../components/Categories';

class App extends Component{
    render(){
        return(
            <div className="App">
                <Header />
                <Search />
                <Categories>
                    <Containeritem />
                </Categories>
                <Categories>
                    <Containeritem />
                </Categories>
                <Categories>
                    <Containeritem />
                </Categories>
                <Categories>
                    <Containeritem />
                </Categories>
            </div>
        )
    }
}

export default App

