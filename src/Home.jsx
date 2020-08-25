import React from 'react'
import web from '../src/Images/home.png'
import { NavLink } from "react-router-dom"
import Display from './Display'


const Home = () => {
    return(
        <>
            <Display 
                name='Grow your business with'
                imgsrc={web}
                visit="/service"
                btname="Get Started"
            />
        </>
    );
};

export default Home;