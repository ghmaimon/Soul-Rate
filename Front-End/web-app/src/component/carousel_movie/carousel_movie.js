import React from 'react';
import "./carousel_movie.css";

let Carousel_movie = (props) => {

    let image = require("./movies/maxresdefault.jpg");
    return (
    <div className="carousel-item active ">
        <img src={image} className="w-25 rounded mx-auto d-block " alt="..."/>
        <div id="movieCaption" className="carousel-caption d-none d-md-block">
            <h5 >{props.title}</h5>
            <p>{props.description}</p>
        </div>
    </div>
    )
}

export default Carousel_movie;

