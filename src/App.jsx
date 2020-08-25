import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import { Switch, Route, Redirect } from "react-router-dom"
import Home from "./Home"
import Contact from "./Contact"
import About from "./About"
import Service from "./Service"
import Navbar from "./Navbar"
import Footer from "./Footer"

const App = () => {
    return(
        <> 
        <Navbar/>
            <Switch>
                <Route exact path="/about" component={About} />
                <Route exact path="/service" component={Service} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/" component={Home} />
                <Redirect to="/" />
            </Switch>
        <Footer/>
        </>
    );
};

export default App;