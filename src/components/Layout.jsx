import React from 'react'
import Header from '../components/Header'

const Layout = ({ children }) => (
    <div className="App">
        <Header />
        {children}
    </div>

)

export default Layout