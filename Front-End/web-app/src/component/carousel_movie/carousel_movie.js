import React from 'react';
import "./carousel_movie.css";
import item1 from '../../images/item1.jpg'
import item2 from '../../images/item2.jpg'
import item3 from '../../images/item3.jpg'
function Carousel_movie (props) {

    return (
        <div className="carousel-item active">
            {console.log("cc")}
            <img src={props.image} className="w-25 rounded mx-auto d-block " alt="..."/>
            <div id="movieCaption" className="carousel-caption d-none d-md-block">
                <h5 >{props.title}</h5>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default Carousel_movie;

