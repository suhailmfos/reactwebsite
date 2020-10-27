import React from 'react';
import { NavLink } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Common = (props) => {
    return(
        <>
        <section id="header" className="d-flex align-items-center">
         <div className="container-fluid">
         <div className="container">
          <div className="row">
           <div className="col-6 mx-auto d-flex justify-content-center flex-column">
             <h2> {props.name} <strong className="brand-name">Suhail Technical</strong>
             </h2>
             <h5 className="my-3">
                We are the team of talented developer making websites.      
             </h5>
             <div className="mt-3">
              <NavLink to={props.visit} className="btn-get-started"> {props.btnname}
              </NavLink>
             </div>
            </div>
            <div className="col-sm-6 col-lg-6 order-1 order-lg-2 header-img">
              <img src={props.imgsrc} className="img-fluid animated" alt="home img" />
            </div>
          </div>
          </div>
          </div>
        </section>
        </>
    );
};
export default Common;