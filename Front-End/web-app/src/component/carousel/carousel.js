import React, { Component } from 'react';
import Carousel_movie from '../carousel_movie/carousel_movie';
import axios from 'axios';
import item1 from '../../images/item1.jpg';
import item2 from '../../images/item2.jpg';
import item3 from '../../images/item3.jpg';
import "./carousel.css";
import Slide from '../Slides/slide';
class Carousel extends Component {

  state = {
    movies: [],
  }

  async componentDidMount() {
    let config = {
      headers: {
        Authorization: "Token d2b6238d26c477611c6dcb9bfff22897c4e56eef"
      }
    }
    let movies = await axios.get("http://0.0.0.0:8000/api/movies/movies/", config)
      .then(res => res.data)
    this.setState({ ...this.state, movies });
  }

  render() {

    let movie_cards = this.state.movies.map(movie => <Carousel_movie title="dd" />);
    return (
      <div>
        <div className="row">
          <div className="col-9 mt-4">
            <div id="backgroundNone" className="row card">
              <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">

                  <button className="carousel-control-prev btn " type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next btn " type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>

                  <div id="card12" className="card bg-aqua">
                    <Carousel_movie title={"Spider-Man"} description={"this movie is about bla bla bla"} image={item1} />

                    {/*movie_cards*/}
                  </div>
                  {/*<img src={item1} className="w-25 rounded mx-auto d-block " alt="..."/>*/}

                </div>
              </div>
            </div>
            <div className="row">
              <a href="" className="Header2">Movies Comming Soon</a><br /><Slide />
              <a href="" className="Header2">Movies In Box Office</a><br /><Slide />
              <a href="" className="Header2">Shows In Netflix</a><br /><Slide />
              <a href="" className="Header2">Shows In Disney+</a><br /><Slide />
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
export default Carousel;