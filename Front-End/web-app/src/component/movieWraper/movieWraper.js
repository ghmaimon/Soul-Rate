import React, { Component } from 'react';
import "./movieWraper.css"
import { Link } from 'react-router-dom'
import axios from 'axios'
import avenger from '../../images/avengers.jpg'
import { Button } from 'bootstrap';
class MoviesWraper extends Component {

    state = {
        listMovies: []
    }

    async componentDidMount() {
        await axios.get("http://0.0.0.0:8000/api/movies/movies/", {
            headers: {
                "Authorization": "Token 14c3eaaa37d8a17430b3a866ed0bd1b4fa2da432"
            }
        }).then(
            (res) => {
                this.setState({ ...this.state, listMovies: res.data })
                console.log(res.data);
            }
        )

        console.log(this.state.listMovies);
    }
    render() {

        return (
            <div className="movies">
                <div className="container">
                    <div className="row pt-5 ">
                        <div id="rowCollapse" className="row col-12">
                            <span className="NavCollapse">
                                <h2>Filter Movie :</h2>
                                
                                    <button id="btnCollapse" className="btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
                                        <i className="bi bi-chevron-double-down fs-5"></i>
                                    </button>
                                
                            </span>
                            <div >{/* style="min-height: 120px;"*/}
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
                            <div id="cardMovieWraper" className="card ">
                                <img src={avenger} className="card-img-top mx-auto d-bloc" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" id="btnMoreDetails" className="btn btn-warning"><i id="iUser" className="bi bi-bookmark-plus-fill"></i>Go somewhere</a>
                                </div>
                            </div>
                            <div id="cardMovieWraper" className="card ">
                                <img src={avenger} className="card-img-top mx-auto d-bloc" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" id="btnMoreDetails" className="btn btn-warning"><i id="iUser" className="bi bi-bookmark-plus-fill"></i>Go somewhere</a>
                                </div>
                            </div>
                            <div id="cardMovieWraper" className="card ">
                                <img src={avenger} className="card-img-top mx-auto d-bloc" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" id="btnMoreDetails" className="btn btn-warning"><i id="iUser" className="bi bi-bookmark-plus-fill"></i>Go somewhere</a>
                                </div>
                            </div>
                            <div id="cardMovieWraper" className="card ">
                                <img src={avenger} className="card-img mx-auto d-bloc" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" id="btnMoreDetails" className="btn btn-warning"><i id="iUser" className="bi bi-bookmark-plus-fill"></i>Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MoviesWraper;