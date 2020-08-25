import React from 'react'
import { NavLink } from "react-router-dom"


const Display = (props) => {
    return(
        <>
        <section className="page-content">
            <article className="panel">
                <div className="container-fluid nav-bg">
                    <div className="row">
                        <div className="col-md header-img d-flex align-items-center justify-content-center">
                            <img src={props.imgsrc} alt="image icon" className="img-fluid animate" />
                        </div>
                        <div className="col-md d-flex align-items-center justify-content-center">
                            <div className="">
                                <h1>{props.name} <strong className="brand-name">SightExplore</strong></h1>
                                <h2 className="my-3">We are the team of talented developer making website</h2>
                                <div className="my-3">
                                    <NavLink to={props.visit} class="btn-get-started">
                                        {props.btname}
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </section>
        </>
    );
};

export default Display;