import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import './style.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Service from './Service';
import Home from './Home';
import Navbar from './Navbar';
import About from './About';
import Contact from './Contact';

const Myapp = () => { 
    return(
    <> 
        <Navbar/>
        <Switch>
            <Route exact path="/" component= {Home} />
            <Route exact path="/contact" component = {Contact} />
            <Route exact path="/service" component= {Service} />
            <Route exact path="/about" component={About} />
            <Redirect to='/' />
        </Switch>
    </>
    );
}
export default Myapp;