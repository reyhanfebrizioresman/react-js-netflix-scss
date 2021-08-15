import React from 'react'
import { Featured, List, Navbar } from '../../Components'
import './Home.scss'

const Home = () => {
    return (
        <div className="home">
            <Navbar />
            <Featured/>
            <List/>
            <List/>
            <List/>
            <List/>
        </div>
    )
}

export default Home
