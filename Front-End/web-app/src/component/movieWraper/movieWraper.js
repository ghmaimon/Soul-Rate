import React, { Component } from 'react';
import "./movieWraper.css"
import { Link } from 'react-router-dom'
import axios from 'axios'
import avenger from '../../images/avengers.jpg'
import { Button } from 'bootstrap';
import MovieCard from '../movieCard/movieCard';
class MoviesWraper extends Component {

    state = {
        listMovies: []
    }

    async componentDidMount() {
        await axios.get("http://0.0.0.0:8000/api/movie/movies/", {
            headers: {
                "Authorization": "Token ec1319eeefcbdee61483df24715ed2ecd1fad935"
            }
        }).then(
            (res) => {
                this.setState({ ...this.state, listMovies: res.data })
                console.log(res.data)
            }
        )
    }
    render() {

        return (
            <div className="login">
                <div className="container">
                    <div className="row pt-5 ">
                        <div id="rowCollapse" className="row col-12">
                            <span className="NavCollapse">
                                <h2>Filter Movie :</h2>

                                <button id="btnCollapse" className="btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
                                    <i className="bi bi-chevron-double-down fs-5"></i>
                                </button>

                            </span>
                            <div >
                                <div className="collapse collapse-horizontal" id="collapseWidthExample">
                                    <form id="formMovieWraper" className="row">
                                        <div id="formFilter" className="form-group col-lg-4 col-sm-3">
                                            <label for="genres"><span>Genres:</span></label>
                                            <select id="genres" className="form-select form-select-sm " aria-label=".form-select-lg example">
                                                <option selected>Open this select menu</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                        <div id="formFilter" className="form-group col-lg-4 col-sm-3">
                                            <label for="genres"><span>Order by:</span></label>
                                            <select id="genres" className="form-select form-select-sm " aria-label=".form-select-lg example">
                                                <option selected>Open this select menu</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                        <div id="formFilter" className="form-group col-lg-4 col-sm-3">
                                            <label for="genres"><span>Stars:</span></label>
                                            <select id="genres" className="form-select form-select-sm " aria-label=".form-select-lg example">
                                                <option selected>Open this select menu</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                            <div id="cardContainer" className="row">
                                {this.state.listMovies.map((movie) => {
                                    return (<MovieCard key={movie.id} title = {movie.title}
                                    description = {movie.description}
                                    link = {""}
                                    imgSrc = {`data:image;base64,${movie.base64_image}`}
                                    imgAlt = {"..."}/>)
                                })}
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MoviesWraper;