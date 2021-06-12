import React, { Component } from 'react';
import './movies.css'
import {Link} from 'react-router-dom'

import avengers from '../../images/avengers.jpg'
import { Button } from 'bootstrap';
class Movies extends Component{


  render(){
    /*const movies=this.props.movies.map( (mv)=>{
      return(
        <div id="card" className="card" >
        <img src="..." className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Titanic</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      )
    } )*/

    return(
      <div className="movies">
        <div className="container">
          <div className="row pt-5">

<div className="col-lg-3 col-md-6 col-xs-12">
              <div id="card" className="card">
                <img src={avengers} className="card-img-top pt-2" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Avengers : infinity war</h5>
                  <p className="card-text">content.........</p>
                  <Link id="btn" to="/moviesDetails" className="btn btn-warning"><i id="btn" className="bi bi-file-plus-fill"></i>More details</Link>
                </div>
              </div>
</div>

<div className="col-lg-3 col-md-6 col-xs-12">
              <div id="card" className="card">
                <img src={avengers} className="card-img-top pt-2" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Avengers : infinity war</h5>
                  <p className="card-text">content.........</p>
                  <a id="btn" href="#" className="btn btn-warning"><i id="btn" className="bi bi-file-plus-fill"></i>More details</a>
                </div>
              </div>
</div>



<div className="col-lg-3 col-md-6 col-xs-12">
              <div id="card" className="card">
                <img src={avengers} className="card-img-top pt-2" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Avengers : infinity war</h5>
                  <p className="card-text">content.........</p>
                  <a id="btn" href="#" className="btn btn-warning"><i id="btn" className="bi bi-file-plus-fill"></i>More details</a>
                </div>
              </div>
</div>




<div className=" col-lg-3 col-md-6 col-xs-12">
              <div id="card" className="card">
                <img src={avengers} className="card-img-top pt-2" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Avengers : infinity war</h5>
                  <p className="card-text">content.........</p>
                  <a id="btn" href="#" className="btn btn-warning"><i id="btn" className="bi bi-file-plus-fill"></i>More details</a>
                </div>
              </div>
</div>






          </div>
        </div>
      </div>
    )
  }
}
export default Movies;