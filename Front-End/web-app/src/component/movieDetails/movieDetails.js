import React, { Component } from 'react';
import ReactPlayer from 'react-player'
import { CardGroup, Card, Label } from 'reactstrap';
import './movieDetails.css'
import avengers from '../../images/avengers.jpg'

class MovieDetails extends Component {
    state = {
        open: null
    }
    changeStateHandler = () => {
        this.setState({
            open: true
        })
    }
    changeStateToNull = () => {
        this.setState({
            open: null
        })
    }
    display = (state) => {
        if (state == null) {
            return (<div></div>)
        }
        else {
            return (
                <div id="video" className="border border-5">
                    <div className="position-absolute top-50 start-50 translate-middle">
                        <button onClick={this.changeStateToNull} className="btn btn-danger"><i className="bi bi-x-circle-fill"></i></button>
                        <ReactPlayer url="https://www.youtube.com/watch?v=6ZfuNTqbHE8" />
                    </div>
                </div>
            )
        }
    }
    render() {


        return (
            <div className="header ">
                {this.display(this.state.open)}
                <div className="container-fluid d-flex">
                    <div id="row" className="row my-5 mx-5">

                        <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12  d-flex justify-content-center justify-content-md-start pt-3" >
                            <div id="card1" className="card my-5">
                                <img src={avengers} className="card-img-top " alt="..." />

                                <a onClick={this.changeStateHandler} id="btn" href="#" className="btn btn-danger"><i id="btn" className="bi bi-collection-play-fill"></i>Trailer</a>
                            </div>
                        </div>

                        <div className="col-lg-9 col-md-9 col-xs-12 ">
                            <div className="card-body">
                                <p className="fs-1 fw-bold">Avenger : infinity war</p>
                                <span className="fw-lighter">
                                    Soul Rate score
                                    <label id="lbl-score" className="border-5 rounded-circle p-3 mb-2 text-white fs-5 fw-bold mx-2">89</label>
                                    <label className="fw-lighter border border-2 border-black">_PG- 13_</label>
                                    <label className="mx-3 fw-bolder"><i class="bi bi-calendar"></i>   Apr 32rd,2018</label>
                                    <label className="fw-lighter fs-3 mx-2">|</label>
                                    <label className="fw-bolder">Science Fiction, Adventure, Action</label>
                                </span>
                                <p className="fw-normal">As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.</p>

                                <div className="float-start">
                                    <p className="fw-lighter fst-italic">Directors</p>
                                    <a href="#">Anthony Russo</a><br />
                                    <a href="#">Joe Russo</a>
                                </div>
                                <div className="col-4 ms-auto mx-5 border border-right-0">
                                    <p className="fw-lighter fst-italic">Starring</p>
                                    <a href="#">Robert Downey Jr.</a><br />
                                    <a href="#">Chris Hemsworth</a>
                                    <a href="#">Chris Evans</a>
                                </div>

                                <div className="my-5 border border-2 py-3">
                                    <a href="#"><i class="bi bi-tv"></i> Where to Watch</a>
                                    <a href="#"><i class="bi bi-people"></i> Full Cast & Crew</a>
                                    <a href="#"><i class="bi bi-newspaper"></i> News</a>
                                </div>

                            </div>
                        </div>


                    </div>
                </div>
            </div>
        )
    }
}


export default MovieDetails;