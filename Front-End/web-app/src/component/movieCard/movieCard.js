import React from 'react';
import { Link } from 'react-router-dom'
import "./movieCard.css"


let MovieCard = (props) => {

    return (<div className="card cardMovieWraper">
        <img src={props.imgSrc} className="card-img-top mx-auto d-bloc" alt={props.imgAlt} />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <Link to={"/moviesDetails" + props.link} id="btnMoreDetails" className="btn btn-warning"><i id="iUser" className="bi bi-bookmark-plus-fill"></i>more</Link>
            </div>
    </div>)
}

export default MovieCard;
