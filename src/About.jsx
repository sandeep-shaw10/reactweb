import React from 'react'
import web from '../src/Images/search.svg'
import { NavLink } from 'react-router-dom'
import Display from './Display'

const About = () => {
    return(
        <>
            <section className="page-content">
            <Display 
                name='Welcome to About Page'
                imgsrc={web}
                visit="/contact"
                btname="Contact Now"
            />
            </section>

        </>
    );
};

export default About;