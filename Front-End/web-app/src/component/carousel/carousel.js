import React,{Component} from 'react';
import Carousel_movie from '../carousel_movie/carousel_movie';
import axios from 'axios';

import "./carousel.css"
class Carousel extends Component{

    state = {
        movies: [],
    }

    async componentDidMount(){
      let config = {
          headers: {
            Authorization: "Token d2b6238d26c477611c6dcb9bfff22897c4e56eef"
          }
      }
      let movies = await axios.get("http://0.0.0.0:8000/api/movies/movies/", config)
              .then(res => res.data)
      this.setState({...this.state, movies});
    }

    render(){

        let movie_cards = this.state.movies.map(movie => <Carousel_movie title={movie.title} image={movie.image} description="something"/>);
        return(
            <div>
              <div id="card" className="col-8 card">
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">

                            <button className="carousel-control-prev btn btn-outline-secondary" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                              <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next btn btn-outline-secondary" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                              <span className="carousel-control-next-icon" aria-hidden="true"></span>
                              <span className="visually-hidden">Next</span>
                            </button>

                            <div>{movie_cards}</div>

                    </div>
                </div>
              </div>
              <div className="card bg-warning">
                .
              </div>
            </div>
        )
    }
}
export default Carousel;