import React from 'react';
import { NavLink } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import web from '../src/Images/spaceX.jpg';
import Common from './Common';

const Home = () => {
    return(
        <>
        <Common 
                name="Grow your business with" 
                imgsrc={web} 
                visit='/service' 
                btnname='Get Started' 
            />
        </>
    );
};
export default Home;