import React, { Component } from 'react';
import item1 from '../../images/item1.jpg'
import item2 from '../../images/item2.jpg'
import item3 from '../../images/item3.jpg'
import "./slide.css"
class Slide extends Component {

    state = {

    }

    render() {
        return (
            <div>
                {/* New movies */}
                <div id="card" className="card">
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
                            <div className="carousel-item active ">
                                {/* Movies */}
                                <div className="col">
                                    <div className="col-md-12">

                                        <div id="carouselContainer" className="row">
                                            <div id="item1" className="col-sm-3">
                                                <div className="thumb-wrapper">
                                                    <div className="img-box">
                                                        <img src={item1} className="w-50 rounded mx-auto d-block" alt="" />
                                                    </div>
                                                    <div className="thumb-content">
                                                        <h4>HeadLine of News</h4>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="item1" className="col-sm-3">
                                                <div className="thumb-wrapper">
                                                    <div className="img-box">
                                                        <img src={item2} className="w-50 rounded mx-auto d-block" alt="" />
                                                    </div>
                                                    <div className="thumb-content">
                                                        <h4>HeadLine of News</h4>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="item1" className="col-sm-3">
                                                <div className="thumb-wrapper">
                                                    <div className="img-box">
                                                        <img src={item3} className="w-50 rounded mx-auto d-block" alt="" />
                                                    </div>
                                                    <div className="thumb-content">
                                                        <h4>HeadLine of News</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                {/* */}
                            </div>
                        </div>
                    </div>
                </div>
                {/*  */}
            </div>
        )
    }
}
export default Slide;