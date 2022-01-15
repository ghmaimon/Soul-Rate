import React, { Component } from 'react';
import item3 from '../../images/item3.jpg';
import avenger from '../../images/avengers.jpg'
import './news.css'
class News extends Component {
  render() {
    return (
      <div className="login">
        <div className="row">
          <div className="col-9">
            <div id="cardContainer" className="row me-4 ms-4 mt-4">
            <h1 className='Header1'>News</h1>
              <div id="cardMovieWraper" className="card ">
                <img src={avenger} className="card-img-top mx-auto d-bloc" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">News 1</h5>
                  <p className="card-text">this is news section ..............</p>
                  <a href="#" id="btnMoreDetails" className="btn btn-warning"><i id="iUser" className="bi bi-bookmark-plus-fill"></i>know more</a>
                </div>
              </div>
              <div id="cardMovieWraper" className="card ">
                <img src={avenger} className="card-img-top mx-auto d-bloc" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">News 1</h5>
                  <p className="card-text">this is news section ..............</p>
                  <a href="#" id="btnMoreDetails" className="btn btn-warning"><i id="iUser" className="bi bi-bookmark-plus-fill"></i>know more</a>
                </div>
              </div>
              <div id="cardMovieWraper" className="card ">
                <img src={avenger} className="card-img-top mx-auto d-bloc" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">News 1</h5>
                  <p className="card-text">this is news section ..............</p>
                  <a href="#" id="btnMoreDetails" className="btn btn-warning"><i id="iUser" className="bi bi-bookmark-plus-fill"></i>know more</a>
                </div>
              </div>
              <div id="cardMovieWraper" className="card ">
                <img src={avenger} className="card-img mx-auto d-bloc" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">News 1</h5>
                  <p className="card-text">this is news section ..............</p>
                  <a href="#" id="btnMoreDetails" className="btn btn-warning"><i id="iUser" className="bi bi-bookmark-plus-fill"></i>know more</a>
                </div>
              </div>
            </div>
            
          </div>
          <div id="card" className="col-3 mt-4">
            <h1 className="Header1">Reviews</h1>
            <div id="card123" className="card mb-3" >
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={item3} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Movie title</h5>
                    <p className="card-text">this movie is awesome I swear for my life bro ,don't forget to watch it ....</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                  </div>
                </div>
              </div>
            </div>
            <div id="card123" className="card mb-3" >
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={item3} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Movie title</h5>
                    <p className="card-text">this movie is awesome I swear for my life bro ,don't forget to watch it ....</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card bg-warning">
            .III
          </div>
        </div>
      </div>
    )
  }
}
export default News;