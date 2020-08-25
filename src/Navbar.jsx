import React from 'react'
import { NavLink } from "react-router-dom"

const Navbar = () => {
    return(
        <>
        <header className="main-header">
            <div className="container-fluid nav-bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <nav className="navbar navbar-expand-lg navbar-light ">
                            <NavLink className="navbar-brand" to="/">Sight Explore</NavLink>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <NavLink exact activeClassName="menu_active" className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink activeClassName="menu_active" className="nav-link" to="/about">About</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink activeClassName="menu_active" className="nav-link" to="/service">Service</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink activeClassName="menu_active" className="nav-link" to="/contact">Contact</NavLink>
                                </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
           </>
    );
};

export default Navbar;