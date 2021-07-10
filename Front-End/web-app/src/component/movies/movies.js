import React, { Component } from 'react';
import './movies.css'
import {Link} from 'react-router-dom'


import { Button } from 'bootstrap';
function Movies(propsMovie) {


  
  return(
    <div className="col-lg-3 col-md-6 col-xs-12">

              <div id="card" className="card">
                <img src={propsMovie.image} className="card-img-top pt-2" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">{propsMovie.title}</h5>
                  <p className="card-text">{propsMovie.description}</p>
                  <Link id="btn" to="/moviesDetails" className="btn btn-warning"><i id="btn" className="bi bi-file-plus-fill"></i>More details</Link>
                </div>
              </div>
</div>
  )
}
export default Movies;