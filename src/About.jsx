import React from 'react';
import { NavLink } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import web from '../src/Images/chambal.jpg';
import Common from './Common';

const About = () => {
    return(
        <>
            <Common 
                name="Welcome to about page" 
                imgsrc={web} 
                visit='/contact' 
                btnname='Contact Us' 
            />
        </>
    );
};
export default About;